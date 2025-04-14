import { useState } from "react";
import { Skeleton } from "../ui/skeleton";

const LoadedImage = ({
  thumbnail,
  alt,
}: {
  thumbnail: string;
  alt: string;
}) => {
  const [isLoaded, setIsdLoaded] = useState(false);

  return (
    <div className="overflow-hidden">
      {!isLoaded && <Skeleton className="w-[350px] h-[264px]" />}

      <img
        src={thumbnail}
        alt={alt}
        onLoad={() => setIsdLoaded(true)}
        className={`object-cover w-full hover:scale-125 tran-fast tran-fast ${
          isLoaded ? "block" : "hidden"
        }`}
      />
    </div>
  );
};

export default LoadedImage;
