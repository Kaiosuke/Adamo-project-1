import Fansipan from "@/assets/images/Fansipan.png";
import PhuQuoc from "@/assets/images/PhuQuoc.png";
import Shape2 from "@/assets/images/Shape-2png.png";
import Shape from "@/assets/images/shape.png";
import VungTau from "@/assets/images/Vung Tau.png";
import ButtonFeature from "@/components/ButtonFeature";
import Location from "@/components/Tour";

const TraditionalSection = () => {
  return (
    <section className="main-container">
      <div className="flex">
        <h3 className="text-secondary text-size-4xl">
          Experience the traditional <br /> cultural beauties of Vietnam
        </h3>
        <div className="ml-auto">
          <ButtonFeature content="View All" />
        </div>
      </div>
      <div className="grid lg:grid-cols-3 gap-4 md:grid-cols-2 grid-cols-1 pt-6">
        <Location
          mainImg={VungTau}
          subImag={Shape2}
          rate={4.5}
          des=" Discover interesting things in the romantic coastal city of
              Vungtau"
          location="SaPa, LaoCai"
          time="3 days - 2 night"
          price="146.00"
        />
        <Location
          mainImg={Fansipan}
          subImag={Shape}
          rate={4.5}
          des=" Discover interesting things in the romantic coastal city of
              Vungtau"
          location="SaPa, LaoCai"
          time="3 days - 2 night"
          price="421.00"
        />
        <Location
          mainImg={PhuQuoc}
          subImag={Shape2}
          rate={4.5}
          des=" Discover interesting things in the romantic coastal city of
              Vungtau"
          location="SaPa, LaoCai"
          time="3 days - 2 night"
          price="321.00"
        />
      </div>
    </section>
  );
};

export default TraditionalSection;
