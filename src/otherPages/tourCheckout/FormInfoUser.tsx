import { bookingTour } from "@/api/bookingRequest";
import FormComp from "@/components/forms/FormCom";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { IBooking } from "@/interfaces/booking";
import { userSchema } from "@/schemas/userSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { toast } from "sonner";
import { useDebouncedCallback } from "use-debounce";

import { StringParam, useQueryParams, withDefault } from "use-query-params";
import { z } from "zod";
import PayMethod from "./PayMethod";

interface Props {
  booking: IBooking;
}

const FormInfoUser = ({ booking }: Props) => {
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

  const navigate = useNavigate();

  const { mutate } = useMutation({
    mutationFn: (data: IBooking) => bookingTour({ data }),
    onSuccess: () => {
      toast.success("Booking tour success");

      form.reset();
      navigate("/thanks");
    },
  });

  const onSubmit = useDebouncedCallback(
    (values: z.infer<typeof userSchema>) => {
      const user = {
        ...values,
        phoneNumber: Number(values.phoneNumber),
      };
      mutate({
        day: booking.day,
        duration: booking.duration,
        guests: booking.guests,
        totalPrice: booking.totalPrice,
        tourId: booking.tourId,
        user: user,
      });
    },
    300
  );

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
              setQuery={setQuery}
            />
            <FormComp
              form={form}
              title="Last Name"
              name="lastName"
              placeholder="Last Name"
              isImportant
              setQuery={setQuery}
            />

            <FormComp
              form={form}
              title="Email"
              name="email"
              placeholder="email@domain.com"
              isImportant
              setQuery={setQuery}
            />
            <FormComp
              form={form}
              title="Phone Number"
              name="phoneNumber"
              placeholder="Your Phone"
              isImportant
              setQuery={setQuery}
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
            setQuery={setQuery}
          />
          <div className="grid grid-cols-2 xl:gap-8 gap-6">
            <FormComp
              form={form}
              title="City"
              placeholder="Your City"
              name="city"
              setQuery={setQuery}
            />
            <FormComp
              form={form}
              title="State/Province/Region"
              placeholder="Your State/Province/Region"
              name="state"
              setQuery={setQuery}
            />
            <FormComp
              form={form}
              title="Zip Code/ Postal Code"
              placeholder="Zip Code/ Postal Code"
              name="zipCode"
              setQuery={setQuery}
            />
            <FormComp
              form={form}
              title="Country"
              placeholder="Your Country"
              name="country"
              setQuery={setQuery}
            />
          </div>
        </div>
        <div className="">
          <FormComp
            form={form}
            title="Special Requirement"
            placeholder="Special Requirement"
            name="requirement"
            setQuery={setQuery}
            isArea
          />
        </div>
        <PayMethod form={form} name="payMethod" setQuery={setQuery} />
        <Button type="submit" className="lg:w-full w-fit px-10">
          Complete Booking
        </Button>
      </form>
    </Form>
  );
};

export default FormInfoUser;
