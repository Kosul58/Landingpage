import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="contact-page-wrapper">
      <h1 className="primary-heading">Have Question In Mind?</h1>
      <h1 className="primary-heading">Let Us Help You</h1>
      <div className="contact-form-container">
        <input type="text" placeholder="yourmail@gmail.com" />
        <Link to={"/admin"}>
          <button
            className="secondary-button"
            style={{ textDecoration: "none" }}
          >
            Admin
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Contact;
