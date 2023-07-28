"use client";
import AccountVerification from "@/components/register/accountVerification";
import RegistrationComplete from "@/components/register/complete";
import Profile from "@/components/register/profile";
import UploadResume from "@/components/register/uploadResume";
import WorkExperience from "@/components/register/workExperience";
import Steps from "@/components/steps";
import { RootState } from "@/store/store";
import { useActionCreator } from "@/utils/useActionCreator";
import { FormikProvider, FormikValues, useFormik } from "formik";
import { useSelector } from "react-redux";
import * as Yup from "yup";

const CurrentStep = ({ step }: { step: number }) => {
  switch (step) {
    case 1:
      return <Profile />;
    case 2:
      return <WorkExperience />;
    case 3:
      return <UploadResume />;
    case 4:
      return <AccountVerification />;
    case 5:
      return <RegistrationComplete />;
  }
};

export default function Register() {
  const { increment, decrement } = useActionCreator();
  const activeStep = useSelector((state: RootState) => state?.step);

  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("required"),
    lastName: Yup.string().required("required"),
    bio: Yup.string().required("required"),
    email: Yup.string().required("required"),
    phoneNumber: Yup.string().required("required"),
    password: Yup.string().required("required"),
    confirmPassword: Yup.string()
      .required("required")
      .oneOf([Yup.ref("password")], "Passwords must match"),
  });
  const formik = useFormik<FormikValues>({
    initialValues: {
      firstName: "",
      lastName: "",
      bio: "",
      email: "",
      phoneNumber: "",
      password: "",
      confirmPassword: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
    validationSchema: validationSchema,
  });
  return (
    <FormikProvider value={formik}>
      <main className="flex flex-col justify-center items-center">
        <form
          onSubmit={formik.handleSubmit}
          className="flex flex-col my-10 lg:border-2 lg:overflow-y-auto lg:border-gray lg:rounded-lg"
        >
          <section className="flex lg:gap-80 items-center justify-between px-4 py-4 lg:border-b-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="43"
              height="49"
              className="w-6 h-6 lg:w-10 lg:h-10"
              viewBox="0 0 43 49"
              fill="none"
              onClick={() => decrement()}
            >
              <path
                d="M9.3684 22.8647H35.7366C36.0862 22.8647 36.4216 23.0206 36.6688 23.298C36.9161 23.5754 37.055 23.9516 37.055 24.3439C37.055 24.7362 36.9161 25.1125 36.6688 25.3899C36.4216 25.6673 36.0862 25.8231 35.7366 25.8231H9.3684C9.01873 25.8231 8.68339 25.6673 8.43614 25.3899C8.18889 25.1125 8.04999 24.7362 8.04999 24.3439C8.04999 23.9516 8.18889 23.5754 8.43614 23.298C8.68339 23.0206 9.01873 22.8647 9.3684 22.8647Z"
                fill="black"
              />
              <path
                d="M9.91418 24.3439L20.8491 36.6094C21.0966 36.8871 21.2357 37.2638 21.2357 37.6566C21.2357 38.0494 21.0966 38.4261 20.8491 38.7039C20.6015 38.9816 20.2657 39.1377 19.9156 39.1377C19.5655 39.1377 19.2297 38.9816 18.9822 38.7039L7.11652 25.3911C6.99374 25.2537 6.89633 25.0905 6.82986 24.9108C6.7634 24.7311 6.72919 24.5384 6.72919 24.3439C6.72919 24.1493 6.7634 23.9567 6.82986 23.7769C6.89633 23.5972 6.99374 23.434 7.11652 23.2966L18.9822 9.98384C19.2297 9.70609 19.5655 9.55005 19.9156 9.55005C20.2657 9.55005 20.6015 9.70609 20.8491 9.98384C21.0966 10.2616 21.2357 10.6383 21.2357 11.0311C21.2357 11.4239 21.0966 11.8006 20.8491 12.0784L9.91418 24.3439Z"
                fill="black"
              />
            </svg>
            <Steps steps={5} activeStep={activeStep} />
            <button
              onClick={() => increment()}
              //disabled={!(formik.isValid && formik.dirty)}
              className="bg-main lg:w-64 text-white p-4 rounded-tl-lg rounded-br-lg"
            >
              Continue
            </button>
          </section>
          <CurrentStep step={activeStep} />
        </form>
      </main>
    </FormikProvider>
  );
}
