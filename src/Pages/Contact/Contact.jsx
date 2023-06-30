import React from "react";
import { MdLocationOn, MdCall, MdEmail, MdCottage } from "react-icons/md";

import "./Contact.css";
const Contact = () => {
  const contactData = [
    {
      id: 1,
      text: "Puffin street 12345 Paris France",
      title: "P17AT1542 ",
      icon: <MdLocationOn size={40} color="#082647" />,
    },
    {
      id: 2,
      text: "+234-810-6264-297",
      title: "Call us:",
      icon: <MdCall size={40} color="#082647" />,
    },
    {
      id: 3,
      text: "777-666-555",
      title: "Fax: ",
      icon: <MdCottage size={40} color="#082647" />,
    },
    {
      id: 4,
      text: " alfaheed1010@gmail.com ",
      title: "Email us:",
      icon: <MdEmail size={40} color="#082647" />,
    },
  ];
  return (
    <div className="contact-container">
      <div className="store-information">
        <h1 className="store-title">Store information</h1>
        <div>
          {contactData.map((data) => (
            <div key={data.id}>
              <div className="store-content-container">
                <div className="store-info-icons">{data.icon}</div>
                <div className="">
                  <p className="store-address-title">{data.title}</p>
                  <p className="store-text">{data.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="contact-information">
        <h2>Contact Us</h2>
        <div className="form-container">
          <form>
            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                placeholder="your name..."
                className="contact-input"
              />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                placeholder="your Email..."
                className="contact-input"
              />
            </div>
            <div className="form-group">
              <label>Message</label>
              <textarea
                name=""
                cols="60"
                rows="6"
                placeholder="How can we help?"
              />
            </div>
            <button className="contact-btn">Send</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
