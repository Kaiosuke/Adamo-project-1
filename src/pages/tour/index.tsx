import BreadcrumbCom from "@/components/Breadcrumb";

import PdMain from "@/components/PdMain";
import PdSub from "@/components/PdSub";
import AttractiveTourSection from "./AttractiveTourSection";

import { getAllTour, getFilters } from "@/api/tourRequest";
import TourImg from "@/assets/images/hero-tour.png";
import HeroSectionCom from "@/components/HeroSectionCom";
import LoadingPage from "@/components/LoadingPage";
import SearchTour from "@/components/searchList/SearchTour";
import { useAppDispatch } from "@/redux";
import { tourSelector } from "@/redux/selectors/tourSelector";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const Tour = () => {
  const dispatch = useAppDispatch();

  const { filter, loading } = useSelector(tourSelector);

  const { location, type, duration } = filter;

  useEffect(() => {
    (async () => {
      try {
        await dispatch(getFilters());
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  useEffect(() => {
    (async () => {
      try {
        const separateType = () => {
          let result = "";
          type.forEach((v) => {
            result += `type=${v}&`;
          });
          return result;
        };

        const arrDuration = duration.split("-");

        const separateDuration = () => {
          let result = "";
          arrDuration.forEach((v) => {
            result += `lte=${v}&gte=${v}`;
          });
          return result;
        };

        const dataType = separateType();
        const dataDuration = separateDuration();
        await dispatch(
          getAllTour({ location, types: dataType, durations: dataDuration })
        );
      } catch (error) {
        console.log(error);
      }
    })();
  }, [dispatch, location, type, duration]);

  if (loading) {
    return <LoadingPage />;
  }

  return (
    <>
      <HeroSectionCom
        image={TourImg}
        Tour={<SearchTour />}
        title="Search hundreds of tours and more"
        des="Attractive tour and interesting experiences"
      />
      <BreadcrumbCom links={[{ title: "home", href: "/" }]} current="tours" />
      <PdSub />
      <AttractiveTourSection />
      <PdMain />
    </>
  );
};

export default Tour;
