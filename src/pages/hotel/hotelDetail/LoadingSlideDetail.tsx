import { Skeleton } from "@/components/ui/skeleton";

const LoadingSlideDetail = () => {
  return (
    <div className="h-full flex flex-col">
      <Skeleton className="w-full flex-[1_1_auto]" />
      <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 mt-4 gap-4">
        <Skeleton className="h-[200px]" />
        <Skeleton className="h-[200px]" />
        <Skeleton className="h-[200px] md:block hidden" />
        <Skeleton className="h-[200px] lg:block hidden" />
      </div>
    </div>
  );
};

export default LoadingSlideDetail;
