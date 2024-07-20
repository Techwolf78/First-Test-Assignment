import React from "react";
import CustomCheckbox from "./Components/CustomCheckbox";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h3>Click the checkboxes to select All Pages</h3>
        <h4>Else click the All pages button to select individual pages</h4>
        <CustomCheckbox />
        <CustomCheckbox />
        <CustomCheckbox />
        <CustomCheckbox />
        <CustomCheckbox />
        <CustomCheckbox />
        <CustomCheckbox />
        <CustomCheckbox />
      </header>
    </div>
  );
}

export default App;
