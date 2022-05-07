import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./fonts/Montserrat/Montserrat-Regular.ttf";
import Home from "./Home";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div className="index">
      <Home />
    </div>
  </React.StrictMode>
);
