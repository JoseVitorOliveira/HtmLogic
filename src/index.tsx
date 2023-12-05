import { render } from "react-dom";
import App from "./App";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import "./styles.css";

function AppWrapper() {
  return (
    <div>
      <DndProvider backend={HTML5Backend}>
        <App />
      </DndProvider>
    </div>
  );
}

const rootElement = document.getElementById("root");
render(<AppWrapper />, rootElement);
