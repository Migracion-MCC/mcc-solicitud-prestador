import { useDispatch } from "react-redux";
import { AppDispatch } from "../store/store";
import {
  changeInputValue as changeInputValueApplicant,
  setErrors as setErrorsApplicant,
} from "../store/reducers/applicantFieldsReducer";

import {
  changeInputValue as changeInputValueProvider,
  setErrors as setErrorsProvideer,
} from "../store/reducers/providerFieldsReducer";

import { ChangeEvent } from "react";
import isEmpty from "validator/lib/isEmpty";
import isEmail from "validator/lib/isEmail";
import matches from "validator/lib/matches";

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

  const handleChange = (event: ChangeEvent<HTMLInputElement>, field: field) => {
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

    switch (field.name) {
      case "RUN":
        dispatch(
          setErrors({
            value: !matches(target.value, /^\d{1,8}-[0-9Kk]$/),
            name: field.name,
          })
        );
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
        field.hasErrors
          ? "border-2 p-1.5 rounded border-spacing-y-60 border-red-500 placeholder:text-red-500 text-red-500"
          : "border-2 p-1.5 rounded border-spacing-y-60"
      }
      placeholder={field.name}
      onChange={(event) => handleChange(event, field)}
    />
  );
};

export default FormInput;
