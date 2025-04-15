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
    <div className="overflow-hidden relative w-full h-full rounded-none aspect-3/2 object-cover">
      {!isLoaded && (
        <Skeleton className="absolute inset-0 z-[1] rounded-none w-full h-full" />
      )}

      <img
        src={thumbnail}
        alt={alt}
        onLoad={() => setIsdLoaded(true)}
        className={`object-cover w-full hover:scale-125 tran-fast ${
          isLoaded ? "block" : "hidden"
        }`}
      />
    </div>
  );
};

export default LoadedImage;
