import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { tourSelector } from "@/redux/selectors/tourSelector";
import { memo } from "react";
import { useSelector } from "react-redux";

interface Props {
  durationTour: string;
  onValueChange: (v: string) => void;
}

const TourDuration = ({ durationTour, onValueChange }: Props) => {
  const { durations } = useSelector(tourSelector);

  return (
    <div>
      <span className="text-secondary font-bold">Duration</span>
      <div className="mt-4">
        <RadioGroup value={durationTour} onValueChange={onValueChange}>
          {durations.map((v, index) => (
            <div className="flex items-center space-x-2" key={index}>
              <RadioGroupItem
                value={v.time}
                id={v.time}
                className="rounded-sm"
              />
              <Label htmlFor={v.time}>{v.title}</Label>
            </div>
          ))}
        </RadioGroup>
      </div>
    </div>
  );
};

export default memo(TourDuration);
