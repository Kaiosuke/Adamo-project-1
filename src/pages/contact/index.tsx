import HeroImage from "@/assets/images/hero-contact.png";
import BreadcrumbCom from "@/components/Breadcrumb";
import MapCom from "@/components/MapCom";
import PdMain from "@/components/PdMain";
import PdSub from "@/components/PdSub";
import ContactSection from "./ContactSection";
import { Trans, useTranslation } from "react-i18next";

const Contact = () => {
  useTranslation("contact");

  return (
    <>
      <section className="w-full max-w-[1600px] m-auto">
        <div className="relative flex">
          <img
            src={HeroImage}
            alt="hero-image"
            className="w-full h-[568px] object-cover"
          />
          <div className="flex gap-2 absolute top-[50%] -translate-y-[50%] w-full">
            <div className="lg:pt-20 md:pt-12 pt-6 sub-container">
              <h1 className="text-size-6xl text-third md:pt-4 pt-2 lg:w-[45%] md:w-[90%] w-[80%]">
                <Trans i18nKey={"banner.title"} ns="contact" />
              </h1>
            </div>
          </div>
        </div>
      </section>
      <PdSub />
      <BreadcrumbCom links={[{ title: "Home", href: "/" }]} current="Contact" />
      <PdSub />
      <ContactSection />
      <PdMain />
      <MapCom />
    </>
  );
};

export default Contact;
