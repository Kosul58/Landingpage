import React, { useState, useEffect, useRef, useLayoutEffect } from "react";
import Navbar from "../Navbar";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import imgf1 from "../../Assets/sobit.png";
import imgf2 from "../../Assets/ganesh.png";
import imgf4 from "../../Assets/bhupu.png";
import imgf5 from "../../Assets/ritik.png";
function About() {
  const [loading, setLoading] = useState(null);
  const rec = useRef(null);
  const breakfast = useRef(null);
  const lunch = useRef(null);
  const dinner = useRef(null);
  const bfw = useRef(null);
  const bfcal = useRef(null);
  const bfcarb = useRef(null);
  const bfprot = useRef(null);
  const bffat = useRef(null);
  const bfsalt = useRef(null);
  const bfsug = useRef(null);
  const dinnerw = useRef(null);
  const dinnercal = useRef(null);
  const dinnercarb = useRef(null);
  const dinnerprot = useRef(null);
  const dinnersug = useRef(null);
  const dinnersalt = useRef(null);
  const lunchw = useRef(null);
  const lunchcal = useRef(null);
  const lunchcarb = useRef(null);
  const lunchprot = useRef(null);
  const lunchsug = useRef(null);
  const lunchsalt = useRef(null);

  const displayrec = async () => {
    try {
      const response = await fetch("http://localhost:3000/fetchmeal");

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      console.log("Breakfast", data[0].food_name);
      console.log("Lunch", data[1].food_name);
      console.log("Dinner", data[2].food_name);
      console.log(data[0].food_type);
      console.log(data[1].food_type);
      console.log(data[2].food_type);
      console.log(data[0].nf_calories);
      console.log(data[1].nf_calories);
      console.log(data[2].nf_calories);
      console.log(data[0].nf_total_carbohydrate);
      console.log(data[1].nf_total_carbohydrate);
      console.log(data[2].nf_total_carbohydrate);
      console.log(data[0].nf_protein);
      console.log(data[1].nf_protein);
      console.log(data[2].nf_protein);
      console.log(data[0].nf_total_fat);
      console.log(data[1].nf_total_fat);
      console.log(data[2].nf_total_fat);
      console.log(data[0].nf_sugars);
      console.log(data[1].nf_sugars);
      console.log(data[2].nf_sugars);
      console.log(data[0].nf_sodium);
      console.log(data[1].nf_sodium);
      console.log(data[2].nf_sodium);

      // Check if refs are not null before setting innerHTML
      if (breakfast.current) {
        breakfast.current.innerHTML = data[0].food_name;
        bfw.current.innerHTML = data[0].food_type;
        bfcal.current.innerHTML = data[0].nf_calories;
        bfcarb.current.innerHTML = data[0].nf_total_carbohydrate;
        bfprot.current.innerHTML = data[0].nf_protein;
        bfsalt.current.innerHTML = data[0].nf_sodium;
        bfsug.current.innerHTML = data[0].nf_sugars;
      }
      if (lunch.current) {
        lunch.current.innerHTML = data[1].food_name;
        lunchw.current.innerHTML = data[1].food_type;
        lunchcal.current.innerHTML = data[1].nf_calories;
        lunchcarb.current.innerHTML = data[1].nf_total_carbohydrate;
        lunchprot.current.innerHTML = data[1].nf_protein;
        lunchsug.current.innerHTML = data[1].nf_sugars;
        lunchsalt.current.innerHTML = data[1].nf_sodium;
      }
      if (dinner.current) {
        dinner.current.innerHTML = data[2].food_name;
        dinnerw.current.innerHTML = data[2].food_type;
        dinnercal.current.innerHTML = data[2].nf_calories;
        dinnercarb.current.innerHTML = data[2].nf_total_carbohydrate;
        dinnerprot.current.innerHTML = data[2].nf_protein;
        dinnersug.current.innerHTML = data[2].nf_sugars;
        dinnersalt.current.innerHTML = data[2].nf_sodium;
      }
      if (rec.current) {
        rec.current.classList.remove("blockrec");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.to(".aitemp3", {
        scrollTrigger: {
          trigger: ".aitemptarg1",
          markers: true,
          start: "top 600px",
          end: "top 400px",
          scrub: 0.01,
        },
        scale: 1.5,
        transitionDuration: 0.8,
        ease: "power2.in",
      });
    });

    return () => ctx.revert();
  }, []);
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.to(".aitemp31", {
        scrollTrigger: {
          trigger: ".aitemptarg1",

          start: "top 600px",
          end: "top 400px",
          scrub: 0.01,
        },
        opacity: 0,
        scale: 1.5,
        translateX: -100,
        translateY: -100,
        transitionDuration: 2,
        ease: "power2.in",
      });
    });

    return () => ctx.revert();
  }, []);
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.to(".aitemp32", {
        scrollTrigger: {
          trigger: ".aitemptarg1",

          start: "top 600px",
          end: "top 400px",
          scrub: 0.01,
        },
        opacity: 0,
        scale: 1.5,

        translateX: 100,
        translateY: -100,
        transitionDuration: 2,
        ease: "power2.in",
      });
    });

    return () => ctx.revert();
  }, []);
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.to(".aitemp33", {
        scrollTrigger: {
          trigger: ".aitemptarg1",

          start: "top 600px",
          end: "top 400px",
          scrub: 0.01,
        },
        opacity: 0,
        scale: 1.5,

        translateX: -100,
        translateY: 100,
        transitionDuration: 2,
        ease: "power2.in",
      });
    });

    return () => ctx.revert();
  }, []);
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.to(".aitemp34", {
        scrollTrigger: {
          trigger: ".aitemptarg1",

          start: "top 600px",
          end: "top 400px",
          scrub: 0.01,
        },
        opacity: 0,
        scale: 1.5,

        translateX: 100,
        translateY: 100,
        transitionDuration: 2,
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
          <h1 className="attempth1">Nutronix</h1>
          <div className="aitemp3">
            <div className="myinfo">
              <h2>Kosul Gurung</h2>
            </div>
          </div>
          <div className="aitemp31 ">
            <img src={imgf1} alt="" loading="lazy" />
          </div>
          <div className="aitemp32">
            <img src={imgf5} alt="" loading="lazy" />
          </div>
          <div className="aitemp33">
            <img src={imgf2} alt="" loading="lazy" />
          </div>
          <div className="aitemp34">
            <img src={imgf4} alt="" loading="lazy" />
          </div>
          <div className="aitemptarg1"></div>
          <div className="aitemptarg2"></div>
        </div>
        <div className="aitemp4">
          <div className="aitemp41"></div>
          <div className="aitemp42 aitemp4x blocker">
            <div className="myimage2">
              <img src={imgf1} alt="" loading="lazy" />
            </div>
            <div className="myinfo2">
              <h2>
                Sobit <br></br>Thapa
              </h2>
            </div>{" "}
          </div>
          <div className="aitemp43 aitemp4x blocker">
            <div className="myimage2">
              <img src={imgf5} alt="" loading="lazy" />
            </div>
            <div className="myinfo2">
              <h2>
                Ritik<br></br> Gurung
              </h2>
            </div>
          </div>
          <div className="aitemp44 aitemp4x blocker">
            <div className="myimage2">
              <img src={imgf2} alt="" loading="lazy" />
            </div>
            <div className="myinfo2">
              <h2>
                Ganesh <br></br>Gautam
              </h2>
            </div>
          </div>
          <div className="aitemp45 aitemp4x blocker">
            <div className="myimage2">
              <img src={imgf4} alt="" loading="lazy" />
            </div>
            <div className="myinfo2">
              <h2>
                Bhupesh <br></br> Shrestha
              </h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
