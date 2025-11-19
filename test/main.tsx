import React from "react";
import { createRoot } from "react-dom/client";
import DropWorksWaffeMenu from "../dist";

function App() {
  return (
    <DropWorksWaffeMenu />
  );
}

createRoot(document.getElementById("root")!).render(<App />);
