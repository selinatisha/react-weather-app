import React from "react";

import Form from "./Form";
import "./App.css";
import "./Form.css";
import "./Current.css";
import "./Forecast.css";

function App() {
  return (
    <div className="App">
      <h1>My weather app</h1>
      <h2>Built with React ⚛️</h2>
      <Form />
      <script src="index.js"></script>
    </div>
  );
}

export default App;
