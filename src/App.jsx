import React from "react";
import Home from "./Components/Home";
import "./App.css";

function App() {
  const numberOfHomes = 8;

  return (
    <div className="App">
      <header className="App-header">
        <h3>Click the checkboxes to select All Pages</h3>
        <h4>Else click the All pages button to select individual pages</h4>
        {Array.from({ length: numberOfHomes }).map((_, index) => (
          <Home key={index} />
        ))}
      </header>
    </div>
  );
}

export default App;
