import React from "react";
import ExperienceCard from "../ElementComponents/ExperienceCard";
import ExperienceImage1 from "../assets/images/waveform-analysis-img1.png";
import ExperienceImage2 from "../assets/images/waveform-analysis-img2.png";
import ExperienceImage3 from "../assets/images/waveform-analysis-img3.png";

const ExperienceSection = () => {
  return (
    <div className="experience-cards-sec container">

      <div className="exp-head-sec">
        <span className="exp-txt">Experience The</span>
        <h2 className="head-txt">Power of CapnoTrainer® GO</h2>
      </div>
      <div className="inner-experience-cards">
        <ExperienceCard
          image={ExperienceImage1}
          heading={"See Your Breathing in Action"}
          description={
            "Gain an immediate understanding of your breathing patterns. See how each breath impacts your health and performance with clear, dynamic visuals."
          }
        />
        <ExperienceCard
          image={ExperienceImage3}
          heading={"Monitor Your Progress"}
          description={
            "Track your breathing efficiency over time. By measuring your CO2 levels, the CapnoTrainer® GO provides real-time data to help you optimize your respiration."
          }
        />
        <ExperienceCard
          image={ExperienceImage2}
          heading={"Receive Tailored Feedback"}
          description={
            "Get personalized feedback to improve your breathing. Practical exercises help realign your breath for optimal benefits."
          }
        />
      </div>
    </div>
  );
};

export default ExperienceSection;
