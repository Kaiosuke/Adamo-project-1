import { signInSchema } from "@/schemas/authSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { login, loginByFb } from "@/api/authRequest";
import InputAuth from "@/components/InputAuth";
import LoadingBtn from "@/components/LoadingList/LoadingBtn";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { useAppDispatch } from "@/redux";
import { authSelector } from "@/redux/selectors/authSelector";
import { FaFacebook } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router";

import { toast } from "sonner";
import { useTranslation } from "react-i18next";

const Login = () => {
  const form = useForm<z.infer<typeof signInSchema>>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { t } = useTranslation("auth");

  const { loading } = useSelector(authSelector);

  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  function onSubmit(values: z.infer<typeof signInSchema>) {
    (async () => {
      try {
        const user = await dispatch(
          login({ email: values.email, password: values.password })
        ).unwrap();
        if (user) {
          toast.success("Login Success");
          navigate("/");
        }
      } catch (error) {
        typeof error === "string" && toast.error(error);
      }
    })();
  }

  const handleLoginByFb = async () => {
    try {
      const user = await dispatch(loginByFb()).unwrap();
      if (user) {
        navigate("/");
        toast.success("Login Success");
      }
    } catch (error) {
      typeof error === "string" && toast.error(error);
    }
  };

  return (
    <div className="flex justify-center items-center">
      <div className="flex justify-center items-start flex-col">
        <h1 className="text-size-5xl text-secondary">{t("signIn.title")}</h1>
        <div className="pt-4">{t("signIn.description")}</div>
        <div className="mt-16">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-8 w-[350px]"
            >
              <InputAuth form={form} name="email" title={t("signIn.email")} />

              <InputAuth
                form={form}
                name="password"
                title={t("signIn.password")}
                type="password"
              />
              <div className="text-right">
                <Link
                  to="/auth/forgot-password"
                  className="text-four text-base"
                >
                  {t("signIn.forgotPs")}
                </Link>
              </div>
              <div className="flex flex-col gap-6 mt-6">
                <Button variant={"primary"} type="submit">
                  {loading ? (
                    <>
                      <LoadingBtn />
                    </>
                  ) : (
                    `${t("signIn.title")}`
                  )}
                </Button>
                <Button variant={"six"} type="button" onClick={handleLoginByFb}>
                  <span>
                    <FaFacebook className="text-size-lg" />
                  </span>
                  {t("signIn.signFb")}
                </Button>
              </div>
            </form>
          </Form>
          <div className="mt-6">
            <span className="text-four">
              {t("signIn.accCount")}{" "}
              <Link to="/auth/register" className="text-primary">
                {t("signIn.signUp")}
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
