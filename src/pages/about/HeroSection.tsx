import Hero from "@/assets/images/hero.png";
import { Trans } from "react-i18next";

const HeroSection = () => {
  return (
    <section className="sub-2-container">
      <div className="w-full flex relative">
        <img src={Hero} alt="about" className="w-full object-cover h-[400px]" />
        <div className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
          <h1 className="text-third text-size-6xl">
            {<Trans i18nKey={"banner.title"} ns="about" />}
          </h1>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
