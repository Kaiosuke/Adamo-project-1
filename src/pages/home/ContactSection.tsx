import { Input } from "@/components/ui/input";
import { Trans, useTranslation } from "react-i18next";
import { CiMail } from "react-icons/ci";

const ContactSection = () => {
  const { t } = useTranslation();

  return (
    <section className="main-container">
      <div className="lg:flex lg:justify-between">
        <h2 className=" lg:pr-20 pt-0 ">
          <Trans
            i18nKey={"contact.title"}
            components={{
              div: <div className="text-secondary text-size-4xl" />,
              span: <span className="text-primary text-size-4xl" />,
            }}
          />
        </h2>
        <p className="flex gap-4 lg:pt-0 pt-10 ">
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
        </p>
      </div>
    </section>
  );
};

export default ContactSection;
