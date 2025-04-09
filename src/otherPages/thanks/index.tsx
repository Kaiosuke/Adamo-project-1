import { Button } from "@/components/ui/button";
import { Link } from "react-router";

const ThankYou = () => {
  return (
    <div
      className={`w-[100%] h-screen bg-[url("@/assets/images/hero.png")] flex justify-center items-center bg-center bg-cover`}
    >
      <div className="max-w-[854px] lg:w-full md:w-[80%] w-[90%] h-[529px] bg-third flex items-center justify-center sm:px-0 px-4">
        <div className="max-w-[584px] w-full flex flex-col gap-10 justify-center w-full text-center">
          <h1 className="text-primary text-size-6xl">Thank You!</h1>
          <p>
            Your order has been successfully ordered. <br /> Order information
            has been emailed to you. Thank you!
          </p>
          <Link to={"/"}>
            <Button className="max-w-[293px] w-full">Back to home</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
