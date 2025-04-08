import Card from "@/assets/images/card.png";
import Paypal from "@/assets/images/paypal.png";
import DatePickerWithRange from "@/components/DatePickerWithRange";
import FormComp from "@/components/FormCom";
import PdMain from "@/components/PdMain";
import PdSub from "@/components/PdSub";
import { UserSchema } from "@/components/schemas/userSchema";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { CiLocationOn } from "react-icons/ci";
import { FaCalendarAlt } from "react-icons/fa";
import { GoPeople } from "react-icons/go";
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
      payMethod: "",
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
        <div className="flex 2xl:gap-20 gap-10 flex-wrap lg:flex-row md:flex-col-reverse">
          <div className="lg:flex-[1_1_60%] flex-[0_0_100%] text-secondary flex flex-col gap-4">
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
                  <Button type="submit" className="lg:w-ful w-fit px-10">
                    Complete Booking
                  </Button>
                </form>
              </Form>
            </div>
          </div>
          <div className="lg:flex-[0_0_30%] flex-[0_0_auto] max-w-[380px] w-full bg-four h-fit">
            <div className=" bg-seven">
              <div className="lg:p-8 p-4 flex flex-col gap-6">
                <p className="text-secondary font-semibold">
                  Discover interesting things in the romantic coastal city of
                  Vungtau
                </p>
                <div className="flex items-center gap-2">
                  <CiLocationOn className="text-primary text-xl" />
                  <span className="text-four text-sm">
                    Vungtau City, Baria-Vungtau
                  </span>
                </div>
                <div className="flex gap-10">
                  <div>
                    <div className="text-four">Duration:</div>
                    <div className="font-semibold text-secondary">
                      3 days - 2 nights
                    </div>
                  </div>
                  <div>
                    <div className="text-four">Tour type:</div>
                    <div className="font-semibold text-secondary">
                      Sun - Beach
                    </div>
                  </div>
                </div>
                <div className="w-full h-[64px] bg-third py-2 pl-3 flex items-center gap-4 text-sm">
                  <FaCalendarAlt className="text-primary text-xl" />
                  <div className="text-secondary">
                    <span>25/02/2021 - </span>
                    <span> 28/02/2021</span>
                  </div>
                </div>
                <div className="w-full h-[64px] bg-third py-2 pl-3 flex items-center gap-4 text-sm">
                  <GoPeople className="text-primary text-xl" />
                  <div className="text-secondary">2 Adults - 1 Children</div>
                </div>
                <div className="w-full h-[56px] flex items-center gap-4 text-sm">
                  <div className="flex-[1_0_auto]  h-full">
                    <Input
                      className="bg-third rounded-none h-full p-0 py-2 pl-3 placeholder:text-four"
                      placeholder="Promo Code"
                    />
                  </div>
                  <div className="text-secondary w-[112px] h-full">
                    <Button
                      variant={"outline"}
                      className="font-bold border-2 h-full"
                    >
                      Apply
                    </Button>
                  </div>
                </div>
              </div>
              <div className="flex justify-between items-center bg-secondary text-third text-size-xl lg:p-8 p-4">
                <span>Total</span>
                <span>$450.00</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <PdMain />
    </>
  );
};

export default CheckOut;
