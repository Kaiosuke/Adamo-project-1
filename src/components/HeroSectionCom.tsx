import React from "react";

const HeroSectionCom = ({
  image,
  Tour,
}: {
  image: string;
  Tour: React.ReactNode;
}) => {
  return (
    <section className="w-full lg:mb-4 mb-10">
      <div className="relative flex">
        <img src={image} alt="hero-image" className="w-full object-cover" />
        <div className="flex gap-2 absolute top-[20%] main-container ">
          <div className="lg:pt-20 md:pt-12 pt-6">
            <p className="text-size-xl text-banner">
              Search hundreds of tours and more
            </p>
            <h1 className="text-size-6xl text-third md:pt-4 pt-2 lg:w-[50%] md:w-[90%] w-[80%]">
              Attractive tour and interesting experiences
            </h1>
          </div>
        </div>
        <div className="absolute bottom-0 flex w-full items-end ">
          <div className="bg-third w-full main-container">
            <div className="lg:h-[98px] h-0" />
          </div>
          {Tour}
        </div>
      </div>
    </section>
  );
};

export default HeroSectionCom;
