import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SearchTour from "./SearchTour";
import SearchHotel from "./SearchHotel";
import { useTranslation } from "react-i18next";

const SearchTourHome = () => {
  const { t } = useTranslation("search");

  return (
    <div className="flex-[0_0_30%] 2xl:mr-48 lg:mr-32 md:mr-12 sm:mr-24 mr-8">
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
            <SearchTour isHome />
          </TabsContent>
          <TabsContent value="hotel">
            <SearchHotel isHome />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default SearchTourHome;
