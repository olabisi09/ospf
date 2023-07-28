"use client";
import Input from "@/components/input";
import { Field, FormikProvider, FormikValues, useFormik } from "formik";

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
        <form onSubmit={formik.handleSubmit} className="flex flex-col my-10">
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
        </form>
      </main>
    </FormikProvider>
  );
}
