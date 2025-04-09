import OurOffice from "@/assets/images/our office.png";
import { IoHomeOutline } from "react-icons/io5";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { contactSchema } from "@/components/schemas/contactSchema";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

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
      <div className="flex gap-10 md:flex-row flex-col">
        <div className="flex-[1_0_auto]">
          <h2 className="text-secondary text-size-4xl">
            We&apos;d love to hear from you
          </h2>
          <div className="text-four py-6">
            Send us a message and we&apos;ll respond as soon as possible
          </div>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Username</FormLabel>
                    <FormControl>
                      <Input placeholder="shadcn" {...field} />
                    </FormControl>
                    <FormDescription>
                      This is your public display name.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit">Submit</Button>
            </form>
          </Form>
        </div>
        <div className="w-[full] relative">
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
