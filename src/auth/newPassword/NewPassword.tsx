import { newPasswordSchema } from "@/schemas/authSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import InputAuth from "@/components/InputAuth";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { FaFacebook } from "react-icons/fa6";
import { Link, useNavigate } from "react-router";
import { useAppDispatch } from "@/redux";
import { changePassword } from "@/api/authRequest";
import { useSelector } from "react-redux";
import { authSelector } from "@/redux/selectors/authSelector";
import LoadingBtn from "@/components/LoadingList/LoadingBtn";
import { toast } from "sonner";

const NewPassword = () => {
  const form = useForm<z.infer<typeof newPasswordSchema>>({
    resolver: zodResolver(newPasswordSchema),
    defaultValues: {
      password: "",
      confirm: "",
    },
  });

  const { loading, currentUser } = useSelector(authSelector);

  const dispatch = useAppDispatch();

  function onSubmit(values: z.infer<typeof newPasswordSchema>) {
    (async () => {
      try {
        await dispatch(changePassword(values.password)).unwrap();
        form.reset();
        toast.success("Change Password success");
      } catch (error) {
        typeof error === "string" && toast.error(error);
      }
    })();
  }

  const navigate = useNavigate();

  if (currentUser) {
    navigate("/");
  }

  return (
    <div className="flex justify-center items-center">
      <div className="flex justify-center items-start flex-col">
        <h1 className="text-size-5xl text-secondary">New Password</h1>
        <div className="pt-4">Create your new password</div>
        <div className="mt-16">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-8 w-[350px]"
            >
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
              <div className="text-right">
                <Link
                  to="/auth/forgot-password"
                  className="text-four text-base"
                >
                  Forgot Password?
                </Link>
              </div>
              <div className="flex flex-col gap-6 mt-6">
                <Button variant={"primary"} type="submit">
                  {loading ? (
                    <>
                      <LoadingBtn />
                    </>
                  ) : (
                    "Change password"
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
              Don&apos;t have an account{" "}
              <Link to="/auth/register" className="text-primary">
                Sign up
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewPassword;
