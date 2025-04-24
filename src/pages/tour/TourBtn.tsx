import { Button } from "@/components/ui/button";
import { memo } from "react";

interface Props {
  onFilter: () => void;
}

const TourBtn = ({ onFilter }: Props) => {
  return (
    <div className="py-4">
      <Button
        variant={"primary"}
        size={"third"}
        className="h-[48px]"
        onClick={onFilter}
      >
        Apply Filter
      </Button>
    </div>
  );
};

export default memo(TourBtn);
