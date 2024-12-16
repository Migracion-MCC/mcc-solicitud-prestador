import { useState } from "react";
import "./App.css";
import ProgressBar from "./components/ProgressBar";
import Step1 from "./components/requestForm/Step1";
import Step2 from "./components/requestForm/Step2";

const App = () => {
  const steps = ["Datos Solicitante y Prestador", "Comprobante de envío"];
  const [currentStep, setCurrentStep] = useState(0);

  return (
    <div className="m-6">
      <div className="inline-block align-middle">
        <ProgressBar steps={steps} currentStep={currentStep} />
        <hr />

        {currentStep == 0 && <Step1 />}
        {currentStep == 1 && <Step2 />}


        <div>
          {currentStep > 0 && (
            <button
              className="btn-secondary mr-2"
              onClick={() => {
                setCurrentStep(currentStep - 1);
              }}
            >
              Volver
            </button>
          )}

          <button
            className="btn-primary"
            onClick={() => {
              setCurrentStep(currentStep + 1);
            }}
          >
            Aceptar
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
