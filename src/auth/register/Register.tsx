import { registerSchema } from "@/components/schemas/authSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import InputAuth from "@/components/InputAuth";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { FaFacebook } from "react-icons/fa6";
import { Link } from "react-router";
import { useAppDispatch } from "@/redux";
import { register } from "@/api/authRequest";
import { useSelector } from "react-redux";
import { authSelector } from "@/redux/selectors/authSelector";
import LoadingBtn from "@/components/LoadingList/LoadingBtn";
import { toast } from "sonner";

const Login = () => {
  const form = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirm: "",
    },
  });

  const dispatch = useAppDispatch();

  const { loading } = useSelector(authSelector);

  function onSubmit(values: z.infer<typeof registerSchema>) {
    (async () => {
      try {
        await dispatch(
          register({
            email: values.email,
            password: values.password,
            firstName: values.firstName,
            lastName: values.lastName,
          })
        ).unwrap();
        toast.success("Register Success");
        form.reset();
      } catch (error) {
        typeof error === "string" && toast.error(error);
      }
    })();
  }

  return (
    <div className="flex justify-center items-center">
      <div className="flex justify-center items-start flex-col">
        <h1 className="text-size-5xl text-secondary">Register</h1>
        <div className="pt-4">Welcome to NgaoduVietnam</div>
        <div className="mt-16">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-8 w-[350px]"
            >
              <div className="flex items-center gap-4 ">
                <InputAuth form={form} name="firstName" title="First Name" />
                <InputAuth form={form} name="lastName" title="Last Name" />
              </div>
              <InputAuth form={form} name="email" title="Email Address" />

              <InputAuth
                form={form}
                name="password"
                title="Password"
                type="password"
              />
              <InputAuth
                form={form}
                name="confirm"
                title="Confirm Password"
                type="password"
              />

              <div className="flex flex-col gap-6 mt-6">
                <Button variant={"primary"} type="submit">
                  {loading ? (
                    <>
                      <LoadingBtn />
                    </>
                  ) : (
                    "Register"
                  )}
                </Button>
                <Button variant={"six"} type="button">
                  <span>
                    <FaFacebook className="text-size-lg" />
                  </span>
                  Sign in with FaceBook
                </Button>
              </div>
            </form>
          </Form>
          <div className="mt-6">
            <span className="text-four">
              Maybe already?{" "}
              <Link to="/auth/login" className="text-primary">
                Login
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
