import React from 'react'
import ServiceCard from '../ElementComponents/ServiceCard';
import fitnessImg1 from "../assets/images/fitness-img1.png";
import fitnessImg2 from "../assets/images/fitness-img2.png";
import fitnessImg3 from "../assets/images/fitness-img3.png";
import fitnessImg4 from "../assets/images/fitness-img4.png";

const ServiceSection = () => {
  return (
    <div className="service-cards-section container">
      <div className="service-head-sec">
        <h2 className="head-txt">How the CapnoTrainer® GO Works</h2>
      </div>
      <div className="inner-service-section">
        <ServiceCard
        image={fitnessImg1}
          heading={"Measure What Matters"}
          description={
            "Monitor your End-Tidal CO2 (PetCO2) in real time to assess how effectively your breathing supports acid-base balance and health."
          }
        />
        <ServiceCard
        image={fitnessImg4}
          heading={"Customized Interventions"}
          description={
            "Based on your unique breathing habits, receive tailored exercises and interventions to dismantle bad habits and cultivate optimal ones."
          }
        />
        <ServiceCard
        image={fitnessImg3}
          heading={"Visualize Your Breathing"}
          description={
            "See your breathing habits on a capnogram, a dynamic display of your inhalation and exhalation patterns. Pinpoint issues like overbreathing, gasps, or shallow breaths."
          }
        />
        <ServiceCard
        image={fitnessImg2}
          heading={"Engage in Practicums"}
          description={
            "Explore playful self-intervention techniques to realign breathing mechanics with your body’s needs—whether through nose-breathing challenges or CO2 biofeedback training."
          }
        />
      </div>
    </div>
  )
}

export default ServiceSection