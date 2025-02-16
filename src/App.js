import "./assets/style/main.scss";
import { useEffect, useState } from "react";
import IntroductionSection from "./SectionComponents/IntroductionSection";
import AboutSection from "./SectionComponents/AboutSection";
import ExperienceSection from "./SectionComponents/ExperienceSection";
import FeatureSection from "./SectionComponents/FeatureSection";
import WorkSection from "./SectionComponents/WorkSection";
import ServiceSection from "./SectionComponents/ServiceSection";
import UsersSection from "./SectionComponents/UsersSection";
import StorySection from "./SectionComponents/StorySection";
import Navbar from "./SectionComponents/Navbar";
import Footer from "./SectionComponents/Footer";

function App() {
  const [navBg, setNavBg] = useState(false);

  function show() {
    let scroll = window.scrollY;

    if (scroll > 50) {
      setNavBg(true);
    } else {
      setNavBg(false);
    }
  }

  useEffect(() => {
    document.addEventListener("scroll", show);

    return () => {
      setNavBg(false);
      document.removeEventListener("scroll", show);
    };
  }, []);

  return (
    <div>
      <Navbar navBg={navBg} />
      <IntroductionSection />
      <AboutSection />
      <ExperienceSection />
      <WorkSection />
      <UsersSection />
      <StorySection />
      <FeatureSection />
      <ServiceSection />
      <Footer />
    </div>
  );
}

export default App;
