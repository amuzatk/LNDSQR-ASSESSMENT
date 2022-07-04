import React from "react";

import "./UserInfoCard.scss";

const Card = (props) => {
  return (
    <div className="card">
      <img className="card-img" src={props.imgsrc} alt="Card image" />
      <div className="card-body">
        <h4 className="title">{props.title}</h4>
        <p className="card-text">{props.text}</p>
      </div>
    </div>
  );
};

export default Card;
