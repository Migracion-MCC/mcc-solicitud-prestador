import { useState } from "react";
import "./App.css";
import ProgressBar from "./components/ProgressBar";
import PageTitle from "./components/PageTitle";
import FormInput from "./components/FormInput";
import FormSelectInput from "./components/FormSelectInput";
const App = () => {
  const steps = ["Datos Solicitante y Afectado", "Comprobante de envío"];
  const currentStep = 0;

  interface field {
    name: string;
    hasErrors: boolean;
    type: string;
  }

  const [fields] = useState([
    { name: "Tipo identificacion", hasErrors: false, type: "Dropdown" },
    { name: "Nacionalidad", hasErrors: false, type: "Dropdown" },
    { name: "Nombres", hasErrors: false, type: "Input" },
    { name: "Apellidos", hasErrors: false, type: "Input" },
    { name: "Genero", hasErrors: false, type: "Dropdown" },
    { name: "Fecha Nacimiento", hasErrors: false, type: "Input" },
    { name: "Región", hasErrors: false, type: "Dropdown" },
    { name: "Comuna", hasErrors: false, type: "Dropdown" },
    { name: "Dirección", hasErrors: false, type: "Input" },
    { name: "Teléfono 1", hasErrors: false, type: "Input" },
    { name: "Teléfono 2", hasErrors: false, type: "Input" },
    { name: "Teléfono Fijo", hasErrors: false, type: "Input" },
    { name: "Email", hasErrors: false, type: "Input" },
  ]);

  const getFieldByType = (field: field, index: number) => {
    return (
      <div className="grid grid-cols-2 mr-5 py-3" key={index}>
        <p className="text-left font-bold">
          {field.name}:<span className="text-red-600">*</span>
        </p>

        {field.type == "Input" && <FormInput fieldName={field.name} />}
        {field.type == "Dropdown" && <FormSelectInput />}
      </div>
    );
  };

  return (
    <div className="m-10">
      <div className="inline-block align-middle">
        <ProgressBar steps={steps} currentStep={currentStep} />
        <hr />
        <PageTitle />
        <div className="grid grid-cols-2 w-full p-5  border-2 border-slate-400 ">
          {fields.map((field, index) => {
            return getFieldByType(field, index);
          })}
        </div>

        <div className="text-left  mx-auto m-5">
          <h1 className="font-bold text-red-500">* Datos obligatorios</h1>
        </div>
        <div>
          <button className="btn-primary">Aceptar</button>
        </div>
      </div>
    </div>
  );
};

export default App;
