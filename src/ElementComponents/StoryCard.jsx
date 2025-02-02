import React from "react";

const StoryCard = ({ image, description, userName, designation }) => {
  return (
    <div className="story-card">
      <div className="story-desc-sec">
        <p>{description}</p>
      </div>
      <div className="story-user-sec">
        <img src={image} />
        <div className="text-sec">
          <span className="text-1">{userName}</span>
          <span className="text-2">{designation}</span>
        </div>
      </div>
    </div>
  );
};

export default StoryCard;
