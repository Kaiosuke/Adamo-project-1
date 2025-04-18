import Card from "@/assets/images/card.png";
import Paypal from "@/assets/images/paypal.png";
import FormComp from "@/components/forms/FormCom";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { userSchema } from "@/schemas/userSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";

import { StringParam, useQueryParams, withDefault } from "use-query-params";
import { z } from "zod";

const FormInfoUser = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [query, setQuery] = useQueryParams({
    firstName: withDefault(StringParam, ""),
    lastName: withDefault(StringParam, ""),
    email: withDefault(StringParam, ""),
    phoneNumber: withDefault(StringParam, ""),
    address: withDefault(StringParam, ""),
    city: withDefault(StringParam, ""),
    state: withDefault(StringParam, ""),
    zipCode: withDefault(StringParam, ""),
    country: withDefault(StringParam, ""),
    requirement: withDefault(StringParam, ""),
    payMethod: withDefault(StringParam, ""),
  });

  const form = useForm<z.infer<typeof userSchema>>({
    resolver: zodResolver(userSchema),
    defaultValues: {
      firstName: query.firstName,
      lastName: query.lastName,
      email: query.email,
      phoneNumber: query.phoneNumber,
      address: query.address,
      city: query.city,
      state: query.state,
      zipCode: query.zipCode,
      country: query.country,
      requirement: query.requirement,
      payMethod: query.payMethod,
    },
  });

  const { watch } = form;

  useEffect(() => {
    const subscription = watch((value) => {
      if (!isSubmitted) {
        setQuery({
          ...value,
        });
      }
    });

    return () => subscription.unsubscribe();
  }, [watch, isSubmitted]);

  const navigate = useNavigate();

  function onSubmit(values: z.infer<typeof userSchema>) {
    console.log(values);
    setIsSubmitted(true);
    navigate("/thanks", { replace: true });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 mt-2">
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
        <div>
          <h3 className="text-size-xl">Payment Menthod</h3>
          <p className="text-four">
            Pay securely—we use SSL encryption to keep your data safe
          </p>
          <div className="mt-6">
            <FormField
              control={form.control}
              name="payMethod"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem
                          value="card"
                          id="r1"
                          className=" w-[20px] h-[20px] "
                        />
                        <Label
                          htmlFor="r1"
                          className="text-size-base font-semibold flex items-center cursor-pointer"
                        >
                          <div className="w-[120px]">Credit Card</div>
                          <img src={Card} />
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem
                          value="paypal"
                          id="r2"
                          className=" w-[20px] h-[20px] "
                        />
                        <Label
                          htmlFor="r2"
                          className="text-size-base font-semibold flex items-center cursor-pointer"
                        >
                          <div className="w-[120px]">Paypal</div>
                          <img src={Paypal} />
                        </Label>
                      </div>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>
        <Button type="submit" className="lg:w-full w-fit px-10">
          Complete Booking
        </Button>
      </form>
    </Form>
  );
};

export default FormInfoUser;
