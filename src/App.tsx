import { useState } from "react";
import "./App.css";
import ProgressBar from "./components/progressbar/ProgressBar";
import Step1 from "./components/requestForm/Step1";
import Step2 from "./components/requestForm/Step2";
import Step3 from "./components/requestForm/Step3";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "./store/store";
import { validateFormData, validateFormFiles } from "./components/requestForm";
import Loader from "./components/loader/Loader";
import { setLoading } from "./store/reducers/generalDataReducer";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"

const App = () => {
  const dispatch: AppDispatch = useDispatch();
  const { applicantFiles, applicantFields, providerFields, generalData } = useSelector(
    (state: RootState) => ({
      applicantFiles: state.applicantFiles,
      applicantFields: state.applicantFields,
      providerFields: state.providerFields,
      generalData: state.generalData,
    })
  );

  const steps = [
    "Ingreso documentos",
    "Datos Solicitante y Prestador",
    "Comprobante de envío",
  ];

  const [currentStep, setCurrentStep] = useState(0);

  const handleStepper = () => {
    if (currentStep == 0) {
      if (validateFormFiles(applicantFiles.applicantRequiredFiles)) {
        return false;
      }
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      setCurrentStep(currentStep + 1);
    }

    if (currentStep == 1) {
      if (validateFormData(applicantFields, providerFields)) {
        return false;
      }
      setOpenSendForm(true)
    }
  };

  const sendForm = async () => {
    setOpenSendForm(false)
    dispatch(setLoading({ loading: true }));
    
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    setCurrentStep(currentStep + 1);
  }

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
            Siguiente
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
              onClick={() => { handleStepper() }}>
              Crear solicitud
            </button>
          </>
        )}
      </div>
    );
  };
  const [isOpenSendForm, setOpenSendForm] = useState(false);

  return (
    <>
      <AlertDialog
        open={isOpenSendForm}
        onOpenChange={setOpenSendForm}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Confirmar Envío de Solicitud</AlertDialogTitle>
            <AlertDialogDescription>
              ¿Está seguro de enviar la solicitud ingresada?
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel className="btn-secondary">Cancelar</AlertDialogCancel>
            <AlertDialogAction
              className="btn-primary"
              onClick={async () => {
                await sendForm();
              }}>Enviar</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <Loader show={generalData.loading} />

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
