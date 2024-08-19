import React from "react";
import { useRef, useEffect, useState, useLayoutEffect } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AITEMP = () => {
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.to(".ai12", {
        scrollTrigger: {
          trigger: ".aitemp1",
          start: "top 400px",
          end: "top 200px",
          scrub: 1,
        },
        scale: 2.5,
        translateX: -260,
        transitionDuration: 0.2,
        ease: "power2.in",
      });
    });

    return () => ctx.revert();
  }, []);
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.to(".ai21", {
        scrollTrigger: {
          trigger: ".ai22",

          start: "top 800px",
          end: "top 600px",
          scrub: 1,
        },
        scale: 2.5,
        translateX: 220,
        transitionDuration: 0.2,
        ease: "power2.in",
      });
    });

    return () => ctx.revert();
  }, []);
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.to(".ai11", {
        scrollTrigger: {
          trigger: ".ai11",

          start: "top 500px",
          end: "top 450px",
          scrub: 0.1,
          markers: true,
        },
        opacity: 1,
        translateX: 50,
        transitionDuration: 0.5,
        ease: "power2.in",
      });
    });

    return () => ctx.revert();
  }, []);
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.to(".ai22", {
        scrollTrigger: {
          trigger: ".ai22",

          start: "top 500px",
          end: "top 450px",
          scrub: 0.1,
          markers: true,
        },
        opacity: 1,
        translateX: -50,
        transitionDuration: 0.5,
        ease: "power2.in",
      });
    });

    return () => ctx.revert();
  }, []);
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.to(".aitemp3", {
        scrollTrigger: {
          trigger: ".aitemptarg1",

          start: "top 300px",
          end: "top 300px",
          scrub: 0.01,
          markers: true,
        },
        backgroundColor: "red",
        transitionDuration: 0.2,
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
          start: "top 300px",
          end: "top 300px",
          scrub: 0.01,
          markers: true,
        },
        scale: 1.5,
        backgroundColor: "blue",
        transitionDuration: 0.2,
        ease: "power2.in",
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      <div className="aitemp">
        <div className="aitemp1">
          <div className="ai11">
            <h2>
              Eat Better <br></br>{" "}
              <p
                style={{ color: "white", fontSize: "50px", marginTop: "20px" }}
              >
                With our nutrition tracker
              </p>
            </h2>
          </div>
          <div className="ai12"></div>
        </div>
        <div className="aitemp1 ">
          <div className="ai21"></div>
          <div className="ai22">
            <h2>
              Eat Smarter <br></br>
              <p
                style={{ color: "white", fontSize: "50px", marginTop: "20px" }}
              >
                With our Food Recomendation
              </p>
            </h2>
          </div>
        </div>
      </div>
      <div className="aitemp2">
        <div className="aitemp3"></div>
        <div className="aitemptarg1"></div>
        <div className="aitemptarg2"></div>
        <div className="aitemptarg3"></div>
      </div>
    </>
  );
};

export default AITEMP;
