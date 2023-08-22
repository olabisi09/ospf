"use client";
import Input from "@/components/input";
import { Field, FormikProvider, FormikValues, useFormik } from "formik";
import Image from "next/image";

export default function ResetPassword() {
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
              Reset Password
            </h1>

            <Field
              name="newPassword"
              type="password"
              as={Input}
              label="New password"
            />
            <Field
              name="confirmPassword"
              type="password"
              as={Input}
              label="Confirm new password"
            />

            <button className="bg-main w-full mt-6 text-white py-4 rounded-tl-lg rounded-br-lg">
              Reset Password
            </button>
          </div>
          <Image className="hidden lg:block" src={'/reset-password-pic.svg'} alt="doctors" width={400} height={400}/>
        </form>
      </main>
    </FormikProvider>
  );
}
