import React from "react";
import { createRoot } from "react-dom/client";
import DropWorksWaffeMenu from "../dist";
import { WaffleItem } from "../dist/WaffleGrid";

function App() {
  return (
    <DropWorksWaffeMenu/>
  );
}

createRoot(document.getElementById("root")!).render(<App />);
