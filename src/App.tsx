import React, { useState, useEffect } from "react";
import { Container } from "./components/Container";
import Tutorial from "./components/Tutorial";
import { ToastContainer } from "react-toastify";

function App() {
  const [showTutorial, setShowTutorial] = useState(false);

  useEffect(() => {
    const tutorialShownBefore = localStorage.getItem("tutorialShown");
    if (!tutorialShownBefore) {
      setShowTutorial(true);
      localStorage.setItem("tutorialShown", "true");
    }
  }, []);

  return (
    <main>
      {showTutorial && <Tutorial onClose={() => setShowTutorial(false)} />}
      <Container />
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover={false}
        theme="light"
      />
    </main>
  );
}

export default App;
