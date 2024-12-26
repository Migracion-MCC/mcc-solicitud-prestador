import { useEffect } from "react";
import "../../App.css";
import PageTitle from "../pagetitle/PageTitle";
import FormInput from "./FormInput";
import FormSelectInput from "./FormSelectInput";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../../store/store";
import { setDropdownList as setDropdownListApplicant } from "../../store/reducers/applicantFieldsReducer";
import { setDropdownList as setDropdownListProvider } from "../../store/reducers/providerFieldsReducer";
import {
  getCommunes,
  getCountries,
  getGenres,
  getIdentificationTypes,
  getRegions,
} from ".";

const Step2 = () => {
  const dispatch: AppDispatch = useDispatch();

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
  
  const { applicantFields, providerFields } = useSelector(
    (state: RootState) => ({
      applicantFields: state.applicantFields,
      providerFields: state.providerFields,
    })
  );

  useEffect(() => {
    const getListsInformation = async () => {
      const userTypes = await getIdentificationTypes();
      const countries = await getCountries();
      const genres = await getGenres();
      const communes = await getCommunes();
      const regions = await getRegions();
      dispatch(
        setDropdownListApplicant({
          name: "Tipo identificacion",
          value: userTypes,
        })
      );
      dispatch(setDropdownListApplicant({ name: "Comuna", value: communes }));
      dispatch(setDropdownListApplicant({ name: "Región", value: regions }));
      dispatch(setDropdownListApplicant({ name: "Genero", value: genres }));
      dispatch(
        setDropdownListApplicant({ name: "Nacionalidad", value: countries })
      );

      dispatch(setDropdownListProvider({ name: "Comuna", value: communes }));
      dispatch(setDropdownListProvider({ name: "Región", value: regions }));
    };
    getListsInformation();
  }, []);

  const getFieldByType = (field: field, index: number, origin: string) => {
    return (
      <div className="grid grid-cols-2 mr-5 py-2 px-2" key={index}>
        <p className="text-left font-bold">
          {field.name}:
          {field.required && <span className="text-red-600">*</span>}
        </p>

        {field.inputType == "Input" && (
          <FormInput field={field} origin={origin} />
        )}

        {field.inputType == "Dropdown" && (
          <FormSelectInput
            fields={field.list ? field.list : []}
            field={field}
            origin={origin}
          />
        )}
      </div>
    );
  };

  return (
    <div className="container">
      <PageTitle
        title={"Datos Solicitante"}
        body={
          "Por favor complete el siguiente formulario con los datos del solicitante"
        }
      />

      <div className="grid lg:grid-cols-2 sm:grid-cols-1 p-7 border border-slate-400 rounded">
        {applicantFields.map((field, index) => {
          return getFieldByType(field, index, "applicant");
        })}
      </div>

      <PageTitle
        title={"Datos Prestador"}
        body={
          "Por favor complete el siguiente formulario con los datos del prestador"
        }
      />
      <div className="grid lg:grid-cols-2 sm:grid-cols-1 p-7 border border-slate-400 rounded">
        {providerFields.map((field, index) => {
          return getFieldByType(field, index, "provider");
        })}
      </div>
      <div className="text-left  mx-auto m-5">
        <h1 className="font-bold text-red-500">* Datos obligatorios</h1>
      </div>
    </div>
  );
};

export default Step2;
