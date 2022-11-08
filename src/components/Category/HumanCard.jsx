import React from "react";
import { useWorkCreate } from "../../contexts/WorkCreateContext";
import "../../styles/card.css";

const HumanCard = ({ item }) => {
  return (
    <div>
      <div
        //     style={{backgroundImage: {item.image};
        // background-repeat: no-repeat;}}
        className="blog-card spring-fever"
      >
        <div className="title-content">
          <h3>SPRING FEVER</h3>
          <hr />
          <div className="intro">КАТЕГОРИЯ: {item.category}</div>
          <div className="intro">ОПЫТ: {item.experience}</div>
        </div>
        <div className="card-info">{item.desc}</div>
        <div className="utility-info">
          <ul className="utility-list">
            <li className="price">Price: {item.price}</li>
            <li className="phone">Phone: {item.phone_number}</li>
            <br />
            <li className="phone">С: {item.hour_from} </li>
            <li className="phone">До: {item.hour_to}</li>
          </ul>
        </div>
        <div className="gradient-overlay"></div>
        <div className="color-overlay"></div>
      </div>
    </div>
  );
};

export default HumanCard;
