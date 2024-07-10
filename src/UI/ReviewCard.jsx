import React from "react";
import "./reviewcard.css";

const ReviewCard = (props) => {
  const className = props.className + " " + "review-card";
  return <div className={className}>{props.children}</div>;
};

export default ReviewCard;
