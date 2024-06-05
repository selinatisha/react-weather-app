import React from "react";

import Form from "./Form";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>My awesome weather app</h1>
      <h2>Built with React ⚛️</h2>
      <body>
        <div className="square">
          <Form />
        </div>
        <script src="index.js"></script>
      </body>
    </div>
  );
}

export default App;
