import Map from "@/components/Map";
import { Button } from "@/components/ui/button";
import { IoCheckmarkSharp } from "react-icons/io5";

const Descriptions = () => {
  return (
    <>
      <div>
        <h4 className="text-size-xl text-secondary">Overview</h4>
        <p className="mt-4 text-secondary">
          Opposite Durban’s famous beachfront, Blue Waters Hotel is within
          walking distance of the Suncoast Casino and the iconic Moses Mabhida
          Stadium. Both uShaka Marine World and Greyville Racecourse are within
          2.5 mi from the property. <br />
          <br />
          The spacious rooms and suites feature LCD TVs along with
          coffee-and-tea-making facilities. Each is equipped with air
          conditioning and a work desk. There is also plenty of luggage storage
          space. Most rooms come with furnished balconies and offer a view of
          the Indian Ocean. Guests at Blue Waters can enjoy afternoon tea and
          cake in the Florida Lounge overlooking the ocean. The Versailles
          Restaurant provides buffet and á la carte service for lunch and
          dinner. <br />
          <br />
          Leisure facilities at the Hotel Blue Waters include an indoor swimming
          pool, sauna and a squash court. There is also an outdoor rooftop
          swimming pool and guests can enjoy drinks with sunset views at the
          rooftop bar. <br />
          <br />
          The Durban North Beach area is a good location for walking, running
          and cycling. Hotel Blue Waters is 5 minutes’ drive from the Durban ICC
          and 10 minutes’ drive from Durban’s city center. Durban Station is 1.2
          mi away, while King Shaka International Airport is 19 mi from the
          property. <br />
          <br />
          Couples in particular like the location – they rated it 9.1 for a
          two-person trip. We speak your language!
        </p>
      </div>
      <div className="py-6">
        <div className="str-line " />
      </div>
      <div>
        <h4 className="text-size-xl text-secondary">Hotel Amenities</h4>
        <ul className="grid grid-cols-2  mt-6 text-secondary">
          <li className="flex items-center gap-2">
            <IoCheckmarkSharp className="text-[#28B554]" />
            Air conditioning
          </li>
          <li className="flex items-center gap-2">
            <IoCheckmarkSharp className="text-[#28B554]" />
            Private Bathroom
          </li>
          <li className="flex items-center gap-2">
            <IoCheckmarkSharp className="text-[#28B554]" />
            Free WiFi
          </li>
          <li className="flex items-center gap-2">
            <IoCheckmarkSharp className="text-[#28B554]" />
            Free toiletries
          </li>
          <li className="flex items-center gap-2">
            <IoCheckmarkSharp className="text-[#28B554]" />
            Shower
          </li>
          <li className="flex items-center gap-2">
            <IoCheckmarkSharp className="text-[#28B554]" />
            Air conditioning
          </li>
          <li className="flex items-center gap-2">
            <IoCheckmarkSharp className="text-[#28B554]" />
            Private Bathroom
          </li>
          <li className="flex items-center gap-2">
            <IoCheckmarkSharp className="text-[#28B554]" />
            Free WiFi
          </li>
          <li className="flex items-center gap-2">
            <IoCheckmarkSharp className="text-[#28B554]" />
            Free toiletries
          </li>
          <li className="flex items-center gap-2">
            <IoCheckmarkSharp className="text-[#28B554]" />
            Shower
          </li>
        </ul>
      </div>
      <div className="py-6">
        <div className="str-line " />
      </div>
      <div>
        <h4 className="text-size-xl text-secondary ">Rules</h4>
        <div className="mt-2 flex gap-8">
          <div className="font-bold">
            <div className="text-primary">Checkin</div>
            <Button
              variant={"seven"}
              className=" md:w-[270px] w-[200px] rounded-lg px-4 cursor-auto mt-2"
            >
              02:00 pm
            </Button>
          </div>
          <div className="font-bold">
            <div className="text-primary">Checkout</div>
            <Button
              variant={"seven"}
              className=" md:w-[270px] w-[200px] rounded-lg px-4 cursor-auto mt-2"
            >
              12:00 am
            </Button>
          </div>
        </div>
        <ul className="flex flex-col gap-2 list-disc ml-4 text-secondary mt-8">
          <li>Confirmation will be received at time of booking </li>
          <li>Not recommended for travelers with back problems </li>
          <li>Not recommended for pregnant travelers Infant seats available</li>
          <li>Not wheelchair accessible </li>
          <li>Children must be accompanied by an adult </li>
          <li>
            Vegetarian option is available, please advise at time of booking if
            required
          </li>
          <li>Minimum numbers apply. </li>
          <li>
            There is a possibility of cancellation after confirmation if the
            meteorological
          </li>
          <li>Conditions do not allow it </li>
          <li>Stroller accessible </li>
          <li>Service animals allowed </li>
          <li>Near public transportation </li>
          <li>Most travelers can participate </li>
          <li>Service animals allowed </li>
          <li>This tour/activity will have a maximum of 17 travelers </li>
        </ul>
      </div>
      <div className="py-6">
        <div className="str-line " />
      </div>

      <div>
        <h4 className="text-size-xl text-secondary">Map</h4>
        <div className="mt-4">
          <Map />
        </div>
      </div>
      <div className="py-6">
        <div className="str-line " />
      </div>
    </>
  );
};

export default Descriptions;
