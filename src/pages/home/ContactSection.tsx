import { Input } from "@/components/ui/input";
import { CiMail } from "react-icons/ci";

const ContactSection = () => {
  return (
    <section className="main-container">
      <div className="lg:flex lg:justify-between">
        <h2 className=" lg:pr-20 pt-0 ">
          <span className="text-secondary text-size-4xl">
            Leave us an email, <br /> to get{" "}
          </span>
          <span className="text-primary text-size-4xl">the latest deals</span>
        </h2>
        <div className="flex gap-4 lg:pt-0 pt-10 ">
          <div className="relative w-[324px] h-[48px]">
            <Input
              placeholder="example@gmail.com"
              className="rounded-none border-secondary w-full pl-10 text-four h-full"
            />
            <div className="absolute top-[50%] left-4 -translate-y-[50%]">
              <CiMail className="text-size-lg text-primary" />
            </div>
          </div>
          <div className="w-[100px] h-[48px] bg-secondary text-third flex items-center justify-center text-sm cursor-pointer hover:bg-secondary/80">
            Send
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
