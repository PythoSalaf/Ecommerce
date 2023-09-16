import React from "react";
import { MdCall, MdEmail, MdCottage } from "react-icons/md";
import "./Contact.css";
const Contact = () => {
  const contactData = [
    {
      id: 1,
      text: " alfaheed1010@gmail.com ",
      title: "Email us",
      icon: <MdEmail size={30} color="#082647" />,
    },

    {
      id: 2,
      text: "+234-810-6264-297",
      title: "Call us",
      icon: <MdCall size={30} color="#082647" />,
    },
    {
      id: 3,
      text: "support center",
      title: "support ",
      icon: <MdCottage size={30} color="#082647" />,
    },
  ];
  return (
    <div className="contact-container">
      <div className="contact-top">
        <h2 className="contact-top-title">Get in Touch with Us</h2>
        <h4 className="contact-top-subtitle">
          Have questions or need assistance? We're here to help
        </h4>
        <p className="contact-top-text">
          Reach out today for expert advice, support, and unbeatable deals.
        </p>
      </div>
      <div className="contact-middle">
        <div className="middle-container">
          <div className="field-container">
            <input type="text" placeholder="First-Name" />
            <input type="text" placeholder="Last-Name" />
          </div>
          <div className="field-container">
            <input type="email" placeholder="Enter Your Email" />
            <input type="text" placeholder="Phone number" />
          </div>
          <textarea placeholder="Enter Your Message"></textarea>
          <button className="contact-btn">send</button>
        </div>
      </div>
      <div className="contact-bottom">
        <div className="contact-content-bottom">
          {contactData.map((data) => (
            <div className="bottom-container" key={data.id}>
              <div>{data.icon}</div>
              <h3 className="contact-bottom-title">{data.title}</h3>
              <h4 className="contact-bottom-text">{data.text}</h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;
