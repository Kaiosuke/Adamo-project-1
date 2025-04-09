import Room1 from "@/assets/images/room-1.png";
import SwiperCom from "@/components/SwiperCom";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { FaCheck, FaImage } from "react-icons/fa6";
import { IoBedOutline } from "react-icons/io5";
import { LuUsers } from "react-icons/lu";
import { RiShape2Line } from "react-icons/ri";

const SelectRoom = () => {
  return (
    <>
      <h3 className="text-secondary text-size-xl font-extrabold">Rooms</h3>
      <div className="flex flex-col gap-4 mt-4">
        <div className="w-full bg-seven">
          <div className="relative flex md:flex-row flex-col">
            <img src={Room1} alt="room1" />
            <div className="absolute top-2 left-2 w-8 h-8 rounded-full bg-four flex justify-center items-center">
              <Dialog>
                <DialogTrigger>
                  <FaImage className="text-third cursor-pointer" />
                </DialogTrigger>
                <DialogContent className="lg:max-w-[1200px] md:max-w-[900px] max-w-[90%] h-[90%]">
                  <DialogHeader>
                    <DialogTitle className="text-secondary text-size-3xl px-6 pt-6 ">
                      Standard Room
                    </DialogTitle>
                  </DialogHeader>

                  <div className="flex gap-10 lg:flex-row flex-col overflow-auto px-6 pb-6">
                    <div className="lg:flex-[1_0_auto] flex-[0_0_100%] lg:max-w-[635px] w-full">
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
                          This air-conditioned room features large windows and a
                          balcony with views of the city and sea. It contains a
                          sitting area, flat-screen TV, a fridge and
                          tea-and-coffee-making facilities. The bathroom has a
                          shower and toilet.
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
                          This air-conditioned room features large windows and a
                          balcony with views of the city and sea. It contains a
                          sitting area, flat-screen TV, a fridge and
                          tea-and-coffee-making facilities. The bathroom has a
                          shower and toilet.
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
                          This air-conditioned room features large windows and a
                          balcony with views of the city and sea. It contains a
                          sitting area, flat-screen TV, a fridge and
                          tea-and-coffee-making facilities. The bathroom has a
                          shower and toilet.
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
    </>
  );
};

export default SelectRoom;
