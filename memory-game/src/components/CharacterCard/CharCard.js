import React from "react";
import "./CharCard.css";

const CharCard = props => (
  <div className="card">
    <div className="img-container">
      <img src={props.image} id = {props.id}/>
    </div>
  </div>
);

export default CharCard;
