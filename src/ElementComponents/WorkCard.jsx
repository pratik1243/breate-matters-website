import React from "react";

const WorkCard = ({ heading, description }) => {
  return (
    <div className="work-card">
      <h3>{heading}</h3>
      <p>{description}</p>
    </div>
  );
};

export default WorkCard;
