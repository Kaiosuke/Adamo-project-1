import PdMain from "@/components/PdMain";
import HeroSection from "./HeroSection";
import { useTranslation } from "react-i18next";
import IntroduceSection from "./IntroduceSection";
import TraditionalSection from "./TraditionalSection";

const About = () => {
  const { t } = useTranslation();
  console.log(t);

  return (
    <>
      <HeroSection />
      <PdMain />
      <IntroduceSection />
      <PdMain />
      <TraditionalSection />
      <PdMain />
    </>
  );
};

export default About;
