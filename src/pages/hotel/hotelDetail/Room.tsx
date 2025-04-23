import { changeStatusRoom } from "@/api/roomRequest";
import LoadedImageWidth from "@/components/LoadingList/LoadedImageWidth";
import SwiperCom from "@/components/swiper/SwiperCom";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { handleFormatMoney, handleSeparateWord } from "@/helper";
import { IRoom } from "@/interfaces/room";
import { addRoom, deleteRoom } from "@/redux/slices/roomsSlice";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { memo } from "react";
import { FaCheck, FaImage } from "react-icons/fa6";
import { IoBedOutline } from "react-icons/io5";
import { LuUsers } from "react-icons/lu";
import { RiShape2Line } from "react-icons/ri";

import { useDispatch } from "react-redux";
import { toast } from "sonner";
import { useDebouncedCallback } from "use-debounce";

const Room = ({ room }: { room: IRoom }) => {
  const dispatch = useDispatch();

  const queryClient = useQueryClient();

  const handleAddRoom = useDebouncedCallback((room: IRoom) => {
    const roomData = {
      data: room,
      quantity: 1,
    };
    dispatch(addRoom(roomData));
  }, 300);

  const handleDeleteRoom = useDebouncedCallback((room: IRoom) => {
    dispatch(deleteRoom(room));
  }, 300);

  const handleChangeStatus = useDebouncedCallback(
    (roomId: number, status: boolean) => {
      changeStatusMutation.mutate({ roomId, status });
    },
    300
  );

  const changeStatusMutation = useMutation({
    mutationFn: ({ roomId, status }: { roomId: number; status: boolean }) =>
      changeStatusRoom(roomId, status),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["rooms"] });
      toast.success("Successfully", {
        style: {
          backgroundColor: "#4caf50",
          color: "#ffffff",
        },
      });
    },
  });

  console.log("room");

  return (
    <div className="flex flex-col gap-4 mt-4" key={room.id}>
      <div className="w-full bg-seven">
        <div className="relative flex md:flex-row flex-col">
          <div className="w-[200px]">
            <LoadedImageWidth alt={room.type} thumbnail={room.thumbnail} />
          </div>

          <div className="absolute top-2 left-2 w-8 h-8 rounded-full bg-four flex justify-center items-center ">
            <Dialog>
              <DialogTrigger>
                <FaImage className="text-third cursor-pointer" />
              </DialogTrigger>
              <DialogContent className="lg:max-w-[1200px] md:max-w-[900px] max-w-[90%] h-[90%] pb-6">
                <DialogHeader>
                  <DialogTitle className="text-secondary text-size-3xl px-6 pt-6 ">
                    {room.type}
                  </DialogTitle>
                </DialogHeader>

                <div className="flex gap-10 lg:flex-row flex-col overflow-auto px-6">
                  <div className="lg:flex-[1_0_auto] flex-[0_0_100%] lg:max-w-[635px] w-full">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <span className="line-through text-four">
                          {handleFormatMoney(room.price * 0.1 + room.price)}
                        </span>
                        <span className="text-size-2xl text-red-700 font-bold">
                          {handleFormatMoney(room.price)}
                        </span>
                        <span className="text-four">/night</span>
                      </div>
                      <div>
                        {room.quantity < 1 ? (
                          <Button
                            variant={"eight"}
                            size={"third"}
                            className="px-4 font-semibold lg:max-w-[170px] max-w-[120px] w-full cursor-not-allowed"
                          >
                            Out of Room
                          </Button>
                        ) : !room.status ? (
                          <div>
                            <Button
                              variant={"outline"}
                              size={"third"}
                              type="button"
                              className="px-4 font-semibold lg:max-w-[170px] max-w-[120px] w-full"
                              onClick={() => {
                                handleAddRoom(room);
                                handleChangeStatus(room.id, true);
                              }}
                            >
                              Select room
                            </Button>
                          </div>
                        ) : (
                          <Button
                            variant={"primary"}
                            size={"third"}
                            type="button"
                            className="px-4 font-semibold lg:max-w-[170px] max-w-[120px] w-full"
                            onClick={() => {
                              handleDeleteRoom(room);
                              handleChangeStatus(room.id, false);
                            }}
                          >
                            <FaCheck className="text-third" />
                            Selected
                          </Button>
                        )}
                      </div>
                    </div>
                    <div className="mt-4 h-[520px]">
                      <SwiperCom images={room.images} />
                    </div>
                  </div>
                  <div className="flex-[1_1_auto]">
                    <div className="flex items-center justify-between text-six">
                      <div className="flex items-center gap-1">
                        <RiShape2Line className="text-secondary text-lg" />
                        <span> {handleFormatMoney(room.price)}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <IoBedOutline className="text-secondary text-lg" />
                        <span>{room.beds}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <LuUsers className="text-secondary text-lg" />
                        <span>{room.capacity}</span>
                      </div>
                    </div>
                    <div className="str-line" />
                    <div className="text-four ">
                      {handleSeparateWord(room.description).map((v, index) => (
                        <p key={index} className="mt-4">
                          {v}
                        </p>
                      ))}
                    </div>
                    <div className="str-line" />

                    <div className="">
                      <span className="text-secondary font-bold text-size-lg">
                        Room Facilities:
                      </span>
                      <ul className="text-four grid grid-cols-2 gap-2 mt-2">
                        {room.features.map((v, index) => (
                          <li className="flex items-center gap-2" key={index}>
                            <span className="text-lg text-[#28B554]">
                              <FaCheck />
                            </span>
                            {v}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>
          <div className="py-2 px-4 w-full">
            <div className="flex flex-col gap-1.5">
              <h4 className="text-secondary text-size-xl">{room.type}</h4>
              <div className="flex sm:items-center justify-between text-four sm:flex-row flex-col items-start">
                <div className="flex items-center gap-1">
                  <RiShape2Line className="text-secondary text-lg" />
                  <span>{room.square}</span>
                </div>
                <div className="flex items-center gap-1">
                  <IoBedOutline className="text-secondary text-lg" />
                  <span>{room.beds}</span>
                </div>
                <div className="flex items-center gap-1">
                  <LuUsers className="text-secondary text-lg" />
                  <span>{room.capacity} Guest</span>
                </div>
              </div>
              <p className="text-four">
                Air Conditioning • Airport Transport • Restaurant • 15 more
              </p>
            </div>
            <div className="mt-2 flex items-center justify-between">
              {room.quantity < 1 ? (
                <Button
                  variant={"eight"}
                  size={"third"}
                  className="px-4 font-semibold lg:max-w-[170px] max-w-[120px] w-full cursor-not-allowed"
                >
                  Out of Room
                </Button>
              ) : !room.status ? (
                <div>
                  <Button
                    variant={"outline"}
                    size={"third"}
                    type="button"
                    className="px-4 font-semibold lg:max-w-[170px] max-w-[120px] w-full"
                    onClick={() => {
                      handleAddRoom(room);
                      handleChangeStatus(room.id, true);
                    }}
                  >
                    Select room
                  </Button>
                </div>
              ) : (
                <Button
                  variant={"primary"}
                  size={"third"}
                  type="button"
                  className="px-4 font-semibold lg:max-w-[170px] max-w-[120px] w-full"
                  onClick={() => {
                    handleDeleteRoom(room);
                    handleChangeStatus(room.id, false);
                  }}
                >
                  <FaCheck className="text-third" />
                  Selected
                </Button>
              )}

              <div>
                <span className="text-red-600 text-size-xl font-bold">
                  {handleFormatMoney(room.price)}
                </span>
                <span className="text-four">/night</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(Room);
