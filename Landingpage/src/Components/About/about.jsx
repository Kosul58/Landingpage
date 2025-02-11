import React, { useState, useEffect, useRef, useLayoutEffect } from "react";
import Navbar from "../Navbar";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import imgf1 from "../../Assets/sobit.png";
import imgf2 from "../../Assets/ganesh.png";
import imgf4 from "../../Assets/bhupu.png";
import imgf5 from "../../Assets/ritik.png";
function About() {
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.to(".aitemp3", {
        scrollTrigger: {
          trigger: ".aitemptarg1",
          start: "top 600px",
          end: "top 400px",
          scrub: 1,
        },
        scale: 1.5,
        ease: "power2.in",
      });
    });

    return () => ctx.revert();
  }, []);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.to(".aitemp3", {
        scrollTrigger: {
          trigger: ".aitemptarg2",
          start: "top 500px",
          end: "top 200px",
          scrub: 1,
        },
        translateX: "-400px",
        ease: "ease",
      });

      gsap.to(".myinfo h2", {
        scrollTrigger: {
          trigger: ".aitemptarg2",
          start: "top 500px",
          end: "top 200px",
          scrub: 1,
        },
        ease: "ease",
        opacity: 1,
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      <div className="aboutter">
        <Navbar />
        <div className="aitemp2">
          <h1 className="attempth1">Nutritrack</h1>
          <div className="aitemp3">
            <div className="myinfo">
              <h2>Kosul Gurung</h2>
            </div>
          </div>

          <div className="aitemptarg1"></div>
          <div className="aitemptarg2"></div>
        </div>
      </div>
    </>
  );
}

export default About;
