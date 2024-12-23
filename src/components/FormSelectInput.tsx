import { changeInputValue as changeInputValueApplicant } from "../store/reducers/applicantFieldsReducer";

import { changeInputValue as changeInputValueProvider } from "../store/reducers/providerFieldsReducer";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../store/store";

interface listField {
  idTipoUsuario: number;
  nombreTipoUsuario: string;
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
  fields: Array<listField>;
  origin: string;
  field: field;
}

const FormSelectInput = (props: props) => {
  const { fields, field, origin } = props;
  const dispatch: AppDispatch = useDispatch();

  const handleChange = (value: string) => {
    if (origin == "applicant") {
      dispatch(changeInputValueApplicant({ value: value, name: field.name }));
    } else {
      dispatch(changeInputValueProvider({ value: value, name: field.name }));
    }
    console.log(value);
  };

  return (
    <select
      className={
        fields.length > 0
          ? "border-2 p-1.5 rounded"
          : "border-2 p-1.5 rounded bg-slate-300"
      }
      disabled={fields.length == 0}
      onChange={(e) => handleChange(e.target.value)}
    >
      <option value="" hidden>
        Seleccione una opción
      </option>
      {fields.map((item: listField, index) => {
        return (
          <option value={item.idTipoUsuario} key={index}>
            {item.nombreTipoUsuario}
          </option>
        );
      })}
    </select>
  );
};

export default FormSelectInput;
