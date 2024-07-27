import React from "react";
import { useState, useEffect, useRef } from "react";
import Navbar from "../Navbar";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  createBrowserRouter,
} from "react-router-dom";

function About() {
  const [loading, setLoading] = useState(null);
  const breakfast = useRef(null);
  const lunch = useRef(null);
  const dinner = useRef(null);

  return (
    <>
      <Navbar />
      <div>
        <h1>Hello Bro!</h1>
        <h3>How you doing</h3>
        <p>want some recomendations</p>
        <p>Click the button below</p>
        <button>Recomendations</button>
        <div className="recomendedmeal">
          <div ref={breakfast} className="breakfastrec"></div>
          <div ref={lunch} className="lunchrec"></div>
          <div ref={dinner} className="dinnerrec"></div>
        </div>
      </div>
    </>
  );
}
export default About;
