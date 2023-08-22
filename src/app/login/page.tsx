"use client";
import { FormikProvider, FormikValues, useFormik } from "formik";
import Image from "next/image";
import Link from "next/link";

export default function Login() {
  const formik = useFormik<FormikValues>({
    initialValues: {
      email: "",
      password: "",
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
            <h1 className="text-3xl text-left font-extrabold">Login</h1>
            <section className="mt-12 flex flex-col gap-4">
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  className="input input-bordered w-full max-w-xs border-gray-light focus:outline-main"
                />
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  className="input input-bordered w-full max-w-xs border-gray-light focus:outline-main"
                />
              </div>
            </section>
            <Link href="/forgotPassword" className="text-end">
              Forgot password?
            </Link>
            <button className="bg-main w-full mt-6 text-white py-4 rounded-tl-lg rounded-br-lg">
              Login
            </button>
          </div>
          <Image className="hidden lg:block" src={"/login-pic.svg"} alt={"doctor"} width={400} height={400} />
        </form>
      </main>
    </FormikProvider>
  );
}
