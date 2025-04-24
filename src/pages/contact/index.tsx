import BreadcrumbCom from "@/components/Breadcrumb";
import MapCom from "@/components/MapCom";

import PdMain from "@/components/paddingList/PbMain";
import PdSub from "@/components/paddingList/PbSub";
import { useTranslation } from "react-i18next";
import ContactSection from "./ContactSection";
import HeroSection from "./HeroSection";

const Contact = () => {
  useTranslation("contact");

  return (
    <>
      <HeroSection />
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
