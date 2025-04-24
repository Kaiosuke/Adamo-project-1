import Hero from "@/assets/images/hero.png";
import LoadingBanner from "@/components/LoadingList/LoadingBanner";
import SearchTourHome from "@/components/searchList/SearchTourHome";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { useState } from "react";
import { Trans, useTranslation } from "react-i18next";

const HeroSection = () => {
  const { t } = useTranslation("home");

  const [loaded, setLoaded] = useState(false);

  return (
    <section className="sub-2-container">
      <div className="relative flex h-full">
        {!loaded ? (
          <LoadingBanner />
        ) : (
          <img
            src={Hero}
            alt="hero-image"
            onLoad={() => setLoaded(true)}
            className={`w-full h-[726px] object-cover ${
              loaded ? "block" : "hidden"
            }`}
          />
        )}
        <div className="flex gap-2 absolute top-[20%] w-full">
          <div className="lg:pt-20 md:pt-12 pt-6 sub-container">
            <p className="text-size-xl text-banner">
              <Trans i18nKey={"banner.title"} />
            </p>
            <h1 className="text-size-6xl text-third md:pt-4 pt-2 lg:w-[75%] md:w-[90%] w-[80%]">
              <Trans i18nKey={"banner.description"} />
            </h1>
          </div>
        </div>
        <div className="absolute -bottom-1 sub-2-container flex items-end justify-between">
          <div className="bg-third h-[100px] flex flex-col gap-2 justify-center items-start w-full xl:px-46 lg:pl-26 lg:py-10 md:px-12 sm:px-8 px-4">
            <div className="text-size-base font-semibold flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary"></div>
              {t("featured.title")}
            </div>
            <div className="flex w-full sm:items-center flex-row justify-between items-start sm:gap-0 gap-1">
              <div className="flex items-end gap-1">
                <span className="text-size-xl font-bold">200+</span>
                <span>{t("featured.tours")}</span>
              </div>
              <div className="flex items-end gap-1">
                <span className="text-size-xl font-bold">100+</span>
                <span>{t("featured.Destination")}</span>
              </div>
              <div className="flex items-end gap-1">
                <span className="text-size-xl font-bold">8+</span>
                <span>{t("featured.type")}</span>
              </div>
            </div>
          </div>
          <div className="lg:block hidden max-w-[1164px] m-auto w-full xl:px-0 lg:pr-18 md:pr-12 sm:pr-8 pr-4">
            <SearchTourHome />
          </div>
        </div>
      </div>
      <div className="lg:hidden block main-container">
        <Dialog>
          <DialogTrigger>
            <div className="px-6 py-3 text-third bg-primary">Open Search</div>
          </DialogTrigger>
          <DialogContent className="bg-third/60">
            <SearchTourHome />
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default HeroSection;
