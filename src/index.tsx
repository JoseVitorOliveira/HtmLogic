import { render } from "react-dom";
import App from "./App";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";
import "./styles.css";

function AppWrapper() {
  return (
    <div className="App">
      <DndProvider backend={HTML5Backend}>
        <Theme accentColor="mint">
          <App />
        </Theme>
      </DndProvider>
    </div>
  );
}

const rootElement = document.getElementById("root");
render(<AppWrapper />, rootElement);
