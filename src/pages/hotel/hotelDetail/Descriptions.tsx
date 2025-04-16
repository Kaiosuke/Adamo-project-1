import Map from "@/components/MapCom";
import { Button } from "@/components/ui/button";
import { handleSeparateWord } from "@/helper";
import { IHotel } from "@/interfaces/hotel";

import { IoCheckmarkSharp } from "react-icons/io5";

const Descriptions = ({ data }: { data: IHotel }) => {
  return (
    <>
      <div>
        <h4 className="text-size-xl text-secondary">Overview</h4>
        <div className="mt-4 text-secondary">
          {data.description.overview.description &&
            handleSeparateWord(data.description.overview.description).map(
              (v, index) => (
                <p key={index} className="mt-4">
                  {v}
                </p>
              )
            )}
        </div>
      </div>
      <div className="py-6">
        <div className="str-line " />
      </div>
      <div>
        <h4 className="text-size-xl text-secondary">Hotel Amenities</h4>
        <ul className="grid grid-cols-2 gap-2 mt-6 text-secondary">
          {data.description.amenities.map((v, index) => (
            <li className="flex items-center gap-2" key={index}>
              <IoCheckmarkSharp className="text-[#28B554]" />
              {v}
            </li>
          ))}
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
              {data.description.rules.checkIn}
            </Button>
          </div>
          <div className="font-bold">
            <div className="text-primary">Checkout</div>
            <Button
              variant={"seven"}
              className=" md:w-[270px] w-[200px] rounded-lg px-4 cursor-auto mt-2"
            >
              {data.description.rules.checkOut}
            </Button>
          </div>
        </div>
        <ul className="flex flex-col gap-2 list-disc ml-4 text-secondary mt-8">
          {data.description.rules.information.map((v, index) => (
            <li key={index}>{v} </li>
          ))}
        </ul>
      </div>
      <div className="py-6">
        <div className="str-line " />
      </div>

      <div>
        <h4 className="text-size-xl text-secondary">Map</h4>
        <div className="mt-4">
          <Map coordinates={data.description.maps} />
        </div>
      </div>
      <div className="py-6">
        <div className="str-line " />
      </div>
    </>
  );
};

export default Descriptions;
