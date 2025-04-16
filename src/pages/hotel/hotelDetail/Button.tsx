import { Button } from "@/components/ui/button";

const ButtonCom = ({
  room,
  handleChangeStatus,
}: {
  room: any;
  handleChangeStatus: any;
}) => {
  return (
    <div>
      <Button
        variant={"outline"}
        size={"third"}
        type="button"
        className="px-4 font-semibold lg:max-w-[170px] max-w-[120px] w-full"
        onClick={() => {
          handleChangeStatus(room.id, true);
        }}
      >
        Select room
      </Button>
    </div>
  );
};

export default ButtonCom;
