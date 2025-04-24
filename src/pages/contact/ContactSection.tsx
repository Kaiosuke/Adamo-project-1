import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { contact } from "@/api/contactRequest";
import FormContact from "@/components/forms/FormContact";
import LoadingBtn from "@/components/LoadingList/LoadingBtn";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { IContact } from "@/interfaces/contact";
import { contactSchema } from "@/schemas/contactSchema";
import { useMutation } from "@tanstack/react-query";
import { Trans } from "react-i18next";
import { toast } from "sonner";
import { useDebouncedCallback } from "use-debounce";
import Office from "./Office";

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

  const { mutate, isPending } = useMutation({
    mutationFn: (data: IContact) => contact({ data }),
    onSuccess: () => {
      toast.success("Thanks for contact us", {
        style: {
          backgroundColor: "#4caf50",
          color: "#ffffff",
        },
      });
      form.reset();
    },
  });

  const onSubmit = useDebouncedCallback(
    (values: z.infer<typeof contactSchema>) => {
      mutate({ ...values, phoneNumber: Number(values.phoneNumber) });
    },
    300
  );

  return (
    <section className="main-container animate-fade-down">
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
                <Button variant={"primary"} type="submit">
                  {isPending ? (
                    <>
                      <LoadingBtn />
                    </>
                  ) : (
                    `Submit`
                  )}
                </Button>
              </div>
            </form>
          </Form>
        </div>
        <Office />
      </div>
    </section>
  );
};

export default ContactSection;
