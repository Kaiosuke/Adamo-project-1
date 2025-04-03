import ButtonFeature from "@/components/ButtonFeature";
import { Input } from "@/components/ui/input";
import { CiMail } from "react-icons/ci";

const ContactSection = () => {
  return (
    <section className="main-container">
      <div className="lg:flex lg:justify-between">
        <h2 className="text-size-4xl lg:pr-20 pt-0 ">
          <span className="text-secondary ">
            Leave us an email, <br /> to get
          </span>
          <span className="text-primary">the latest deals</span>
        </h2>
        <div className="flex gap-4 lg:pt-0 pt-10">
          <div className="relative h-fit w-[324px] ">
            <Input
              placeholder="example@gmail.com"
              className="rounded-none border-secondary pl-10 text-four"
            />
            <div className="absolute top-[50%] left-4 -translate-y-[50%]">
              <CiMail className="text-size-lg text-primary" />
            </div>
          </div>
          <ButtonFeature content="Send" />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
