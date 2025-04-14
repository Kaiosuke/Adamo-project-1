import LazyWrapper from "@/components/lazies/LazyWrapper";
import PdMain from "@/components/PdMain";
import HeroSection from "./HeroSection";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();

  return (
    <>
      <HeroSection />
      <PdMain />
      <LazyWrapper loader={() => import("./IntroduceSection")} />
      <PdMain />
      <LazyWrapper loader={() => import("./TraditionalSection")} />
      <PdMain />
    </>
  );
};

export default About;
