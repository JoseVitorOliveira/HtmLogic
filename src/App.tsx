import React from "react";
import { Container } from "./components/Container";
import GameInstructions from "./components/GameInstructions";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <main>
      {/* <GameInstructions /> */}
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
