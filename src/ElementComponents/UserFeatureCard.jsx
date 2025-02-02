import React from "react";

const UserFeatureCard = ({ image, heading, description }) => {
  return (
    <div className="user-feature-card">
      <img src={image} />
      <div className="text-card-sec">
        <h3>{heading}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default UserFeatureCard;
