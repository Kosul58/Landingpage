import React from "react";
import Navbar from "../Navbar";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  createBrowserRouter,
} from "react-router-dom";

function About() {
  return (
    <>
      <Navbar />
      <div>
        <h1>Hello Bro!</h1>
        <h3>How you doing</h3>
      </div>
    </>
  );
}
export default About;
