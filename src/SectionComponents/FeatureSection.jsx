import React from "react";
import FeatureCards from "../ElementComponents/FeatureCards";
import FeatureCardImg1 from "../assets/images/feature-card-img1.png";
import FeatureCardImg2 from "../assets/images/feature-card-img2.png";
import FeatureCardImg3 from "../assets/images/feature-card-img3.png";
import FeatureCardImg4 from "../assets/images/feature-card-img4.png";

const FeatureSection = () => {
  return (
    <div className="feature-section container">
      <div className="feature-head-sec">
        <h2 className="head-txt">Key Features You’ll Love</h2>
      </div>
      <div className="inner-feature-section">
        <FeatureCards
          image={FeatureCardImg1}
          heading={"Real-Time Monitoring"}
          description={
            "Track your breathing metrics like CO2 concentration, breathing rate, and rhythm."
          }
        />
        <FeatureCards
          image={FeatureCardImg2}
          heading={"Capnogram Visualization"}
          description={
            "Get instant feedback on your breathing mechanics and see the impact of adjustments in real-time."
          }
        />
        <FeatureCards
          image={FeatureCardImg3}
          heading={"Custom Learning Plans"}
          description={
            "Tailored strategies to help you unlearn bad habits and master new ones."
          }
        />
        <FeatureCards
          image={FeatureCardImg4}
          heading={"Interactive Practicums"}
          description={
            "Experiment with guided breathing challenges to align behavior with physiology."
          }
        />
      </div>
    </div>
  );
};

export default FeatureSection;
