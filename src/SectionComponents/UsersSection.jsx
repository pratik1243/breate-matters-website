import React from "react";
import UserFeatureCard from "../ElementComponents/UserFeatureCard";
import UserFeatureImg1 from "../assets/images/wellness-enthusiasts-img.png";
import UserFeatureImg2 from "../assets/images/Health-practitioners-img.png";
import UserFeatureImg3 from "../assets/images/athletes-performers-img.png";
import UserFeatureImg4 from "../assets/images/healthcare-professionals-img.png";
import UserFeatureImg5 from "../assets/images/educators-trainers-img.png";
import gymLogo from "../assets/images/gym-equip-img.png";

const UsersSection = () => {
  return (
    <div className="user-feature-section container">
      <div className="gym-section">
        <div>
          <img src={gymLogo} className="gym-sec-bg" />
        </div>
        <div className="gym-desc-section">
          <h2>What Makes the CapnoTrainer® go Different?</h2>

          <p>
            Unlike traditional breathing tools that focus on shallow techniques,
            the CapnoTrainer® GO goes deeper. It integrates psychophysiology,
            behavioral analysis, and cutting-edge technology to provide a
            complete understanding of your breath’s role in health and
            performance.
          </p>

          <div className="gym-desc-card">
            “Breathing is behavior. And behavior can be changed. The
            CapnoTrainer® helps you edit, optimize, and own your breath for
            life.”
          </div>
        </div>
      </div>

      <div className="user-feature-head-sec">
        <h2 className="head-txt">Who Is the CapnoTrainer® GO For?</h2>
      </div>
      <div className="inner-user-feature-section">
        <UserFeatureCard
          image={UserFeatureImg1}
          heading={"Wellness Enthusiasts"}
          description={
            "Achieve better sleep, reduce anxiety, and enhance overall vitality."
          }
        />
        <UserFeatureCard
          image={UserFeatureImg2}
          heading={"Health Practitioners"}
          description={
            "Provide clients with revolutionary breathing behavior analysis for lasting results."
          }
        />
        <UserFeatureCard
          image={UserFeatureImg3}
          heading={"Athletes & Performers"}
          description={"Boost endurance, focus, and physical resilience."}
        />
        <UserFeatureCard
          image={UserFeatureImg4}
          heading={"Healthcare Professionals"}
          description={
            "Enhance patient care with cutting-edge breathing assessment tools."
          }
        />
        <UserFeatureCard
          image={UserFeatureImg5}
          heading={"Educators & Trainers"}
          description={
            "Incorporate evidence-based breathing techniques into your teaching or coaching."
          }
        />
      </div>
      {/* <div className="inner-user-feature-section section2">
      <UserFeatureCard
          image={UserFeatureImg4}
          heading={"Healthcare Professionals"}
          description={
            "Enhance patient care with cutting-edge breathing assessment tools."
          }
        />
        <UserFeatureCard
          image={UserFeatureImg5}
          heading={"Educators & Trainers"}
          description={
            "Incorporate evidence-based breathing techniques into your teaching or coaching."
          }
        />
      </div> */}
    </div>
  );
};

export default UsersSection;
