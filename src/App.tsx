import { useState } from "react";
import "./App.css";
import ProgressBar from "./components/progressbar/ProgressBar";
import Step1 from "./components/requestForm/Step1";
import Step2 from "./components/requestForm/Step2";
import Step3 from "./components/requestForm/Step3";
import { useSelector } from "react-redux";
import { RootState } from "./store/store";

const App = () => {
  const applicantFiles = useSelector(
    (state: RootState) => state.applicantFiles
  );

  const steps = [
    "Ingreso documentos",
    "Datos Solicitante y Prestador",
    "Comprobante de envío",
  ];

  const [currentStep, setCurrentStep] = useState(0);

  const validateFormData = () => {
    return true;
  };

  const handleStepper = () => {
    if (currentStep == 0 && applicantFiles.length > 10) {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      setCurrentStep(currentStep + 1);
    }

    if (currentStep == 1 && validateFormData()) {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      setCurrentStep(currentStep + 1);
    }
  };

  const getStepperButtons = () => {
    return (
      <div>
        {currentStep == 0 && (
          <button
            className="btn-primary"
            onClick={() => {
              handleStepper();
            }}
          >
            Aceptar
          </button>
        )}
        {currentStep == 1 && (
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
        )}
      </div>
    );
  };

  return (
    <>
      <div className="inline-block align-middle my-5 w-4/5">
        <ProgressBar steps={steps} currentStep={currentStep} />
        <hr />

        {currentStep == 0 && <Step1 />}
        {currentStep == 1 && <Step2 />}
        {currentStep == 2 && <Step3 />}

        <div>{getStepperButtons()}</div>
      </div>
    </>
  );
};

export default App;
