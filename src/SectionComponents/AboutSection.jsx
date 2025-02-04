import React from "react";
import knosisLogo from "../assets/images/knosis-img.png";
import drCruzLogo from "../assets/images/dr-cruz-img.png";
import airwayLogo from "../assets/images/airway-img.png";
import conspirLogo from "../assets/images/conspir-img.png";
import discoverImg1 from "../assets/images/discover-icon1.png";
import discoverImg2 from "../assets/images/discover-icon2.png";
import discoverImg3 from "../assets/images/discover-icon3.png";
import capnotrainerImg2 from "../assets/images/capnotrainer-img2.png";

const AboutSection = () => {
  return (
    <div className="about-section">
      <div className="sponsors-section">
        <div className="sponsors-img-sec">
          <img src={knosisLogo} />
        </div>
        <div className="sponsors-img-sec">
          <img src={drCruzLogo} />
        </div>
        <div className="sponsors-img-sec">
          <img src={airwayLogo} />
        </div>
        <div className="sponsors-img-sec">
          <img src={conspirLogo} />
        </div>
      </div>

      <div className="discover-section container">
        <h2 className="head-txt">Discover the Hidden Power of Your Breath</h2>
        <div className="discover-inner-sec">
          <div className="yoga-bg-img"></div>
          <div className="discover-desc-sec">
            <p className="first-para-sec">
              Your breathing isn’t just about oxygen in and carbon dioxide
              out—it’s a complex behavior shaped by triggers, habits, and
              physiology. When misaligned, these habits can:
            </p>
            <ul className="discover-list">
              <li>
                <img src={discoverImg1} className="discover-icon" />
                <div className="discover-txt-sec">
                  <span className="txt-1">Compromise your health:</span>
                  <p className="txt-2">
                    Triggering anxiety, fatigue, and physical discomfort.
                  </p>
                </div>
              </li>
              <li>
                <img src={discoverImg2} className="discover-icon" />
                <div className="discover-txt-sec">
                  <span className="txt-1">Disrupt your performance:</span>
                  <p className="txt-2">
                    Causing focus deficits, memory issues, and suboptimal
                    endurance.
                  </p>
                </div>
              </li>
              <li>
                <img src={discoverImg3} className="discover-icon" />
                <div className="discover-txt-sec">
                  <span className="txt-1">Exacerbate existing conditions:</span>
                  <p className="txt-2">
                    Like asthma, chronic pain, and even stress-related
                    disorders.
                  </p>
                </div>
              </li>
            </ul>
            <p className="last-para-sec">
              Millions of people suffer the consequences of poor breathing
              habits. But you don’t have to be one of them. With the
              CapnoTrainer® GO, you’ll unlock a scientifically-backed pathway to
              breathing mastery.
            </p>
          </div>
        </div>
      </div>

      <div className="info-section container">
        <div className="info-head-sec">
          <h2>What Is the CapnoTrainer® GO?</h2>

          <p>
            The CapnoTrainer® GO isn’t just a tool—it’s your personal gateway to
            a healthier, more aligned you. Using advanced <span className="colno-txt">capnography
            technology</span>, it provides real-time insights into your breathing
            behavior by measuring CO2 levels and visualizing your breathing
            patterns. Paired with a guided learning framework, it empowers you
            to:
          </p>
        </div>
        <div className="info-bg-sec">
          <img src={capnotrainerImg2} className="info-bg-img" />

          <div className="info-feature-sec">
            <div className="info-feature-card"> Identify and correct dysfunctional breathing habits.</div>
            <div className="info-feature-card"> Understand the triggers and motivations behind your habits.</div>
            <div className="info-feature-card"> Optimize your respiration for health, focus, and performance.</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
