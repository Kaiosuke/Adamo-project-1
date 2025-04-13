import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import InputAuth from "@/components/InputAuth";
import { forgotPasswordSchema } from "@/components/schemas/authSchema";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { useAppDispatch } from "@/redux";
import { forgotPassword } from "@/api/authRequest";

const ForgotPassword = () => {
  const form = useForm<z.infer<typeof forgotPasswordSchema>>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      email: "",
    },
  });

  const dispatch = useAppDispatch();

  function onSubmit(values: z.infer<typeof forgotPasswordSchema>) {
    (async () => {
      try {
        const res = await dispatch(forgotPassword(values.email)).unwrap();
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    })();
  }

  return (
    <div className="flex justify-center items-center">
      <div className="flex justify-center items-start flex-col">
        <h1 className="text-size-5xl text-secondary">Forgot Password</h1>
        <div className="pt-4">
          Enter the e-mail address associated with the account. <br />{" "}
          We&apos;ll e-mail a link to reset your password.
        </div>
        <div className="mt-16">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-8 w-[350px]"
            >
              <InputAuth form={form} name="email" title="Email Address" />
              <div className="flex flex-col gap-6 mt-6">
                <Button variant={"primary"} type="submit">
                  Send Request
                </Button>
                <Button variant={"outline"} type="button">
                  Back to sign in
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
