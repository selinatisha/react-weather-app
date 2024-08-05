import React from "react";

import Form from "./Form";
import "./App.css";
import "./Form.css";
import "./Current.css";
import "./Forecast.css";

function App() {
  return (
    <div className="App">
      <div className="header">
        <h1>My React Weather App</h1>
        <h2>Search the weather for any city or your current location</h2>
      </div>
      <Form />
      <script src="index.js"></script>
    </div>
  );
}

export default App;
