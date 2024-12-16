import { useState } from "react";
import PageTitle from "../PageTitle";
import FormInput from "../FormInput";
import FormSelectInput from "../FormSelectInput";
import "../../App.css";

const Step2 = () => {
  interface field {
    name: string;
    hasErrors: boolean;
    type: string;
    isMandatory: boolean;
  }

  const [identificationTypes] = useState([]);
  const [countries] = useState([]);
  const [genres] = useState([]);
  const [communes] = useState([]);
  const [regions] = useState([]);

  const [applicantFields] = useState([
    {
      name: "Tipo identificacion",
      hasErrors: false,
      type: "Dropdown",
      isMandatory: true,
      list: identificationTypes,
      value: undefined,
    },
    {
      name: "Comuna",
      hasErrors: false,
      type: "Dropdown",
      isMandatory: true,
      list: communes,
      value: undefined,
    },
    {
      name: "RUN",
      hasErrors: false,
      type: "Input",
      isMandatory: true,
      value: undefined,
    },
    {
      name: "Dirección",
      hasErrors: false,
      type: "Input",
      isMandatory: true,
      value: undefined,
    },
    {
      name: "Nacionalidad",
      hasErrors: false,
      type: "Dropdown",
      isMandatory: true,
      list: countries,
      value: undefined,
    },
    {
      name: "Teléfono 1",
      hasErrors: false,
      type: "Input",
      isMandatory: true,
      value: undefined,
    },
    {
      name: "Nombres",
      hasErrors: false,
      type: "Input",
      isMandatory: true,
      value: undefined,
    },
    {
      name: "Teléfono 2",
      hasErrors: false,
      type: "Input",
      isMandatory: false,
      value: undefined,
    },
    {
      name: "Apellidos",
      hasErrors: false,
      type: "Input",
      isMandatory: true,
      value: undefined,
    },
    {
      name: "Teléfono Fijo",
      hasErrors: false,
      type: "Input",
      isMandatory: false,
      value: undefined,
    },
    {
      name: "Genero",
      hasErrors: false,
      type: "Dropdown",
      isMandatory: true,
      list: genres,
      value: undefined,
    },
    {
      name: "Email",
      hasErrors: false,
      type: "Input",
      isMandatory: true,
      value: undefined,
    },
    {
      name: "Región",
      hasErrors: false,
      type: "Dropdown",
      isMandatory: true,
      list: regions,
      value: undefined,
    },
    {
      name: "Fecha Nacimiento",
      hasErrors: false,
      type: "Input",
      isMandatory: true,
      value: undefined,
    },
  ]);

  const [providerFields] = useState([
    {
      name: "RUT",
      hasErrors: false,
      type: "Input",
      isMandatory: true,
      value: undefined,
    },
    {
      name: "Dirección",
      hasErrors: false,
      type: "Input",
      isMandatory: true,
      value: undefined,
    },
    {
      name: "Nombre Razón Social",
      hasErrors: false,
      type: "Input",
      isMandatory: true,
      value: undefined,
    },
    {
      name: "Teléfono 1",
      hasErrors: false,
      type: "Input",
      isMandatory: true,
      value: undefined,
    },
    {
      name: "Nombre Fantasía",
      hasErrors: false,
      type: "Input",
      isMandatory: true,
      value: undefined,
    },
    {
      name: "Teléfono 2",
      hasErrors: false,
      type: "Input",
      isMandatory: false,
      value: undefined,
    },
    {
      name: "Región",
      hasErrors: false,
      type: "Dropdown",
      isMandatory: true,
      list: regions,
      value: undefined,
    },
    {
      name: "Teléfono fijo",
      hasErrors: false,
      type: "Input",
      isMandatory: false,
      value: undefined,
    },
    {
      name: "Comuna",
      hasErrors: false,
      type: "Dropdown",
      isMandatory: true,
      list: communes,
      value: undefined,
    },
    {
      name: "Email",
      hasErrors: false,
      type: "Input",
      isMandatory: true,
      value: undefined,
    },
  ]);

  const getFieldByType = (field: field, index: number) => {
    return (
      <div className="grid grid-cols-2 mr-5 py-2 px-2" key={index}>
        <p className="text-left font-bold">
          {field.name}:
          {field.isMandatory && <span className="text-red-600">*</span>}
        </p>

        {field.type == "Input" && <FormInput fieldName={field.name} />}
        {field.type == "Dropdown" && <FormSelectInput field={field} />}
      </div>
    );
  };

  return (
    <>
      <PageTitle
        title={"Datos Solicitud"}
        body={
          "Por favor complete los datos a continuación asociados al tipo de solicitud a realizar"
        }
      />

      <div className="grid lg:grid-cols-2 sm:grid-cols-1 w-full p-7 border border-slate-400 rounded">
        {applicantFields.map((field, index) => {
          return getFieldByType(field, index);
        })}
      </div>

      <PageTitle
        title={"Datos Prestador"}
        body={
          "Por favor complete el siguiente formulario con los datos del prestador"
        }
      />
      <div className="grid lg:grid-cols-2 sm:grid-cols-1 w-full p-7 border border-slate-400 rounded">
        {providerFields.map((field, index) => {
          return getFieldByType(field, index);
        })}
      </div>
      <div className="text-left  mx-auto m-5">
        <h1 className="font-bold text-red-500">* Datos obligatorios</h1>
      </div>
    </>
  );
};

export default Step2;
