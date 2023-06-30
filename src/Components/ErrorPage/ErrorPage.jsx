import React from "react";
import { sad } from "../../Assets";
import { useNavigate } from "react-router-dom";
import "./ErrorPage.css";



const ErrorPage = () => {
  const navigate =  useNavigate()
  return (
    <div className="error-page">
      <div className="error-container">
        <div className="error-avatar">
          <img src={sad} alt="error-avatar" />
        </div>
        <div className="error-content">
          <h2 className="error-title">404</h2>
          <p className="error-texts">Opps! page not found</p>
          <p className="error-text">
            sorry the page you're looking for does not exist, <br />
            have been removed, name change or is temporarily <br /> unavailable
          </p>
          <button onClick={() => navigate('/')} className="error-btn">back to homepage</button>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
