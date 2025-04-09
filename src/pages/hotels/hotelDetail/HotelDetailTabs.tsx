import Avatar1 from "@/assets/images/Avatar-1.png";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { FaUserCircle } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import { TbPointFilled } from "react-icons/tb";
import Descriptions from "./Descriptions";
import SelectRoom from "./SelectRoom";

const HotelDetailTabs = () => {
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
          Reviews(54)
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
        <div>
          <div className="bg-seven h-[291px] rounded-lg lg:p-8 md:p-6 p-4">
            <div className="flex h-full md:flex-row flex-col">
              <div className="flex-[0_0_35%]">
                <div className="flex justify-center md:items-center h-full flex-col gap-2">
                  <div className="text-secondary text-size-5xl">4/5</div>
                  <div className="text-secondary flex items-center gap-2">
                    <FaStar className="text-nine" />
                    <FaStar className="text-nine" />
                    <FaStar className="text-nine" />
                    <FaStar className="text-nine" />
                    <FaStar className="text-four" />
                  </div>
                  <div className="text-four font-semibold">
                    Based on <span className="text-secondary">150 reviews</span>
                  </div>
                </div>
              </div>
              <div className="flex-[0_0_auto] w-[2px] h-full bg-five mx-6 md:block hidden" />
              <div className="flex-[0_0_auto] w-full h-[1px] my-2 bg-five md:hidden block" />

              <div className="flex-[0_0_64%]">
                <div className="flex flex-col h-full justify-evenly">
                  <div className="flex items-center gap-2">
                    <span>5</span>
                    <FaStar className="text-four" />
                    <div className="flex-[0_0_50%] h-[8px] rounded-2xl flex">
                      <div className="bg-nine flex-[0_0_80%] rounded-l-lg" />
                      <div className="bg-five flex-[1_0_auto] rounded-r-lg" />
                    </div>
                    <span>42 reviews</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span>4</span>
                    <FaStar className="text-four" />
                    <div className="flex-[0_0_50%] h-[8px] rounded-2xl flex">
                      <div className="bg-nine flex-[0_0_30%] rounded-l-lg" />
                      <div className="bg-five flex-[1_0_auto] rounded-r-lg" />
                    </div>
                    <span>21 reviews</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span>3</span>
                    <FaStar className="text-four" />
                    <div className="flex-[0_0_50%] h-[8px] rounded-2xl flex">
                      <div className="bg-nine flex-[0_0_75%] rounded-l-lg" />
                      <div className="bg-five flex-[1_0_auto] rounded-r-lg" />
                    </div>
                    <span>46 reviews</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span>2</span>
                    <FaStar className="text-four" />
                    <div className="flex-[0_0_50%] h-[8px] rounded-2xl flex">
                      <div className="bg-nine flex-[0_1_0%] rounded-l-lg" />
                      <div className="bg-five flex-[1_0_auto] rounded-lg" />
                    </div>
                    <span>0 review</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span>1 </span>
                    <FaStar className="text-four ml-1" />
                    <div className="flex-[0_0_50%] h-[8px] rounded-2xl flex">
                      <div className="bg-nine flex-[0_1_0%] rounded-l-lg" />
                      <div className="bg-five flex-[1_0_auto] rounded-lg" />
                    </div>
                    <span>0 review</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="str-line-2" />
          <div>
            <div className="flex gap-2">
              <div className="">
                <FaUserCircle className="lg:w-[56px] md:w-[48px] w-[40px] h-auto text-five" />
              </div>
              <Textarea
                placeholder="Type anything"
                className="h-[128px] bg-seven text-four placeholder:text-four"
              />
            </div>
            <div className="w-full text-right mt-6">
              <Button className="w-auto lg:px-10 md:px-8 px-6" size={"third"}>
                Comment
              </Button>
            </div>
          </div>
          <div className="str-line-2" />
          <div>
            <div className="flex flex-col gap-4">
              <div>
                <div className="flex gap-6 items-center">
                  <Avatar className="w-[83px] h-[83px]">
                    <AvatarImage src={Avatar1} />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col gap-4 text-secondary">
                    <div className="text-secondary flex items-center gap-2">
                      <FaStar className="text-nine" />
                      <FaStar className="text-nine" />
                      <FaStar className="text-nine" />
                      <FaStar className="text-nine" />
                      <FaStar className="text-four" />
                    </div>
                    <div className="font-bold">The best experience ever!</div>
                    <div className="flex gap-2 items-center">
                      Nevermind <TbPointFilled className="w-3 text-five" /> Sep
                      2020
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <p className="leading-6 text-four">
                    It was excellent! The trip is long but the vans are
                    comfortable and have wi-fi. The driver very friendly as well
                    as Ahmed our guide to the dromedaries. The camp was
                    beautiful, comfortable beds, clean bathroom and delicious
                    food!
                  </p>
                </div>
              </div>
              <div className="str-line-2" />
              <div>
                <div className="flex gap-6 items-center">
                  <Avatar className="w-[83px] h-[83px]">
                    <AvatarImage src={Avatar1} />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col gap-4 text-secondary">
                    <div className="text-secondary flex items-center gap-2">
                      <FaStar className="text-nine" />
                      <FaStar className="text-nine" />
                      <FaStar className="text-nine" />
                      <FaStar className="text-nine" />
                      <FaStar className="text-four" />
                    </div>
                    <div className="font-bold">The best experience ever!</div>
                    <div className="flex gap-2 items-center">
                      Nevermind <TbPointFilled className="w-3 text-five" /> Sep
                      2020
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <p className="leading-6 text-four">
                    It was excellent! The trip is long but the vans are
                    comfortable and have wi-fi. The driver very friendly as well
                    as Ahmed our guide to the dromedaries. The camp was
                    beautiful, comfortable beds, clean bathroom and delicious
                    food!
                  </p>
                </div>
              </div>
              <div className="str-line-2" />
            </div>
            <div className="flex gap-4 sm:pt-0 pt-4">
              <div className="w-10 h-10 bg-five flex items-center justify-center text-four font-semibold cursor-pointer">
                <GoArrowLeft />
              </div>
              <div className="w-10 h-10 bg-secondary flex items-center justify-center text-third font-semibold cursor-pointer">
                1
              </div>
              <div className="w-10 h-10 bg-five flex items-center justify-center text-four font-semibold cursor-pointer">
                2
              </div>
              <div className="w-10 h-10 bg-five flex items-center justify-center text-four font-semibold cursor-pointer">
                <GoArrowRight />
              </div>
            </div>
          </div>
        </div>
      </TabsContent>
    </Tabs>
  );
};

export default HotelDetailTabs;
