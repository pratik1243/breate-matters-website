import React from "react";

const FeatureCards = ({ image, heading, description }) => {
  return (
    <div className="feature-card">
      <img src={image} />
      <h3>{heading}</h3>
      <p>{description}</p>
    </div>
  );
};

export default FeatureCards;
