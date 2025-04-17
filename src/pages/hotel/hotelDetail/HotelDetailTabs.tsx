import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Descriptions from "./Descriptions";
import Reviews from "./Reviews";
import SelectRoom from "./SelectRoom";
import { IHotel } from "@/interfaces/hotel";

interface Props {
  data: IHotel;
}

const HotelDetailTabs = ({ data }: Props) => {
  const totalData = localStorage.getItem("totalReviewHotel");

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
          {totalData && Number(totalData) > 0
            ? `Reviews(${totalData})`
            : `Review(${totalData})`}
        </TabsTrigger>
      </TabsList>
      <div className="str-line" />
      <TabsContent value="selectRoom">
        <SelectRoom />
      </TabsContent>
      <TabsContent value="descriptions">
        <Descriptions data={data} />
      </TabsContent>

      <TabsContent value="reviews">
        <Reviews />
      </TabsContent>
    </Tabs>
  );
};

export default HotelDetailTabs;
