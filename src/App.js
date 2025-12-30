import { useState } from "react";

const messages = ["Hello React", "React is a Framework", "React Best"];

const App = () => {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  const handlePre = () => {
    if (step > 1) {
      return setStep(step - 1);
    }
  };

  const handleNext = () => {
    if (step < 3) {
      return setStep(step + 1);
    }
  };

  const handleOpen = () => {
    if (isOpen) {
      setIsOpen(false);
    } else {
      setStep(1);
      setIsOpen(true);
    }
  };

  return (
    <>
      <button onClick={handleOpen}>{isOpen ? "Hide" : "Show"}</button>
      {isOpen && (
        <div className="wrapper">
          <div className="numberWrapper">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>
          <p>
            {step}:{messages[step - 1]}
          </p>
          <div className="btnGroup">
            <button onClick={handlePre}>Previous</button>
            <button onClick={handleNext}>Next</button>
          </div>
        </div>
      )}
    </>
  );
};

export default App;
