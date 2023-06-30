import React from "react";
import Data from "./NativeData";
import './Native.css'
const Native = () => {

  return(
    <div className="app__native">
      <div className="native-data-list">
      {
            Data.map((item) => (
                <div key={item.id} className="native__data-container">
                    <div className="img"><h4>{item.url}</h4></div>
                    <div className="native-content">
                        <h3 className="-native-content-title">{item.title}</h3>
                        <p className="content-describe">{item.details}</p>
                    </div>
                </div>
            ))
        }
      </div>
    </div>
  )
};

export default Native;
