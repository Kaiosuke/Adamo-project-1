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
import { LuUsers } from "react-icons/lu";

interface Props {
  guest: string;
  setGuest: (v: string) => void;
  t: TFunction<"search", undefined>;
  data: string[];
}

const GuestCom = ({ guest, setGuest, t, data }: Props) => {
  return (
    <div className="group tran-fast bg-third w-full lg:h-[64px] md:h-[48px] h-[36px] flex items-center gap-4 p-6 hover:bg-primary">
      <LuUsers className="text-primary text-size-lg group-hover:text-third" />
      <Select defaultValue={guest} onValueChange={(v) => setGuest(v)}>
        <SelectTrigger className="w-full group-hover:text-third">
          <SelectValue placeholder={t("tour.guest")} />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {data.length &&
              data.map((v, index) => (
                <SelectItem value={v} key={index}>
                  {v}
                </SelectItem>
              ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

export default memo(GuestCom);
