import React from "react";

interface Props {
  image: string;
  title?: string;
  des: string;
  Tour?: React.ReactNode;
}

const HeroSectionCom = ({ image, title, des, Tour }: Props) => {
  return (
    <section className="w-full lg:mb-4 mb-10">
      <div className="relative flex">
        <img src={image} alt="hero-image" className="w-full object-cover" />
        <div className="flex gap-2 absolute top-[20%] main-container ">
          <div className="lg:pt-20 md:pt-12 pt-6">
            <p className="text-size-xl text-banner">{title}</p>
            <h1
              className={`text-size-6xl text-third md:pt-4 pt-2 ${
                des.split(" ").length > 2
                  ? "lg:w-[50%] md:w-[90%] w-[80%]"
                  : "w-full"
              } `}
            >
              {des}
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
