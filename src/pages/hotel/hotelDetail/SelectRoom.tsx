import { getAllRoom } from "@/api/roomRequest";

import { useQuery } from "@tanstack/react-query";
import Room from "./Room";

const SelectRoom = () => {
  const { data } = useQuery({
    queryKey: ["rooms"],
    queryFn: () => getAllRoom(),
  });

  return (
    <>
      <h3 className="text-secondary text-size-xl font-extrabold">Rooms</h3>
      {data?.length && data.map((room) => <Room key={room.id} room={room} />)}
    </>
  );
};

export default SelectRoom;
