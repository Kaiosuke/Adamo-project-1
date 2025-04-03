import DaNang from "@/assets/images/Da Nang.png";
import HoiAn from "@/assets/images/Hoi An.png";
import MuiNe from "@/assets/images/Mui ne.png";
import Sapa from "@/assets/images/Sapa.png";
import ButtonFeature from "@/components/ButtonFeature";

const DiscoverSection = () => {
  return (
    <section className="main-container">
      <div className="flex">
        <h3 className="text-secondary text-size-4xl">
          Discover fascinating <br /> destinations
        </h3>
        <div className="ml-auto">
          <ButtonFeature content="View All" />
        </div>
      </div>
      <div className="grid lg:grid-cols-4 gap-4 md:grid-cols-2 grid-cols-1 pt-6">
        <div className="w-full">
          <img src={Sapa} alt="Sapa" className="object-cover w-full" />
          <div className="pt-4">
            <h4 className="text-size-xl text-secondary">Sapa, Lao Cai</h4>
            <span className="text-four text-base">24 experiences</span>
          </div>
        </div>
        <div className="w-full">
          <img src={DaNang} alt="DaNang" className="object-cover w-full" />
          <div className="pt-4">
            <h4 className="text-size-xl text-secondary">Hoian, Quangnam</h4>
            <span className="text-four text-base">12 experiences</span>
          </div>
        </div>
        <div className="w-full">
          <img src={HoiAn} alt="HoiAn" className="object-cover w-full" />
          <div className="pt-4">
            <h4 className="text-size-xl text-secondary">Ba Na Hill, Danang</h4>
            <span className="text-four text-base">28 experiences</span>
          </div>
        </div>
        <div className="w-full">
          <img src={MuiNe} alt="MuiNe" className="object-cover w-full" />
          <div className="pt-4">
            <h4 className="text-size-xl text-secondary">Muine, Binhthuan</h4>
            <span className="text-four text-base">11 experiences</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiscoverSection;
