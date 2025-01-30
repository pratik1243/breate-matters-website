import "./assets/style/main.scss";
import IntroductionSection from "./SectionComponents/IntroductionSection";
import AboutSection from "./SectionComponents/AboutSection";
import ExperienceSection from "./SectionComponents/ExperienceSection";
import FeatureSection from "./SectionComponents/FeatureSection";
import WorkSection from "./SectionComponents/WorkSection";
import ServiceSection from "./SectionComponents/ServiceSection";

function App() {
  return (
    <div>
      <IntroductionSection />
      <AboutSection />
      <ExperienceSection />
      <WorkSection />
      <FeatureSection />
      <ServiceSection />
    </div>
  );
}

export default App;
