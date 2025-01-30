import React from "react";

const ExperienceCard = ({ image, heading, description }) => {
  return (
    <div className="experience-card">
      <img src={image} />
      <div className="text-card-sec">
        <h3>{heading}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ExperienceCard;
