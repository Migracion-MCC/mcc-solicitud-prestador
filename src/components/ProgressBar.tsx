interface props {
  steps: Array<string>;
  currentStep: number;
}

const ProgressBar = (props: props) => {
  const { steps, currentStep } = props;
  return (
    <>
      <div className="progress-bar justify-center">
        {Array.from(steps).map((step, index) => (
          <div
            className={`step ${index <= currentStep ? "active" : ""}`}
            key={index}
          >
            <div className="circle">{index + 1}</div>
            <div className="line"></div>
            <div className="step-name font-bold">{step}</div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProgressBar;
