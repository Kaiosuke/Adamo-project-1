import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import Additional from "./Additional";
import Description from "./Description";
import Reviews from "./Reviews";

const TourDetailTabs = () => {
  return (
    <Tabs defaultValue="descriptions" className="lg:pt-10 pt-6">
      <TabsList className="w-full bg-third justify-between p-0">
        <TabsTrigger
          value="descriptions"
          className="data-[state=active]:text-primary text-size-2xl px-0 flex-none data-[state=active]:shadow-none trans-slow hover:text-six cursor-pointer"
        >
          Descriptions
        </TabsTrigger>
        <TabsTrigger
          value="additional"
          className="data-[state=active]:text-primary text-size-2xl px-0 flex-none data-[state=active]:shadow-none trans-slow hover:text-six cursor-pointer"
        >
          Additional
        </TabsTrigger>
        <TabsTrigger
          value="reviews"
          className="data-[state=active]:text-primary text-size-2xl px-0 flex-none data-[state=active]:shadow-none trans-slow hover:text-six cursor-pointer"
        >
          Reviews(54)
        </TabsTrigger>
      </TabsList>
      <div className="str-line" />
      <TabsContent value="descriptions">
        <Description />
      </TabsContent>
      <TabsContent value="additional">
        <Additional />
      </TabsContent>
      <TabsContent value="reviews">
        <Reviews />
      </TabsContent>
    </Tabs>
  );
};

export default TourDetailTabs;
