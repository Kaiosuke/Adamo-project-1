import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { tourSelector } from "@/redux/selectors/tourSelector";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import LoadingSearch from "../LoadingList/LoadingSearch";
import SearchHotel from "./hotel/SearchHotel";
import SearchTour from "./tour/SearchTour";

const SearchTourHome = () => {
  const { t } = useTranslation("search");

  const { loading } = useSelector(tourSelector);

  return (
    <div className=" 2xl:mr-48 lg:mr-32 md:mr-12 sm:mr-24 mr-8 lg:max-w-[446px] w-full">
      <div className="relative z-10">
        <Tabs defaultValue="tour">
          <TabsList className="flex w-full p-0 h-[46px] rounded-none bg-third/60 trans-fast">
            <TabsTrigger
              value="tour"
              className="rounded-none data-[state=active]:bg-primary data-[state=active]:text-third cursor-pointer"
            >
              {t("tour.title")}
            </TabsTrigger>
            <TabsTrigger
              value="hotel"
              className="rounded-none data-[state=active]:bg-primary data-[state=active]:text-third cursor-pointer"
            >
              {t("hotel.title")}
            </TabsTrigger>
          </TabsList>
          <TabsContent value="tour">
            {loading ? (
              <div className="h-[503px]">
                <LoadingSearch />
              </div>
            ) : (
              <>
                <SearchTour isHome />
              </>
            )}
          </TabsContent>
          <TabsContent value="hotel">
            {loading ? (
              <div className="h-[503px]">
                <LoadingSearch />
              </div>
            ) : (
              <>
                <SearchHotel isHome />
              </>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default SearchTourHome;
