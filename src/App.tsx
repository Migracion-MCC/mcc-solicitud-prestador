import { useState } from "react";
import "./App.css";
import ProgressBar from "./components/ProgressBar";
import Step1 from "./components/requestForm/Step1";
import Step2 from "./components/requestForm/Step2";
import Step3 from "./components/requestForm/Step3";

const App = () => {
  const steps = [
    "Ingreso documentos",
    "Datos Solicitante y Prestador",
    "Comprobante de envío",
  ];
  
  const [currentStep, setCurrentStep] = useState(0);
  const handleStepper=() =>{
    
  }


  const getFormButtons = () => {
    if (currentStep == 0) {
      return (
        <button
          className="btn-primary"
          onClick={() => {
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
            setCurrentStep(currentStep + 1);
          }}
        >
          Aceptar
        </button>
      );
    } else if (currentStep == 1) {
      return (
        <>
          <button
            className="btn-secondary mr-2"
            onClick={() => {
              window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
              setCurrentStep(currentStep - 1);
            }}
          >
            Volver
          </button>
          <button
            className="btn-primary"
            onClick={() => {
              window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
              setCurrentStep(currentStep + 1);
            }}
          >
            Aceptar
          </button>
        </>
      );
    }
  };

  return (
    <>
      <div className="inline-block align-middle my-5 w-4/5">
        <ProgressBar steps={steps} currentStep={currentStep} />
        <hr />

        {currentStep == 0 && <Step1 />}
        {currentStep == 1 && <Step2 />}
        {currentStep == 2 && <Step3 />}

        <div>{getFormButtons()}</div>
      </div>
    </>
  );
};

export default App;
