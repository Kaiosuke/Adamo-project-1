import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

import { Label } from "@/components/ui/label";
import { memo } from "react";
const scoreList = [
  {
    title: "Wonderful : 9.5+",
    score: "9.5",
  },
  {
    title: "Very Good : 9+",
    score: "9",
  },
  {
    title: "Good : 8+",
    score: "8",
  },
  {
    title: "Pleasant : 7+",
    score: "7",
  },
];

interface Props {
  score: string;
  onValueChange: (v: string) => void;
}

const HotelScore = ({ score, onValueChange }: Props) => {
  return (
    <>
      <span className="text-secondary font-bold">Review Score</span>
      <div className="mt-4">
        <RadioGroup value={score} onValueChange={onValueChange}>
          {scoreList.map((v, index) => (
            <div className="mt-4 flex items-center gap-2" key={index}>
              <RadioGroupItem
                value={v.score}
                id={v.title}
                className="rounded-sm"
              />

              <Label
                htmlFor={v.title}
                className="text-sm text-secondary leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                {v.title}
              </Label>
            </div>
          ))}
        </RadioGroup>
      </div>
    </>
  );
};

export default memo(HotelScore);
