import React from "react";
import WorkCard from "../ElementComponents/WorkCard";

function WorkSection() {
  return (
    <div className="work-section container">
      <div className="work-head-sec">
        <h2 className="head-txt">How the CapnoTrainer® GO Works</h2>
      </div>
      <div className="inner-work-section">
        <WorkCard
          heading={"Measure What Matters"}
          description={
            "Monitor your End-Tidal CO2 (PetCO2) in real time to assess how effectively your breathing supports acid-base balance and health."
          }
        />
        <WorkCard
          heading={"Customized Interventions"}
          description={
            "Based on your unique breathing habits, receive tailored exercises and interventions to dismantle bad habits and cultivate optimal ones."
          }
        />
        <WorkCard
          heading={"Visualize Your Breathing"}
          description={
            "See your breathing habits on a capnogram, a dynamic display of your inhalation and exhalation patterns. Pinpoint issues like overbreathing, gasps, or shallow breaths."
          }
        />
        <WorkCard
          heading={"Engage in Practicums"}
          description={
            "Explore playful self-intervention techniques to realign breathing mechanics with your body’s needs—whether through nose-breathing challenges or CO2 biofeedback training."
          }
        />
      </div>
    </div>
  );
}

export default WorkSection;
