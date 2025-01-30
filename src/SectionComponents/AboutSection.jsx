import React from 'react'
import knosisLogo from "../assets/images/knosis-img.png";
import drCruzLogo from "../assets/images/dr-cruz-img.png";
import airwayLogo from "../assets/images/airway-img.png";
import conspirLogo from "../assets/images/conspir-img.png";

const AboutSection = () => {
  return (
    <div className='about-section'>
        <div className='sponsors-section'>
            <div className='sponsors-img-sec'>
                <img src={knosisLogo} />
            </div>
            <div className='sponsors-img-sec'>
                <img src={drCruzLogo} />
            </div>
            <div className='sponsors-img-sec'>
                <img src={airwayLogo} />
            </div>
            <div className='sponsors-img-sec'>
                <img src={conspirLogo} />
            </div>
        </div>
    </div>
  )
}

export default AboutSection