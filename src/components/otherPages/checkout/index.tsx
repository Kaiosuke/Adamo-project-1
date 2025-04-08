import FormComp from "@/components/FormCom";
import PdMain from "@/components/PdMain";
import PdSub from "@/components/PdSub";
import { UserSchema } from "@/components/schemas/userSchema";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const CheckOut = () => {
  const form = useForm<z.infer<typeof UserSchema>>({
    resolver: zodResolver(UserSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      phoneNumber: "",
      address: "",
      city: "",
      state: "",
      zipCode: "",
      country: "",
      requirement: "",
    },
  });

  function onSubmit(values: z.infer<typeof UserSchema>) {
    console.log(values);
  }

  return (
    <>
      <PdSub />
      <section className="main-container">
        <h1 className="text-size-4xl text-secondary">Booking Submission</h1>
        <div className="w-[70%]">
          <div className="str-line " />
        </div>
        <div className="flex 2xl:gap-20 gap-10 flex-wrap">
          <div className="lg:flex-[0_0_60%] flex-[0_0_100%] text-secondary flex flex-col gap-4">
            <div>
              <h2 className="text-size-2xl">Traveler Details</h2>
              <p className="text-four">
                Information we need to confirm your tour or activity
              </p>
            </div>

            <div>
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-8 mt-2"
                >
                  <h3 className="text-size-xl">Traveler Details</h3>
                  <div className="flex flex-col gap-6">
                    <div className="grid grid-cols-2 xl:gap-8 gap-6">
                      <FormComp
                        form={form}
                        title="First Name"
                        name="firstName"
                        placeholder="First Name"
                        isImportant
                      />
                      <FormComp
                        form={form}
                        title="Last Name"
                        name="lastName"
                        placeholder="Last Name"
                        isImportant
                      />

                      <FormComp
                        form={form}
                        title="Email"
                        name="email"
                        placeholder="email@domain.com"
                        isImportant
                      />
                      <FormComp
                        form={form}
                        title="Phone Number"
                        name="phoneNumber"
                        placeholder="Your Phone"
                        isImportant
                      />
                    </div>
                  </div>

                  <h3 className="text-size-xl">Address</h3>
                  <div className="flex flex-col gap-6">
                    <FormComp
                      form={form}
                      title="Your Address"
                      placeholder="Your Address"
                      name="address"
                    />
                    <div className="grid grid-cols-2 xl:gap-8 gap-6">
                      <FormComp
                        form={form}
                        title="City"
                        placeholder="Your City"
                        name="city"
                      />
                      <FormComp
                        form={form}
                        title="State/Province/Region"
                        placeholder="Your State/Province/Region"
                        name="state"
                      />
                      <FormComp
                        form={form}
                        title="Zip Code/ Postal Code"
                        placeholder="Zip Code/ Postal Code"
                        name="zipCode"
                      />
                      <FormComp
                        form={form}
                        title="Country"
                        placeholder="Your Country"
                        name="country"
                      />
                    </div>
                  </div>
                  <div className="">
                    <FormComp
                      form={form}
                      title="Special Requirement"
                      placeholder="Special Requirement"
                      name="requirement"
                      isArea
                    />
                  </div>
                  <Button type="submit">Submit</Button>
                </form>
              </Form>
            </div>
          </div>
          <div className="flex-[0_1_auto] w-full max-w-[314px] bg-four h-[200px]"></div>
        </div>
      </section>
      <PdMain />
    </>
  );
};

export default CheckOut;
