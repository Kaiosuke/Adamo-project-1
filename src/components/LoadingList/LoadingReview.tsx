import { Skeleton } from "../ui/skeleton";

const LoadingReview = () => {
  return (
    <>
      <div className="flex w-fit gap-4">
        <Skeleton className="w-[84px] h-[84px] rounded-full " />
        <div className="flex flex-col gap-1">
          <Skeleton className="w-[200px] h-[40px]" />
          <Skeleton className="w-[160px] h-[20px]" />
        </div>
      </div>
      <Skeleton className="w-[full] h-[40px] " />
    </>
  );
};

export default LoadingReview;
