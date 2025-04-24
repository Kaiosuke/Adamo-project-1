import Home19 from "@/assets/images/home 19.png";
import Home18 from "@/assets/images/home-18.png";
import Pagoda from "@/assets/images/pagoda.png";
import Quote from "@/assets/images/quote.png";
import PdMain from "@/components/padding/PdMain";
import { Trans } from "react-i18next";

const IntroduceSection = () => {
  return (
    <section className="main-container">
      <div className="flex gap-6 lg:flex-row flex-col h-[100%]">
        <div className="lg:flex-[0_0_50%] flex-[0_0_100%] relative">
          <div className="lg:block flex gap-2">
            <div className="lg:absolute">
              <img src={Home18} alt="home-18" className="object-cover" />
            </div>
            <div className="lg:absolute lg:right-0 lg:bottom-[-200px]">
              <img src={Home19} alt="home-19" className="object-cover" />
            </div>
          </div>
        </div>

        <div className="lg:flex-[0_0_50%] flex-[0_0_100%] lg:pt-0 pt-6">
          <Trans
            i18nKey="introduce.title"
            ns="about"
            components={{
              h2: <h2 className="text-secondary text-size-4xl lg:pr-20 pt-0" />,
              span: <span className="text-primary text-size-4xl" />,
            }}
          />

          <div className="flex md:gap-8 gap-4  items-start lg:pt-10 md:pt-6 pt-4">
            <img src={Quote} alt="quote" className="object-contain" />

            <div className="text-secondary">
              <Trans
                i18nKey="introduce.description"
                ns="about"
                components={{
                  p: <p className="lg:pt-6 md:pt-4 pt-2" />,
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <PdMain />
      <PdMain />
      <PdMain />
      <div className="flex gap-10 lg:flex-row flex-col-reverse">
        <div className="lg:flex-[0_0_50%] flex-[0_0_100%] lg:pt-0 pt-6">
          <Trans
            i18nKey="introduce.title"
            ns="about"
            components={{
              h2: <h2 className="text-secondary text-size-4xl lg:pr-20 pt-0" />,
              span: <span className="text-primary text-size-4xl" />,
            }}
          />
          <div className="flex md:gap-8 gap-4 items-start lg:pt-10 md:pt-6 pt-4 lg: w-[80%]">
            <div className="text-secondary">
              <Trans
                i18nKey="introduce.description"
                ns="about"
                components={{
                  p: <p className="lg:pt-6 md:pt-4 pt-2" />,
                }}
              />
            </div>
          </div>
        </div>
        <div className="lg:flex-[0_0_50%] flex-[0_0_100%] ">
          <div className="w-full">
            <img src={Pagoda} alt="pagoda" className="object-contain w-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroduceSection;
