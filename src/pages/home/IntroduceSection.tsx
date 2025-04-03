import Home19 from "@/assets/images/home 19.png";
import Home18 from "@/assets/images/home-18.png";
import Quote from "@/assets/images/quote.png";

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
          <h2 className="text-secondary text-size-4xl lg:pr-20 pt-0">
            With <span className="text-primary">NgaoduVietnam</span>, immerses
            you in majestic space and unique cultural features
          </h2>
          <div className="flex md:gap-8 gap-4  items-start lg:pt-10 md:pt-6 pt-4">
            <img src={Quote} alt="quote" className="object-contain" />

            <div className="text-secondary">
              <p className="">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
                viverra nuQlla eget sed odio. Vulputate risus faucibus sem non,
                feugiat nec consequat, montes. Elementum scelerisque phasellus
                donec lectus ullamcorper faucibus. Malesuada et adipiscing
                molestie egestas leo ut.
              </p>
              <p className="lg:pt-6 md:pt-4 pt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
                viverra nuQlla eget sed odio. Vulputate risus faucibus sem non,
                feugiat nec consequat, montes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroduceSection;
