import Hero from "@/assets/images/hero.png";
import SearchTourHome from "@/components/searchList/SearchTourHome";

const HeroSection = () => {
  return (
    <section className="w-full h-[100vh]">
      <div className="relative flex">
        <img
          src={Hero}
          alt="hero-image"
          className="w-full h-screen object-cover"
        />
        <div className="flex gap-2 absolute top-[20%] main-container ">
          <div className="lg:pt-20 md:pt-12 pt-6">
            <p className="text-size-xl text-banner">Welcome to NgaoduVietnam</p>
            <h1 className="text-size-6xl text-third md:pt-4 pt-2 lg:w-[75%] md:w-[90%] w-[80%]">
              Perfect place for your stories
            </h1>
          </div>
        </div>
        <div className="absolute bottom-0 flex w-full items-end ">
          <div className="bg-third py-6 h-fit w-full main-container">
            <div className="text-size-base font-semibold flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary"></div>
              Featured
            </div>
            <div className="flex sm:items-center sm:flex-row flex-col justify-between items-start sm:gap-0 gap-1">
              <div className="flex items-end gap-1">
                <span className="text-size-xl font-bold">200+</span>
                <span>tours</span>
              </div>
              <div className="flex items-end gap-1">
                <span className="text-size-xl font-bold">100+</span>
                <span>Destination</span>
              </div>
              <div className="flex items-end gap-1">
                <span className="text-size-xl font-bold">8+</span>
                <span>Type of tour</span>
              </div>
            </div>
          </div>
          <SearchTourHome />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
