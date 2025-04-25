import { useEffect, useRef, useState } from "react";

import { Input } from "@/components/ui/input";

import { IHotel } from "@/interfaces/hotel";
import { ITour } from "@/interfaces/tour";

interface Props {
  location: string;
  setLocation: (v: string) => void;
  locationData?: ITour[] | IHotel[];
  placeHolder?: string;
}

const InputSearch = ({
  location,
  setLocation,
  locationData,
  placeHolder = "",
}: Props) => {
  const [showResult, setShowResult] = useState(false);

  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setShowResult(false);
      }
    };

    window.addEventListener("mousedown", handleMouse);

    return () => {
      window.removeEventListener("mousedown", handleMouse);
    };
  }, []);

  return (
    <div className="bg-third w-full lg:h-[64px] md:h-[48px] h-[36px]">
      <Input
        value={location}
        placeholder={placeHolder}
        onClick={() => {
          setShowResult(true);
        }}
        onChange={(e) => {
          setLocation(e.target.value);
          setShowResult(true);
        }}
        className="border-none h-full w-full rounded-none placeholder:text-five tex-size-xl"
      />
      {showResult && locationData && (
        <div
          className="w-full p-4 max-h-[140px] h-fit bg-third text-secondary flex flex-col gap-2 relative z-[10] overflow-auto"
          ref={ref}
        >
          {locationData.length > 0 ? (
            <>
              {locationData?.map((v) => (
                <div
                  key={v.id}
                  className="cursor-pointer hover:text-primary tran-fast"
                  onClick={() => {
                    setLocation(v.location);
                    setShowResult(false);
                  }}
                >
                  {v.location}
                </div>
              ))}
            </>
          ) : (
            <div>Not found location</div>
          )}
        </div>
      )}
    </div>
  );
};

export default InputSearch;
