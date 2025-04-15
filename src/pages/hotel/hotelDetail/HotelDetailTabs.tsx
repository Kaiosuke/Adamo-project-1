import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Descriptions from "./Descriptions";
import Reviews from "./Reviews";
import SelectRoom from "./SelectRoom";

interface Props {
  currentPage: number;
  setCurrentPage: (v: number) => void;
  pageCount: number;
}

const HotelDetailTabs = ({ currentPage, pageCount, setCurrentPage }: Props) => {
  const totalData = JSON.parse(localStorage.getItem("totalReviewHotel") || "0");

  return (
    <Tabs defaultValue="selectRoom" className="lg:pt-10 pt-6">
      <TabsList className="w-full bg-third justify-between p-0">
        <TabsTrigger
          value="selectRoom"
          className="data-[state=active]:text-primary text-size-2xl px-0 flex-none data-[state=active]:shadow-none trans-slow hover:text-six cursor-pointer"
        >
          Select room
        </TabsTrigger>
        <TabsTrigger
          value="descriptions"
          className="data-[state=active]:text-primary text-size-2xl px-0 flex-none data-[state=active]:shadow-none trans-slow hover:text-six cursor-pointer"
        >
          Descriptions
        </TabsTrigger>
        <TabsTrigger
          value="reviews"
          className="data-[state=active]:text-primary text-size-2xl px-0 flex-none data-[state=active]:shadow-none trans-slow hover:text-six cursor-pointer"
        >
          {totalData > 0 ? `Reviews(${totalData})` : `Review(${totalData})`}
        </TabsTrigger>
      </TabsList>
      <div className="str-line" />
      <TabsContent value="selectRoom">
        <SelectRoom />
      </TabsContent>
      <TabsContent value="descriptions">
        <Descriptions />
      </TabsContent>

      <TabsContent value="reviews">
        <Reviews
          currentPage={currentPage}
          pageCount={pageCount}
          setCurrentPage={setCurrentPage}
        />
      </TabsContent>
    </Tabs>
  );
};

export default HotelDetailTabs;
