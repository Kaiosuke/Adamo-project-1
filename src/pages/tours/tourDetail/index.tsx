import BreadcrumbCom from "@/components/Breadcrumb";
import PdSub from "@/components/PdSub";
// import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CiLocationOn } from "react-icons/ci";
import { IoCheckmarkSharp } from "react-icons/io5";
import { MdOutlineStar } from "react-icons/md";
import TourDetailMain from "./TourDetailMain";
import AccordionCom from "@/components/AccordionCom";
import DatePickerWithRange from "@/components/DatePickerWithRange";
import { GoPeople } from "react-icons/go";
import { Button } from "@/components/ui/button";

const TourDetail = () => {
  return (
    <>
      <PdSub />
      <PdSub />
      <BreadcrumbCom
        current="Detail Tour"
        links={[
          { href: "/", title: "Home" },
          { href: "tours", title: "Detail tour" },
        ]}
      />
      <PdSub />

      <section className="main-container">
        <h1 className="text-size-4xl text-secondary">
          Discover interesting things in the romantic <br /> coastal city of
          Vungtau
        </h1>
        <div className="lg:mt-6 mg-4 flex items-center gap-2">
          <CiLocationOn className="text-primary text-size-xl" />
          <span className="text-four text-size-base">
            Vungtau City, Baria-Vungtau
          </span>
        </div>

        <div className="lg:mt-6 mt-4 flex items-center gap-6">
          <div className="w-[65px] h-[30px] text-third bg-primary flex items-center justify-center">
            <MdOutlineStar />
            4.5
          </div>
          <span className="text-four">128 Reviews</span>
        </div>
        <div className="flex 2xl:gap-20 gap-10 lg:mt-8 mt-6  flex-wrap">
          <div className="flex-[0_0_auto] max-w-[635px] w-full md:pr-0 pr-4">
            <div className="h-[680px] ">
              <TourDetailMain />
            </div>
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
                  Reviews
                </TabsTrigger>
              </TabsList>
              <div className="str-line" />
              <TabsContent value="descriptions">
                <div>
                  <h4 className="text-size-xl font-semibold text-secondary">
                    Overview
                  </h4>
                  <p className="mt-4 text-secondary">
                    Set sail for the idyllic Italian island of Capri on this
                    full-day tour, including round-trip jetfoil transfers from
                    Naples or Sorrento. Stop to browse the handicraft stores of
                    Anacapri and soak up the atmosphere in buzzing La Piazzetta.
                    Top it off with a visit to the Blue Grotto and a funicular
                    ride to Marina Grande.
                  </p>
                  <ul className="list-disc list-inside mt-6 flex flex-col gap-2 text-secondary">
                    <li className="">
                      Full-day tour of Capri island from Naples or Sorrento
                      Admire views along the coast as you cruise to the island
                      by jetfoil
                    </li>
                    <li>
                      Visit the lively island towns of Anacapri and Capri Ride
                    </li>
                    <li>
                      The funicular from La Piazzetta to Marina Grande Marvel at
                      natural wonders like the Blue Grotto Small-group tour
                      ensures a personalized experienc
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
                      Shared boat ride tour around the island ( if Blue grotto
                      is closed)
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
                      2: Hotel Il Faro, Via Marina Piccola, 5, 80067 Sorrento
                      NA, Italy
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
                      contents={[
                        {
                          location: "Molo Beverello",
                          des: "We start our trip from the famouse place Jemaa Lefna in center of Marrakech, Crossed the highest Atlas Through pass (Tizi N Tichka)",
                          duration: "5 minutes ",
                        },
                        {
                          location: "Marina Piccola",
                          des: "so we will visit the UNESCO World Heritage Site Ait Benhaddou / Official name Ksar of Ait-Ben-Haddou is located in south of Morocco, It is an ighrem (fortified village in English) (ksar in Arabic), along the former caravan route between the Sahara and Marrakech in present-day Morocco. Most citizens attracted by the tourist trade live in more modern dwellings in a village on the other side of the river, although there are four families still living in the ancient village. Inside the walls of the ksar are half a dozen (Kasbahs) or merchants houses and other individual dwellings",
                          duration: "1 hour 30 minutes",
                        },
                        {
                          location: "Blue Grotto",
                          des: "Pass trough the Ait Saouen Col in anti atlas",
                        },
                        {
                          location: "Villa San Michele",
                          des: "Crossed by the Draa valley, where there is more than 2 million palms along the draa river which stretches for a length to Senegal to the south.",
                        },
                      ]}
                    />
                    <AccordionCom
                      title="Day 2: Marina Piccola (1 stop)"
                      contents={[
                        {
                          location: "Molo Beverello",
                          des: "We start our trip from the famouse place Jemaa Lefna in center of Marrakech, Crossed the highest Atlas Through pass (Tizi N Tichka)",
                          duration: "5 minutes ",
                        },
                        {
                          location: "Marina Piccola",
                          des: "so we will visit the UNESCO World Heritage Site Ait Benhaddou / Official name Ksar of Ait-Ben-Haddou is located in south of Morocco, It is an ighrem (fortified village in English) (ksar in Arabic), along the former caravan route between the Sahara and Marrakech in present-day Morocco. Most citizens attracted by the tourist trade live in more modern dwellings in a village on the other side of the river, although there are four families still living in the ancient village. Inside the walls of the ksar are half a dozen (Kasbahs) or merchants houses and other individual dwellings",
                          duration: "1 hour 30 minutes",
                        },
                        {
                          location: "Blue Grotto",
                          des: "Pass trough the Ait Saouen Col in anti atlas",
                        },
                        {
                          location: "Villa San Michele",
                          des: "Crossed by the Draa valley, where there is more than 2 million palms along the draa river which stretches for a length to Senegal to the south.",
                        },
                      ]}
                    />
                    <AccordionCom
                      title="Day 3: Marina Piccola (1 stop)"
                      contents={[
                        {
                          location: "Molo Beverello",
                          des: "We start our trip from the famouse place Jemaa Lefna in center of Marrakech, Crossed the highest Atlas Through pass (Tizi N Tichka)",
                          duration: "5 minutes ",
                        },
                        {
                          location: "Marina Piccola",
                          des: "so we will visit the UNESCO World Heritage Site Ait Benhaddou / Official name Ksar of Ait-Ben-Haddou is located in south of Morocco, It is an ighrem (fortified village in English) (ksar in Arabic), along the former caravan route between the Sahara and Marrakech in present-day Morocco. Most citizens attracted by the tourist trade live in more modern dwellings in a village on the other side of the river, although there are four families still living in the ancient village. Inside the walls of the ksar are half a dozen (Kasbahs) or merchants houses and other individual dwellings",
                          duration: "1 hour 30 minutes",
                        },
                        {
                          location: "Blue Grotto",
                          des: "Pass trough the Ait Saouen Col in anti atlas",
                        },
                        {
                          location: "Villa San Michele",
                          des: "Crossed by the Draa valley, where there is more than 2 million palms along the draa river which stretches for a length to Senegal to the south.",
                        },
                      ]}
                    />
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="additional">
                Change your password here.
              </TabsContent>
              <TabsContent value="reviews">
                Change your password here.
              </TabsContent>
            </Tabs>
          </div>

          <div className="flex-[0_0_auto] max-w-[380px] w-full h-fit">
            <div className="w-full h-full bg-seven">
              <div className="lg:p-8 p-4 flex gap-2 items-end">
                <span className="text-four">from</span>
                <span className="text-secondary text-size-xl font-semibold">
                  $234.00
                </span>
              </div>
              <div className="h-[1px] w-full bg-four opacity-50" />
              <div className="lg:p-8 p-4 flex flex-col gap-6">
                <div className="flex gap-10">
                  <div>
                    <div className="text-four">Duration:</div>
                    <div className="font-semibold text-secondary">
                      3 days - 2 nights
                    </div>
                  </div>
                  <div>
                    <div className="text-four">Tour type:</div>
                    <div className="font-semibold text-secondary">
                      Sun - Beach
                    </div>
                  </div>
                </div>
                <div className="">
                  <DatePickerWithRange />
                </div>
                <div className="w-full h-[64px] bg-third py-2 pl-3 flex items-center gap-4">
                  <GoPeople className="text-primary" />
                  <div className="text-secondary">2 Adults - 1 Children</div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-secondary">Total</span>
                  <span className="text-secondary font-semibold">$450.00</span>
                </div>
                <div className="mt-4">
                  <Button variant={"primary"}>Book now</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TourDetail;
