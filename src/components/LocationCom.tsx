import { FaMapMarkerAlt } from "react-icons/fa";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { TFunction } from "i18next";
import { memo } from "react";

interface Props {
  location: string;
  setLocation: (v: string) => void;
  t: TFunction<"search", undefined>;
  data: string[];
}

const LocationCom = ({ location, setLocation, t, data }: Props) => {
  return (
    <div className="group tran-fast bg-third w-full lg:h-[64px] md:h-[48px] h-[36px] flex items-center gap-4 p-6 hover:bg-primary">
      <FaMapMarkerAlt className="text-primary text-size-lg group-hover:text-third" />
      <Select
        defaultValue={location}
        onValueChange={(v) => {
          setLocation(v);
        }}
      >
        <SelectTrigger className="w-full group-hover:text-third ">
          <SelectValue placeholder={t("tour.location")} />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {data.map((v, index) => (
              <SelectItem value={v} key={index}>
                {v.length < 2 ? "All" : v}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

export default memo(LocationCom);
