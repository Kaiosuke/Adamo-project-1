import Hotel from "@/components/Hotel";

const RelatedHotels = () => {
  return (
    <div>
      <h2 className="text-size-3xl text-secondary ">Recommend For you</h2>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-8 md:gap-4 gap-10 lg:mt-10 mt-8">
        <Hotel hotel={1} />
        <Hotel hotel={2} />
        <Hotel hotel={3} />
      </div>
    </div>
  );
};

export default RelatedHotels;
