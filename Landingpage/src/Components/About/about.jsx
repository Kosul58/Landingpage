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
        <form>
          <h1>Hello Bro!</h1>
          <h3>How you doing</h3>
          <p>want some recomendations</p>
          <p>Click the button below</p>
          <button type="submit">Recomendations</button>
        </form>
      </div>
    </>
  );
}
export default About;
