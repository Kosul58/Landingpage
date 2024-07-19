import React from "react";
import ReactDOM from "react-dom/client";

import App from "./app";
import Login from "./Components/Loginpage/login";
import Signup from "./Components/Registerpage/register";
import Calculate from "./Components/Calculate/calculate";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
