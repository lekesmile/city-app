import React from "react";
import Avatar from "./Avatar";

const Cards = props => {
  return (
    <div className="cards">
      <div className="top">
        <h3 className="ConH3"> {props.city}</h3>
      </div>
      <div>
        <Avatar img={props.img} />
      </div>
      <div className="buttom">
        <p className="ConP">{props.text} </p>
      </div>
    </div>
  );
};

export default Cards;
