import { Checkbox } from "@/components/ui/checkbox";
import { tourSelector } from "@/redux/selectors/tourSelector";
import { memo } from "react";
import { useSelector } from "react-redux";

interface Props {
  onCheckChangeType: (checked: boolean, v: string) => void;
  typeTour: string[];
}

const TourType = ({ typeTour, onCheckChangeType }: Props) => {
  const { types } = useSelector(tourSelector);

  return (
    <div>
      <span className="text-secondary font-bold">Type of Tours</span>
      <div className="flex flex-col">
        {types.map((v, index) => (
          <div className="mt-4 flex items-center gap-2" key={index}>
            <Checkbox
              id={v}
              checked={typeTour.includes(v)}
              onCheckedChange={(checked) =>
                onCheckChangeType(Boolean(checked), v)
              }
            />
            <label
              htmlFor={v}
              className="text-sm text-secondary leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              {v}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default memo(TourType);
