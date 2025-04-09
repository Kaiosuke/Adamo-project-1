import HotelImg from "@/assets/images/hotel.png";
import BreadcrumbCom from "@/components/Breadcrumb";
import HeroSectionCom from "@/components/HeroSectionCom";
import PdSub from "@/components/PdSub";
import SearchHotel from "@/components/searchList/SearchHotel";
import HotelSection from "./HotelSection";
import PdMain from "@/components/PdMain";

const Hotel = () => {
  return (
    <>
      <HeroSectionCom
        image={HotelImg}
        Tour={<SearchHotel />}
        title="Find deals on hotels, homes, and much more..."
        des="From cozy country homes to funky city apartments"
      />
      <BreadcrumbCom links={[{ title: "home", href: "/" }]} current="hotels" />
      <PdSub />
      <HotelSection />
      <PdMain />
    </>
  );
};

export default Hotel;
