import "./assets/style/main.scss";
import IntroductionSection from "./SectionComponents/IntroductionSection";
import AboutSection from "./SectionComponents/AboutSection";
import ExperienceSection from "./SectionComponents/ExperienceSection";
import FeatureSection from "./SectionComponents/FeatureSection";
import WorkSection from "./SectionComponents/WorkSection";
import ServiceSection from "./SectionComponents/ServiceSection";
import UsersSection from "./SectionComponents/UsersSection";
import StorySection from "./SectionComponents/StorySection";

function App() {
  return (
    <div>
      <IntroductionSection />
      <AboutSection />
      <ExperienceSection />
      <WorkSection />
      <UsersSection />
      <StorySection />
      <FeatureSection />
      <ServiceSection />
    </div>
  );
}

export default App;
