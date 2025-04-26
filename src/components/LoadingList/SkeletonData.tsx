import { Skeleton } from '../ui/skeleton'

function SkeletonData() {
  return (
    <div className="p-4 border shadow-sm mt-4">
      <Skeleton className="bg-five h-58 w-full mb-4" />
      <Skeleton className="bg-five h-10 w-3/4 mb-2" />
      <Skeleton className="bg-five h-8 w-1/2" />
    </div>
  )
}

export default SkeletonData
