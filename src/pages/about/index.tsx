import LazyWrapper from "@/components/lazies/LazyWrapper";
import PdMain from "@/components/PdMain";
import HeroSection from "./HeroSection";

const About = () => {
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
