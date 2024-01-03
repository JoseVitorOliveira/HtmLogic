import React, { useState, useEffect } from "react";

const GameInstructions = () => {
  const [dialogOpen, setDialogOpen] = useState(true);
  const [currentStep, setCurrentStep] = useState(1);

  useEffect(() => {
    openDialog();
    return () => {
      // Clean up logic if needed
    };
  }, []);

  const openDialog = () => {
    setDialogOpen(true);
    setCurrentStep(1);
  };

  const closeDialog = () => {
    setDialogOpen(false);
    // Reset any state or perform actions when the dialog is closed
  };

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    } else {
      closeDialog();
    }
  };

  const totalSteps = 3;

  return (
    <>
      {dialogOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-40">
          <dialog
            open={dialogOpen}
            onClose={closeDialog}
            className="bg-white p-20 rounded-8 text-center z-10 mx-auto max-w-screen-sm"
          >
            <h2>Step {currentStep}</h2>
            {currentStep === 1 && (
              <p>This is the first step. Provide instructions here.</p>
            )}
            {currentStep === 2 && (
              <p>This is the second step. More instructions go here.</p>
            )}
            {currentStep === 3 && (
              <p>This is the final step. Conclude your instructions.</p>
            )}
            <button onClick={nextStep}>
              {currentStep < totalSteps ? "Next" : "Close"}
            </button>
          </dialog>
        </div>
      )}
    </>
  );
};

export default GameInstructions;
