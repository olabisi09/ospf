"use client";
import Input from "@/components/input";
import { Field, FormikProvider, FormikValues, useFormik } from "formik";

export default function ForgotPassword() {
  const formik = useFormik<FormikValues>({
    initialValues: {
      email: "",
    },
    onSubmit: () => {
      console.log("submit");
    },
  });
  return (
    <FormikProvider value={formik}>
      <main className="flex flex-col justify-center items-center">
        <form onSubmit={formik.handleSubmit} className="flex flex-col my-10">
          <div className="flex flex-col px-20 py-12">
            <h1 className="text-3xl text-left font-extrabold">
              Forgot Password
            </h1>
            <p className="py-6">
              Enter your email address and let&apos;s help get your account back
            </p>
            <Field name="email" as={Input} label="Email" />

            <button className="bg-main w-full mt-6 text-white py-4 rounded-tl-lg rounded-br-lg">
              Confirm email
            </button>
          </div>
        </form>
      </main>
    </FormikProvider>
  );
}
