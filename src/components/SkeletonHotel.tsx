// components/SkeletonHotel.tsx
function SkeletonHotel() {
  return (
    <div className="animate-pulse p-4 border rounded-md shadow-sm mt-4">
      <div className="bg-gray-300 h-54 w-full rounded-md mb-4" />
      <div className="bg-gray-300 h-8 w-3/4 mb-2" />
      <div className="bg-gray-300 h-8 w-1/2" />
    </div>
  );
}

export default SkeletonHotel;
