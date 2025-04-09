import HeroImage from "@/assets/images/hero-contact.png";
import BreadcrumbCom from "@/components/Breadcrumb";
import HeroSectionCom from "@/components/HeroSectionCom";
import PdMain from "@/components/PdMain";
import PdSub from "@/components/PdSub";
import ContactSection from "./ContactSection";
import MapCom from "@/components/MapCom";

const Contact = () => {
  return (
    <>
      <HeroSectionCom image={HeroImage} des="Contact Us" />
      <BreadcrumbCom links={[{ title: "home", href: "/" }]} current="Contact" />
      <PdSub />
      <ContactSection />
      <PdMain />
      <MapCom />
    </>
  );
};

export default Contact;
