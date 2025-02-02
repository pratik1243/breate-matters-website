import React from "react";
import StoryCard from "../ElementComponents/StoryCard";
import storyUserImg1 from "../assets/images/story-user-img1.png";
import storyUserImg2 from "../assets/images/story-user-img2.png";

const StorySection = () => {
  return (
    <div className="story-card-section ">
         <div className="story-head-sec">
        <h2 className="head-txt">Real Success Stories</h2>
      </div>
      <div className="inner-story-card-sec">
        <StoryCard
          image={storyUserImg1}
          userName={"Amanda K"}
          designation={"Entrepreneur"}
          description={'"I thought I knew how to breathe—until I used the CapnoTrainer® GO. This device opened my eyes to habits I never realized were harming me. I feel more energized and focused than ever before!"'}
        />
        <StoryCard
          image={storyUserImg2}
          userName={"Dr. Michael J"}
          designation={"Clinical Psychologist"}
          description={'"As a therapist, the CapnoTrainer®GO has completely transformed how I work with clients. Its a game-changer in helping people tackle anxiety and performance issues."'}
        />
      </div>
    </div>
  );
};

export default StorySection;
