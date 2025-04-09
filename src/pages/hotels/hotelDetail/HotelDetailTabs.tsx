import Avatar1 from "@/assets/images/Avatar-1.png";
import FullMap from "@/assets/images/Full Map.png";
import Room1 from "@/assets/images/room-1.png";
import Tour1 from "@/assets/images/tour-detail-1.png";
import Tour2 from "@/assets/images/tour-detail-2.png";
import AccordionCom from "@/components/AccordionCom";
import SwiperCom from "@/components/SwiperCom";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { FaMapMarkerAlt, FaUserCircle } from "react-icons/fa";
import { FaCheck, FaImage, FaStar } from "react-icons/fa6";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import { IoBedOutline, IoCheckmarkSharp } from "react-icons/io5";
import { LuUsers } from "react-icons/lu";
import { RiShape2Line } from "react-icons/ri";
import { TbPointFilled } from "react-icons/tb";

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
        <h3 className="text-secondary text-size-xl font-extrabold">Rooms</h3>
        <div className="flex flex-col gap-4 mt-4">
          <div className="w-full bg-seven">
            <div className="relative flex ">
              <img src={Room1} alt="room1" />
              <div className="absolute top-2 left-2 w-8 h-8 rounded-full bg-four flex justify-center items-center">
                <Dialog>
                  <DialogTrigger>
                    <FaImage className="text-third cursor-pointer" />
                  </DialogTrigger>
                  <DialogContent className="lg:max-w-[1200px] md:max-w-[900px] max-w-[90%]">
                    <DialogHeader>
                      <DialogTitle className="text-secondary text-size-3xl">
                        Standard Room
                      </DialogTitle>
                    </DialogHeader>
                    <div className="flex lg:h-[100%] h-screen gap-10 lg:flex-row flex-col overflow-auto">
                      <div className="lg:flex-[1_0_auto] flex-[0_0_100%] lg:max-w-[635px] w-[100%]">
                        <div className="flex justify-between items-center">
                          <div className="flex items-center gap-2">
                            <span className="line-through text-four">$600</span>
                            <span className="text-size-2xl text-red-700 font-bold">
                              $40.00
                            </span>
                            <span className="text-four">/night</span>
                          </div>
                          <div>
                            <Button
                              variant={"primary"}
                              size={"third"}
                              className="px-4 font-semibold"
                            >
                              Select room
                            </Button>
                          </div>
                        </div>
                        <div className="mt-4 h-[520px]">
                          <SwiperCom />
                        </div>
                      </div>
                      <div className="flex-[1_1_auto]">
                        <div className="flex items-center justify-between text-six">
                          <div className="flex items-center gap-1">
                            <RiShape2Line className="text-secondary text-lg" />
                            <span>70 m2</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <IoBedOutline className="text-secondary text-lg" />
                            <span>1 Queen Bed</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <LuUsers className="text-secondary text-lg" />
                            <span>2 Guest</span>
                          </div>
                        </div>
                        <div className="str-line" />
                        <div className="text-four">
                          <p>
                            This air-conditioned room features large windows and
                            a balcony with views of the city and sea. It
                            contains a sitting area, flat-screen TV, a fridge
                            and tea-and-coffee-making facilities. The bathroom
                            has a shower and toilet.
                          </p>
                          <p className="pt-4">
                            Maximum occupancy is 2 adults and 1 child under the
                            age of 2 years old in a crib. Please note that extra
                            beds cannot be accommodated in this room type.
                          </p>
                        </div>
                        <div className="str-line" />

                        <div className="">
                          <span className="text-secondary font-bold text-size-lg">
                            Room Facilities:
                          </span>
                          <ul className="text-four grid grid-cols-2 gap-2 mt-2">
                            <li className="flex items-center gap-2">
                              <span className="text-lg text-[#28B554]">
                                <FaCheck />
                              </span>
                              Air conditioning
                            </li>
                            <li className="flex items-center gap-2">
                              <span className="text-lg text-[#28B554]">
                                <FaCheck />
                              </span>
                              Air conditioning
                            </li>
                            <li className="flex items-center gap-2">
                              <span className="text-lg text-[#28B554]">
                                <FaCheck />
                              </span>
                              Air conditioning
                            </li>
                            <li className="flex items-center gap-2">
                              <span className="text-lg text-[#28B554]">
                                <FaCheck />
                              </span>
                              Air conditioning
                            </li>
                            <li className="flex items-center gap-2">
                              <span className="text-lg text-[#28B554]">
                                <FaCheck />
                              </span>
                              Air conditioning
                            </li>
                            <li className="flex items-center gap-2">
                              <span className="text-lg text-[#28B554]">
                                <FaCheck />
                              </span>
                              Air conditioning
                            </li>
                            <li className="flex items-center gap-2">
                              <span className="text-lg text-[#28B554]">
                                <FaCheck />
                              </span>
                              Air conditioning
                            </li>
                            <li className="flex items-center gap-2">
                              <span className="text-lg text-[#28B554]">
                                <FaCheck />
                              </span>
                              Air conditioning
                            </li>
                            <li className="flex items-center gap-2">
                              <span className="text-lg text-[#28B554]">
                                <FaCheck />
                              </span>
                              Air conditioning
                            </li>
                            <li className="flex items-center gap-2">
                              <span className="text-lg text-[#28B554]">
                                <FaCheck />
                              </span>
                              Air conditioning
                            </li>
                            <li className="flex items-center gap-2">
                              <span className="text-lg text-[#28B554]">
                                <FaCheck />
                              </span>
                              Air conditioning
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
              <div className="py-2 px-4 w-full">
                <div className="flex flex-col gap-1.5">
                  <h4 className="text-secondary text-size-xl">Family Suite</h4>
                  <div className="flex sm:items-center justify-between text-four sm:flex-row flex-col items-start">
                    <div className="flex items-center gap-1">
                      <RiShape2Line className="text-secondary text-lg" />
                      <span>70 m2</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <IoBedOutline className="text-secondary text-lg" />
                      <span>1 Queen Bed</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <LuUsers className="text-secondary text-lg" />
                      <span>2 Guest</span>
                    </div>
                  </div>
                  <p className="text-four">
                    Air Conditioning • Airport Transport • Restaurant • 15 more
                  </p>
                </div>
                <div className="mt-2 flex items-center justify-between">
                  <Button
                    variant={"outline"}
                    size={"third"}
                    className="px-4 font-semibold lg:max-w-[170px] max-w-[120px] w-full"
                  >
                    Select room
                  </Button>
                  <div>
                    <span className="text-red-600 text-size-xl font-bold">
                      $240.00
                    </span>
                    <span className="text-four">/night</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 mt-4">
          <div className="w-full bg-seven">
            <div className="relative flex ">
              <img src={Room1} alt="room1" />
              <div className="absolute top-2 left-2 w-8 h-8 rounded-full bg-four flex justify-center items-center">
                <Dialog>
                  <DialogTrigger>
                    <FaImage className="text-third cursor-pointer" />
                  </DialogTrigger>
                  <DialogContent className="lg:max-w-[1200px] md:max-w-[900px] max-w-[90%]">
                    <DialogHeader>
                      <DialogTitle className="text-secondary text-size-3xl">
                        Standard Room
                      </DialogTitle>
                    </DialogHeader>
                    <div className="flex lg:h-[100%] h-screen gap-10 lg:flex-row flex-col overflow-auto">
                      <div className="lg:flex-[1_0_auto] flex-[0_0_100%] lg:max-w-[635px] w-[100%]">
                        <div className="flex justify-between items-center">
                          <div className="flex items-center gap-2">
                            <span className="line-through text-four">$600</span>
                            <span className="text-size-2xl text-red-700 font-bold">
                              $40.00
                            </span>
                            <span className="text-four">/night</span>
                          </div>
                          <div>
                            <Button
                              variant={"primary"}
                              size={"third"}
                              className="px-4 font-semibold"
                            >
                              Select room
                            </Button>
                          </div>
                        </div>
                        <div className="mt-4 h-[520px]">
                          <SwiperCom />
                        </div>
                      </div>
                      <div className="flex-[1_1_auto]">
                        <div className="flex items-center justify-between text-six">
                          <div className="flex items-center gap-1">
                            <RiShape2Line className="text-secondary text-lg" />
                            <span>70 m2</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <IoBedOutline className="text-secondary text-lg" />
                            <span>1 Queen Bed</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <LuUsers className="text-secondary text-lg" />
                            <span>2 Guest</span>
                          </div>
                        </div>
                        <div className="str-line" />
                        <div className="text-four">
                          <p>
                            This air-conditioned room features large windows and
                            a balcony with views of the city and sea. It
                            contains a sitting area, flat-screen TV, a fridge
                            and tea-and-coffee-making facilities. The bathroom
                            has a shower and toilet.
                          </p>
                          <p className="pt-4">
                            Maximum occupancy is 2 adults and 1 child under the
                            age of 2 years old in a crib. Please note that extra
                            beds cannot be accommodated in this room type.
                          </p>
                        </div>
                        <div className="str-line" />

                        <div className="">
                          <span className="text-secondary font-bold text-size-lg">
                            Room Facilities:
                          </span>
                          <ul className="text-four grid grid-cols-2 gap-2 mt-2">
                            <li className="flex items-center gap-2">
                              <span className="text-lg text-[#28B554]">
                                <FaCheck />
                              </span>
                              Air conditioning
                            </li>
                            <li className="flex items-center gap-2">
                              <span className="text-lg text-[#28B554]">
                                <FaCheck />
                              </span>
                              Air conditioning
                            </li>
                            <li className="flex items-center gap-2">
                              <span className="text-lg text-[#28B554]">
                                <FaCheck />
                              </span>
                              Air conditioning
                            </li>
                            <li className="flex items-center gap-2">
                              <span className="text-lg text-[#28B554]">
                                <FaCheck />
                              </span>
                              Air conditioning
                            </li>
                            <li className="flex items-center gap-2">
                              <span className="text-lg text-[#28B554]">
                                <FaCheck />
                              </span>
                              Air conditioning
                            </li>
                            <li className="flex items-center gap-2">
                              <span className="text-lg text-[#28B554]">
                                <FaCheck />
                              </span>
                              Air conditioning
                            </li>
                            <li className="flex items-center gap-2">
                              <span className="text-lg text-[#28B554]">
                                <FaCheck />
                              </span>
                              Air conditioning
                            </li>
                            <li className="flex items-center gap-2">
                              <span className="text-lg text-[#28B554]">
                                <FaCheck />
                              </span>
                              Air conditioning
                            </li>
                            <li className="flex items-center gap-2">
                              <span className="text-lg text-[#28B554]">
                                <FaCheck />
                              </span>
                              Air conditioning
                            </li>
                            <li className="flex items-center gap-2">
                              <span className="text-lg text-[#28B554]">
                                <FaCheck />
                              </span>
                              Air conditioning
                            </li>
                            <li className="flex items-center gap-2">
                              <span className="text-lg text-[#28B554]">
                                <FaCheck />
                              </span>
                              Air conditioning
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
              <div className="py-2 px-4 w-full">
                <div className="flex flex-col gap-1.5">
                  <h4 className="text-secondary text-size-xl">Family Suite</h4>
                  <div className="flex sm:items-center justify-between text-four sm:flex-row flex-col items-start">
                    <div className="flex items-center gap-1">
                      <RiShape2Line className="text-secondary text-lg" />
                      <span>70 m2</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <IoBedOutline className="text-secondary text-lg" />
                      <span>1 Queen Bed</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <LuUsers className="text-secondary text-lg" />
                      <span>2 Guest</span>
                    </div>
                  </div>
                  <p className="text-four">
                    Air Conditioning • Airport Transport • Restaurant • 15 more
                  </p>
                </div>
                <div className="mt-2 flex items-center justify-between">
                  <Button
                    variant={"primary"}
                    size={"third"}
                    className="px-4 font-semibold lg:max-w-[170px] max-w-[120px] w-full"
                  >
                    <FaCheck className="text-third" />
                    Selected
                  </Button>
                  <div>
                    <span className="text-red-600 text-size-xl font-bold">
                      $240.00
                    </span>
                    <span className="text-four">/night</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 mt-4">
          <div className="w-full bg-seven">
            <div className="relative flex ">
              <img src={Room1} alt="room1" />
              <div className="absolute top-2 left-2 w-8 h-8 rounded-full bg-four flex justify-center items-center">
                <Dialog>
                  <DialogTrigger>
                    <FaImage className="text-third cursor-pointer" />
                  </DialogTrigger>
                  <DialogContent className="lg:max-w-[1200px] md:max-w-[900px] max-w-[90%]">
                    <DialogHeader>
                      <DialogTitle className="text-secondary text-size-3xl">
                        Standard Room
                      </DialogTitle>
                    </DialogHeader>
                    <div className="flex lg:h-[100%] h-screen gap-10 lg:flex-row flex-col overflow-auto">
                      <div className="lg:flex-[1_0_auto] flex-[0_0_100%] lg:max-w-[635px] w-[100%]">
                        <div className="flex justify-between items-center">
                          <div className="flex items-center gap-2">
                            <span className="line-through text-four">$600</span>
                            <span className="text-size-2xl text-red-700 font-bold">
                              $40.00
                            </span>
                            <span className="text-four">/night</span>
                          </div>
                          <div>
                            <Button
                              variant={"primary"}
                              size={"third"}
                              className="px-4 font-semibold"
                            >
                              Select room
                            </Button>
                          </div>
                        </div>
                        <div className="mt-4 h-[520px]">
                          <SwiperCom />
                        </div>
                      </div>
                      <div className="flex-[1_1_auto]">
                        <div className="flex items-center justify-between text-six">
                          <div className="flex items-center gap-1">
                            <RiShape2Line className="text-secondary text-lg" />
                            <span>70 m2</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <IoBedOutline className="text-secondary text-lg" />
                            <span>1 Queen Bed</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <LuUsers className="text-secondary text-lg" />
                            <span>2 Guest</span>
                          </div>
                        </div>
                        <div className="str-line" />
                        <div className="text-four">
                          <p>
                            This air-conditioned room features large windows and
                            a balcony with views of the city and sea. It
                            contains a sitting area, flat-screen TV, a fridge
                            and tea-and-coffee-making facilities. The bathroom
                            has a shower and toilet.
                          </p>
                          <p className="pt-4">
                            Maximum occupancy is 2 adults and 1 child under the
                            age of 2 years old in a crib. Please note that extra
                            beds cannot be accommodated in this room type.
                          </p>
                        </div>
                        <div className="str-line" />

                        <div className="">
                          <span className="text-secondary font-bold text-size-lg">
                            Room Facilities:
                          </span>
                          <ul className="text-four grid grid-cols-2 gap-2 mt-2">
                            <li className="flex items-center gap-2">
                              <span className="text-lg text-[#28B554]">
                                <FaCheck />
                              </span>
                              Air conditioning
                            </li>
                            <li className="flex items-center gap-2">
                              <span className="text-lg text-[#28B554]">
                                <FaCheck />
                              </span>
                              Air conditioning
                            </li>
                            <li className="flex items-center gap-2">
                              <span className="text-lg text-[#28B554]">
                                <FaCheck />
                              </span>
                              Air conditioning
                            </li>
                            <li className="flex items-center gap-2">
                              <span className="text-lg text-[#28B554]">
                                <FaCheck />
                              </span>
                              Air conditioning
                            </li>
                            <li className="flex items-center gap-2">
                              <span className="text-lg text-[#28B554]">
                                <FaCheck />
                              </span>
                              Air conditioning
                            </li>
                            <li className="flex items-center gap-2">
                              <span className="text-lg text-[#28B554]">
                                <FaCheck />
                              </span>
                              Air conditioning
                            </li>
                            <li className="flex items-center gap-2">
                              <span className="text-lg text-[#28B554]">
                                <FaCheck />
                              </span>
                              Air conditioning
                            </li>
                            <li className="flex items-center gap-2">
                              <span className="text-lg text-[#28B554]">
                                <FaCheck />
                              </span>
                              Air conditioning
                            </li>
                            <li className="flex items-center gap-2">
                              <span className="text-lg text-[#28B554]">
                                <FaCheck />
                              </span>
                              Air conditioning
                            </li>
                            <li className="flex items-center gap-2">
                              <span className="text-lg text-[#28B554]">
                                <FaCheck />
                              </span>
                              Air conditioning
                            </li>
                            <li className="flex items-center gap-2">
                              <span className="text-lg text-[#28B554]">
                                <FaCheck />
                              </span>
                              Air conditioning
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
              <div className="py-2 px-4 w-full">
                <div className="flex flex-col gap-1.5">
                  <h4 className="text-secondary text-size-xl">Family Suite</h4>
                  <div className="flex sm:items-center justify-between text-four sm:flex-row flex-col items-start">
                    <div className="flex items-center gap-1">
                      <RiShape2Line className="text-secondary text-lg" />
                      <span>70 m2</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <IoBedOutline className="text-secondary text-lg" />
                      <span>1 Queen Bed</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <LuUsers className="text-secondary text-lg" />
                      <span>2 Guest</span>
                    </div>
                  </div>
                  <p className="text-four">
                    Air Conditioning • Airport Transport • Restaurant • 15 more
                  </p>
                </div>
                <div className="mt-2 flex items-center justify-between">
                  <Button
                    variant={"eight"}
                    size={"third"}
                    className="px-4 font-semibold lg:max-w-[170px] max-w-[120px] w-full"
                  >
                    Out of Room
                  </Button>
                  <div>
                    <span className="text-red-600 text-size-xl font-bold">
                      $240.00
                    </span>
                    <span className="text-four">/night</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </TabsContent>
      <TabsContent value="descriptions">
        <div>
          <h4 className="text-size-xl font-semibold text-secondary">
            Overview
          </h4>
          <p className="mt-4 text-secondary">
            Set sail for the idyllic Italian island of Capri on this full-day
            tour, including round-trip jetfoil transfers from Naples or
            Sorrento. Stop to browse the handicraft stores of Anacapri and soak
            up the atmosphere in buzzing La Piazzetta. Top it off with a visit
            to the Blue Grotto and a funicular ride to Marina Grande.
          </p>
          <ul className="list-disc list-inside mt-6 flex flex-col gap-2 text-secondary">
            <li className="">
              Full-day tour of Capri island from Naples or Sorrento Admire views
              along the coast as you cruise to the island by jetfoil
            </li>
            <li>Visit the lively island towns of Anacapri and Capri Ride</li>
            <li>
              The funicular from La Piazzetta to Marina Grande Marvel at natural
              wonders like the Blue Grotto Small-group tour ensures a
              personalized experienc
            </li>
          </ul>
        </div>
        <div className="py-6">
          <div className="str-line " />
        </div>
        <div>
          <h4 className="text-size-xl font-semibold text-secondary">
            What is Included
          </h4>
          <ul className="flex  flex-col gap-2 mt-6 text-secondary">
            <li className="flex items-center gap-2">
              <IoCheckmarkSharp className="text-[#28B554]" />
              Port pickup and drop-off
            </li>
            <li className="flex items-center gap-2">
              <IoCheckmarkSharp className="text-[#28B554]" />
              Local guide
            </li>
            <li className="flex items-center gap-2">
              <IoCheckmarkSharp className="text-[#28B554]" />
              Local guide
            </li>
            <li className="flex items-center gap-2">
              <IoCheckmarkSharp className="text-[#28B554]" />
              Transport by minibus
            </li>
            <li className="flex items-center gap-2">
              <IoCheckmarkSharp className="text-[#28B554]" />
              Blue Grotto admission tickets
            </li>
            <li className="flex items-center gap-2">
              <IoCheckmarkSharp className="text-[#28B554]" />
              Shared boat ride tour around the island ( if Blue grotto is
              closed)
            </li>
          </ul>
        </div>
        <div className="py-6">
          <div className="str-line " />
        </div>
        <div>
          <h4 className="text-size-xl font-semibold text-secondary">
            Departure & Return
          </h4>
          <div className="flex flex-col gap-2 text-four mt-3">
            <span className="font-semibold">Departure Point</span>
            <span>1: Molo Beverello, 80133 Napoli NA, Italy</span>
            <span>
              2: Hotel Il Faro, Via Marina Piccola, 5, 80067 Sorrento NA, Italy
            </span>
          </div>
          <div className="flex flex-col gap-2 text-four mt-3">
            <span className="font-semibold">Departure Time</span>
            <span>8:00 AM</span>
          </div>
        </div>
        <div className="py-6">
          <div className="str-line " />
        </div>
        <div>
          <h4 className="text-size-xl font-semibold text-secondary">
            Departure & Return
          </h4>
          <div className="flex flex-col gap-4 mt-4">
            <AccordionCom
              title="Day 1: Molo Beverello (4 stops)"
              type="location"
              contents={[
                {
                  location: "Molo Beverello",
                  des: "We start our trip from the famouse place Jemaa Lefna in center of Marrakech, Crossed the highest Atlas Through pass (Tizi N Tichka)",
                  duration: "5 minutes ",
                  icon: FaMapMarkerAlt,
                },
                {
                  location: "Marina Piccola",
                  des: "so we will visit the UNESCO World Heritage Site Ait Benhaddou / Official name Ksar of Ait-Ben-Haddou is located in south of Morocco, It is an ighrem (fortified village in English) (ksar in Arabic), along the former caravan route between the Sahara and Marrakech in present-day Morocco. Most citizens attracted by the tourist trade live in more modern dwellings in a village on the other side of the river, although there are four families still living in the ancient village. Inside the walls of the ksar are half a dozen (Kasbahs) or merchants houses and other individual dwellings",
                  duration: "1 hour 30 minutes",
                  icon: FaMapMarkerAlt,
                },
                {
                  location: "Blue Grotto",
                  des: "Pass trough the Ait Saouen Col in anti atlas",
                  icon: FaMapMarkerAlt,
                },
                {
                  location: "Villa San Michele",
                  des: "Crossed by the Draa valley, where there is more than 2 million palms along the draa river which stretches for a length to Senegal to the south.",
                  icon: FaMapMarkerAlt,
                },
              ]}
            />
            <AccordionCom
              title="Day 2: Marina Piccola (1 stop)"
              type="location"
              contents={[
                {
                  location: "Molo Beverello",
                  des: "We start our trip from the famouse place Jemaa Lefna in center of Marrakech, Crossed the highest Atlas Through pass (Tizi N Tichka)",
                  duration: "5 minutes ",
                  icon: FaMapMarkerAlt,
                },
                {
                  location: "Marina Piccola",
                  des: "so we will visit the UNESCO World Heritage Site Ait Benhaddou / Official name Ksar of Ait-Ben-Haddou is located in south of Morocco, It is an ighrem (fortified village in English) (ksar in Arabic), along the former caravan route between the Sahara and Marrakech in present-day Morocco. Most citizens attracted by the tourist trade live in more modern dwellings in a village on the other side of the river, although there are four families still living in the ancient village. Inside the walls of the ksar are half a dozen (Kasbahs) or merchants houses and other individual dwellings",
                  duration: "1 hour 30 minutes",
                  icon: FaMapMarkerAlt,
                },
                {
                  location: "Blue Grotto",
                  des: "Pass trough the Ait Saouen Col in anti atlas",
                  icon: FaMapMarkerAlt,
                },
                {
                  location: "Villa San Michele",
                  des: "Crossed by the Draa valley, where there is more than 2 million palms along the draa river which stretches for a length to Senegal to the south.",
                  icon: FaMapMarkerAlt,
                },
              ]}
            />
            <AccordionCom
              title="Day 3: Marina Piccola (1 stop)"
              type="location"
              contents={[
                {
                  location: "Molo Beverello",
                  des: "We start our trip from the famouse place Jemaa Lefna in center of Marrakech, Crossed the highest Atlas Through pass (Tizi N Tichka)",
                  duration: "5 minutes ",
                  icon: FaMapMarkerAlt,
                },
                {
                  location: "Marina Piccola",
                  des: "so we will visit the UNESCO World Heritage Site Ait Benhaddou / Official name Ksar of Ait-Ben-Haddou is located in south of Morocco, It is an ighrem (fortified village in English) (ksar in Arabic), along the former caravan route between the Sahara and Marrakech in present-day Morocco. Most citizens attracted by the tourist trade live in more modern dwellings in a village on the other side of the river, although there are four families still living in the ancient village. Inside the walls of the ksar are half a dozen (Kasbahs) or merchants houses and other individual dwellings",
                  duration: "1 hour 30 minutes",
                  icon: FaMapMarkerAlt,
                },
                {
                  location: "Blue Grotto",
                  des: "Pass trough the Ait Saouen Col in anti atlas",
                  icon: FaMapMarkerAlt,
                },
                {
                  location: "Villa San Michele",
                  des: "Crossed by the Draa valley, where there is more than 2 million palms along the draa river which stretches for a length to Senegal to the south.",
                  icon: FaMapMarkerAlt,
                },
              ]}
            />
          </div>
        </div>
        <div className="py-6">
          <div className="str-line " />
        </div>
        <div>
          <h4 className="text-size-xl font-semibold text-secondary">Map</h4>
          <div className="mt-4">
            <img src={FullMap} alt="Workplace" className="w-full" />
            <map name="planetmap"></map>
          </div>
        </div>
        <div className="py-6">
          <div className="str-line " />
        </div>
        <div>
          <h4 className="text-size-xl font-semibold text-secondary">
            360° Panoramic Images and Videos
          </h4>
          <div className="mt-4">
            <img src={Tour1} alt="Workplace" className="w-full" />
            <map name="planetmap"></map>
          </div>
          <div className="mt-8">
            <img src={Tour2} alt="Workplace" className="w-full" />
            <map name="planetmap"></map>
          </div>
        </div>
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
