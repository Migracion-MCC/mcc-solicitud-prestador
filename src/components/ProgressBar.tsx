import React from "react";

const ProgressBar = ({ steps, currentStep }) => {
  return (
    <>
      <div className="container progress-bar-new">
        {steps.map((step: number, index: number) => (
          <div
            key={step}
            className={`contenedor-barra ${
              index !== currentStep ? "mobile" : ""
            }`}
          >
            <div className={`step ${index === currentStep ? "active" : ""}`}>
              {index + 1}
            </div>
            <div className="text-center mt-2">
              <strong
                className={`paso ${index === currentStep ? "activo" : ""}`}
              >
                {step}
              </strong>
            </div>
          </div>
        ))}
      </div>
      <hr />
    </>
  );
};

export default ProgressBar;
