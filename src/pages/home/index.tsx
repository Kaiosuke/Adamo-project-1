import Hero from "@/assets/images/hero.png";
import { FaMapMarkerAlt } from "react-icons/fa";

const Home = () => {
  return (
    <section className="w-full h-[100vh]">
      <div className="relative">
        <img src={Hero} alt="hero-image" className="w-full" />
        <div className="flex items-center gap-2 absolute top-[50%] translate-y-[-50%] main-container">
          <div className="">
            <p className="text-banner text-size-xl">Welcome to NgaoduVietnam</p>
            <h1 className="text-size-6xl text-third md:pt-4 pt-2 lg:w-[75%] md:w-[90%] w-[80%]">
              Perfect place for your stories
            </h1>
          </div>
          <div className="flex-[0_0_50%]">
            <div className="bg-third  p-6">
              <p className="text-size-xl">Discover beautiful Vietnam</p>
              <div className="bg-red-400 opacity-100 w-full lg:h-[64px] md:h-[48px] h-[36px] flex items-center gap-4">
                <FaMapMarkerAlt className="text-primary" />
                <span>Quatlam Beach, Giaothuy, Namdinh</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
