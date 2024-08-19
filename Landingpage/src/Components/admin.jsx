import React from "react";
import { useState, useEffect, useRef } from "react";
import "./Landingpage.css";

const Admin = () => {
  const usercontrol = useRef(null);
  const foodcontrol = useRef(null);
  const mail = useRef(null);
  const adm1 = useRef(null);
  const adm2 = useRef(null);
  const adm3 = useRef(null);

  const modalopen = (a) => {
    if (a == 0) {
      foodcontrol.current.classList.add("signblock");
      mail.current.classList.add("signblock");
      usercontrol.current.classList.remove("signblock");
      adm1.current.classList.add("admactive");
      adm2.current.classList.remove("admactive");
      adm3.current.classList.remove("admactive");
    } else if (a == 1) {
      usercontrol.current.classList.add("signblock");
      mail.current.classList.add("signblock");
      foodcontrol.current.classList.remove("signblock");
      adm1.current.classList.remove("admactive");
      adm2.current.classList.add("admactive");
      adm3.current.classList.remove("admactive");
    } else if (a == 2) {
      usercontrol.current.classList.add("signblock");
      foodcontrol.current.classList.add("signblock");
      mail.current.classList.remove("signblock");
      adm1.current.classList.remove("admactive");
      adm2.current.classList.remove("admactive");
      adm3.current.classList.add("admactive");
    }
  };

  return (
    <>
      <div className="admin">
        <div className="admin1">
          <div className="admin101">
            <div className="admphoto"></div>
            <div className="adm" style={{ color: "black" }}>
              Name
            </div>
            <div
              className="adm admactive"
              ref={adm1}
              onClick={() => modalopen(0)}
            >
              User Control
            </div>
            <div className="adm" ref={adm2} onClick={() => modalopen(1)}>
              Food Control
            </div>
            <div className="adm" ref={adm3} onClick={() => modalopen(2)}>
              Send Mail
            </div>
          </div>
          <div className="admin102">
            <div className="admx" ref={usercontrol}>
              usercontrol
            </div>
            <div className="admx signblock" ref={foodcontrol}>
              foodcontrol
            </div>
            <div className="admx signblock" ref={mail}>
              mail
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Admin;
