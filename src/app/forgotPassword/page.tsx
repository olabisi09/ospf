"use client";
import Input from "@/components/input";
import { Field, FormikProvider, FormikValues, useFormik } from "formik";
import Image from "next/image";

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
        <form onSubmit={formik.handleSubmit} className="flex my-10 items-center">
          <div className="flex flex-col px-20 py-12">
            <h1 className="text-3xl text-left font-extrabold">
              Forgot Password
            </h1>
            <p className="py-6">
              Enter your email address and let&apos;s help get your account back.
            </p>
            <Field name="email" as={Input} label="Email" />

            <button className="bg-main w-full mt-6 text-white py-4 rounded-tl-lg rounded-br-lg">
              Confirm email
            </button>
          </div>
          <Image className="hidden lg:block" src={'/forgot-password-pic.svg'} alt="doctors" width={400} height={400}/>
        </form>
      </main>
    </FormikProvider>
  );
}
