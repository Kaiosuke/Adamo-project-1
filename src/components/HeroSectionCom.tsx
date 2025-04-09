import React from "react";

interface Props {
  image: string;
  title?: string;
  des: string;
  Tour?: React.ReactNode;
}

const HeroSectionCom = ({ image, title, des, Tour }: Props) => {
  return (
    <section className="w-full max-w-[1600px] m-auto">
      <div className="relative flex">
        <img
          src={image}
          alt="hero-image"
          className="w-full h-screen object-cover"
        />
        <div className="flex gap-2 absolute top-[20%] w-full">
          <div className="lg:pt-20 md:pt-12 pt-6 w-[1164px] m-auto">
            <p className="text-size-xl text-banner">{title}</p>
            <h1 className="text-size-6xl text-third md:pt-4 pt-2 lg:w-[45%] md:w-[90%] w-[80%]">
              {des}
            </h1>
          </div>
        </div>
        <div className="absolute -bottom-1 flex w-full items-end ">
          <div className="bg-third w-full lg:h-[98px] h-0" />
          {Tour}
        </div>
      </div>
    </section>
  );
};

export default HeroSectionCom;
