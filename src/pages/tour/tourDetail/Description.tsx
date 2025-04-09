import AccordionCom from "@/components/AccordionCom";
import { IoCheckmarkSharp } from "react-icons/io5";
import { FaMapMarkerAlt } from "react-icons/fa";
import Map from "@/components/Map";
import Viewer360 from "@/components/Viewer360";
import Video from "@/assets/videos/dog.mp4";

const Description = () => {
  return (
    <>
      <div>
        <h4 className="text-size-xl font-semibold text-secondary">Overview</h4>
        <p className="mt-4 text-secondary">
          Set sail for the idyllic Italian island of Capri on this full-day
          tour, including round-trip jetfoil transfers from Naples or Sorrento.
          Stop to browse the handicraft stores of Anacapri and soak up the
          atmosphere in buzzing La Piazzetta. Top it off with a visit to the
          Blue Grotto and a funicular ride to Marina Grande.
        </p>
        <ul className="list-disc list-inside mt-6 flex flex-col gap-2 text-secondary">
          <li className="">
            Full-day tour of Capri island from Naples or Sorrento Admire views
            along the coast as you cruise to the island by jetfoil
          </li>
          <li>Visit the lively island towns of Anacapri and Capri Ride</li>
          <li>
            The funicular from La Piazzetta to Marina Grande Marvel at natural
            wonders like the Blue Grotto Small-group tour ensures a personalized
            experienc
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
            Shared boat ride tour around the island ( if Blue grotto is closed)
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
          <Map />
        </div>
      </div>
      <div className="py-6">
        <div className="str-line " />
      </div>
      <div className="h-full">
        <h4 className="text-size-xl font-semibold text-secondary">
          360° Panoramic Images and Videos
        </h4>
        <div className="mt-4 h-[400px]">
          <Viewer360 />
        </div>
        <div className="mt-8 h-[400px] w-full">
          <iframe
            className="aspect-video md:aspect-square w-full h-full"
            src={Video}
          />
        </div>
      </div>
    </>
  );
};

export default Description;
