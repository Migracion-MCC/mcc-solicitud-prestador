import {
  changeInputValue as changeInputValueApplicant,
  setDropdownList as setDropdownListApplicant
} from "../../store/reducers/applicantFieldsReducer";

import {
  changeInputValue as changeInputValueProvider,
  setDropdownList as setDropdownListProvider
} from "../../store/reducers/providerFieldsReducer";
import { setLoading } from "@/store/reducers/generalDataReducer";

import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store/store";
import { useState } from "react";
import { getCommunes } from ".";

interface Option {
  codigoPrincipal: string;
  descripcion: string;
  idIdentificacion?: string;
}

interface field {
  name: string;
  hasErrors: boolean;
  inputType: string;
  required: boolean;
  list?: [];
  type: string;
  value: string;
  maxLength?: number;
}

interface props {
  fields: Array<Option>;
  origin: string;
  field: field;
}

const FormSelectInput = (props: props) => {
  const { fields, field, origin } = props;
  const [hasErrors, setHasErrors] = useState(false);
  const dispatch: AppDispatch = useDispatch();

  const handleChange = (value: string) => {
    if (!value.trim()) {
      setHasErrors(true);
    }else{
      setHasErrors(false);
    }

    if (origin == "applicant") {
      dispatch(changeInputValueApplicant({ value: value, name: field.name }));
    } else {
      dispatch(changeInputValueProvider({ value: value, name: field.name }));
    }

    if (field.name == "Región") {
      setCommunesByRegion(value);
    }
  };

  const setCommunesByRegion = async (value: string) => {
    dispatch(setLoading({ loading: true }));
    try {
      const communes = await getCommunes(value);
      const action =
        origin === "applicant"
          ? setDropdownListApplicant({ name: "Comuna", value: communes })
          : setDropdownListProvider({ name: "Comuna", value: communes });
      dispatch(action);
    } catch (error) {
      console.error("Failed to fetch communes:", error);
    }
    dispatch(setLoading({ loading: false }));
  };

  const getDisplayOption = (item: Option, index: number) => {
    const key = item.codigoPrincipal || item.idIdentificacion;
    const label = item.descripcion;
    return (
      <option value={key} key={index}>
        {label}
      </option>
    );
  };

  return (
    <select
      className={`border-2 p-1.5 rounded ${fields.length == 0 && "bg-slate-300"
        } 
      ${hasErrors && "border-b-red-500 border-b-4"}
      `}
      disabled={fields.length == 0}
      onChange={(e) => handleChange(e.target.value)}
    >
      <option value="" hidden>
        Seleccione una opción
      </option>
      {fields.map((item, index) => {
        return getDisplayOption(item, index);
      })}
    </select>
  );
};

export default FormSelectInput;
