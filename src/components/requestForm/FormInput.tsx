import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store/store";
import {
  changeInputValue as changeInputValueApplicant,
  setErrors as setErrorsApplicant,
} from "../../store/reducers/applicantFieldsReducer";

import {
  changeInputValue as changeInputValueProvider,
  setErrors as setErrorsProvideer,
} from "../../store/reducers/providerFieldsReducer";

import { ChangeEvent } from "react";
import isEmpty from "validator/lib/isEmpty";
import isEmail from "validator/lib/isEmail";
import { validateRut } from "@/utils";
import { getNamesByRut } from ".";

interface props {
  field: field;
  origin: string;
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

const FormInput = (props: props) => {
  const dispatch: AppDispatch = useDispatch();
  const { field, origin } = props;

  const handleChange = async (
    event: ChangeEvent<HTMLInputElement>,
    field: field
  ) => {
    const target = event.target;
    let changeInputValue;
    let setErrors;
    if (origin == "applicant") {
      changeInputValue = changeInputValueApplicant;
      setErrors = setErrorsApplicant;
    } else {
      changeInputValue = changeInputValueProvider;
      setErrors = setErrorsProvideer;
    }

    dispatch(
      changeInputValue({ value: target.value.trim(), name: field.name })
    );

    let isValidRut;
    switch (field.name) {
      case "RUN":
        isValidRut = validateRut(target.value);
        dispatch(
          setErrors({
            value: isValidRut==false,
            name: field.name,
          })
        );
        console.log(isValidRut);
        if (isValidRut) {
          const rut = target.value;
          const result = await getNamesByRut(rut);
          
          dispatch(
            changeInputValue({
              value: result.nombres,
              name: "Nombres",
            })
          );

          dispatch(
            changeInputValue({
              value: result.primerApellido + " " + result.segundoApellido,
              name: "Apellidos",
            })
          );
        }
        break;
      case "Email":
        dispatch(
          setErrors({ value: !isEmail(target.value), name: field.name })
        );
        break;
      default:
        if (field.required) {
          dispatch(
            setErrors({ value: isEmpty(target.value.trim()), name: field.name })
          );
        }
        break;
    }
  };

  return (
    <input
      type={field.type || "text"}
      maxLength={field.maxLength ? field.maxLength : undefined}
      className={
        field.hasErrors && isEmpty(field.value)
          ? "border-2 p-1.5 rounded border-spacing-y-60 border-b-red-500"
          : "border-2 p-1.5 rounded border-spacing-y-60"
      }
      placeholder={field.name}
      value={field.value}
      onChange={(event) => handleChange(event, field)}
    />
  );
};

export default FormInput;
