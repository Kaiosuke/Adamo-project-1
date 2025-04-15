import OurOffice from "@/assets/images/our office.png";
import { IoHomeOutline } from "react-icons/io5";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import FormContact from "@/components/forms/FormContact";
import { contactSchema } from "@/schemas/contactSchema";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { Trans } from "react-i18next";

const ContactSection = () => {
  const form = useForm<z.infer<typeof contactSchema>>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phoneNumber: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof contactSchema>) {
    console.log(values);
  }

  return (
    <section className="main-container">
      <div className="flex gap-10 lg:flex-row flex-col-reverse">
        <div className="flex-[1_0_40%] flex flex-col justify-between">
          <div>
            <h2 className="text-secondary text-size-4xl">
              <Trans i18nKey={"contact.title"} ns="contact" />
            </h2>
            <div className="text-four mt-10">
              <Trans i18nKey={"contact.description"} ns="contact" />
            </div>
          </div>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <div className="flex flex-col justify-between">
                <FormContact form={form} placeholder="Your Name" name="name" />
                <FormContact
                  form={form}
                  placeholder="Your Email"
                  name="email"
                />
                <FormContact
                  form={form}
                  placeholder="Your Phone"
                  name="phoneNumber"
                />
                <FormContact
                  form={form}
                  placeholder="Message"
                  name="message"
                  isArea
                />
              </div>
              <div className="w-full text-right">
                <Button type="submit" className="max-w-[200px] w-full">
                  Submit
                </Button>
              </div>
            </form>
          </Form>
        </div>
        <div className="flex-[0_0_60%] max-w-[543px] relative">
          <img
            src={OurOffice}
            alt="our office"
            className="w-full h-full object-cover"
          />
          <div className="md:absolute md:mt-0 mt-6 bottom-0 md:max-w-[422px] max-w-full md:max-h-[324px] max-h-full w-full h-full bg-secondary">
            <div className="lg:p-10 md:p-8 p-6 h-full flex flex-col justify-between">
              <h3 className="text-size-4xl text-third">Our Office</h3>
              <div className="flex flex-col h-full justify-between text-primary mt-6 md:gap-0 gap-8">
                <div className="flex gap-2 items-center">
                  <div>
                    <div className="w-[40px] h-[40px] text-third bg-primary flex items-center justify-center rounded-full">
                      <IoHomeOutline />
                    </div>
                  </div>
                  <div>
                    <span className="text-size-lg">Address</span>
                    <div className="text-third text-sm">
                      27 Old Gloucester Street, London, WC1N 3AX
                    </div>
                  </div>
                </div>
                <div className="flex gap-2 items-center">
                  <div>
                    <div className="w-[40px] h-[40px] text-third bg-primary flex items-center justify-center rounded-full">
                      <IoHomeOutline />
                    </div>
                  </div>
                  <div>
                    <span className="text-size-lg">Address</span>
                    <div className="text-third text-sm">
                      27 Old Gloucester Street, London, WC1N 3AX
                    </div>
                  </div>
                </div>
                <div className="flex gap-2 items-center">
                  <div>
                    <div className="w-[40px] h-[40px] text-third bg-primary flex items-center justify-center rounded-full">
                      <IoHomeOutline />
                    </div>
                  </div>
                  <div>
                    <span className="text-size-lg">Address</span>
                    <div className="text-third text-sm">
                      27 Old Gloucester Street, London, WC1N 3AX
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
