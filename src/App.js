import React from "react";

import Current from "./Current";
import Form from "./Form";
import Forecast from "./Forecast";
import "./App.css";
import "./Form.css";
import "./Current.css";
import "./Forecast.css";

function App() {
  return (
    <div className="App">
      <h1>My awesome weather app</h1>
      <h2>Built with React ⚛️</h2>
      <body>
        <div className="square">
          <Form />
          <Current />
          <Forecast />
          <div className="Footer">
            <footer>
              <a href="https://github.com/selinatisha/react-weather-app">
                Open-source code
              </a>
              by Selina Andersson
            </footer>
          </div>
        </div>
        <script src="index.js"></script>
      </body>
    </div>
  );
}

export default App;
