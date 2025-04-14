import { Trans, useTranslation } from "react-i18next";
import { CiMail } from "react-icons/ci";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { sendMailSchema } from "@/components/schemas/authSchema";

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
  const { t } = useTranslation();

  const form = useForm<z.infer<typeof sendMailSchema>>({
    resolver: zodResolver(sendMailSchema),
    defaultValues: {
      email: "",
    },
  });

  function onSubmit(values: z.infer<typeof sendMailSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

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
        {/* <div className="relative w-[324px] h-[48px]">
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
          </div> */}
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <div className="flex gap-4 lg:pt-0 pt-10 ">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder="example@gmail.com"
                        {...field}
                        className="h-[48px] rounded-none md:w-[324px] w-auto"
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <button
                type="submit"
                className="w-[100px] h-[48px] bg-secondary text-third flex items-center justify-center text-sm cursor-pointer hover:bg-secondary/80"
              >
                Send
              </button>
            </div>
          </form>
        </Form>
      </div>
    </section>
  );
};

export default ContactSection;
