import { Field } from "formik";
import Image from "next/image";
import Input from "../input";
import TextArea from "../textarea";

const Profile = () => {
  return (
    <section className="px-11 py-8">
      <h1 className="text-3xl text-left font-extrabold">Build your profile</h1>
      <p className="pt-6">
        Let people know you, your career objectives and how they can reach you
        quickly. <br /> You choose who see these data and your data is safe with
        us.
      </p>

      <label className="cursor-pointer bg-orangeLight flex justify-center items-center p-10 lg:w-1/5 rounded-3xl mt-4">
        <Image src={"/camera.svg"} alt={"camera"} width={50} height={50} />
        <input type="file" hidden />
      </label>

      <div className="flex flex-col lg:flex-row lg:gap-16 mt-4">
        <Field name="firstName" as={Input} label="First name" grow />
        <Field name="lastName" as={Input} label="Last name" grow />
      </div>

      <Field name="bio" as={TextArea} label="Bio" />

      <div className="flex flex-col lg:flex-row lg:gap-16">
        <Field name="email" as={Input} label="Email" grow />
        <Field name="phoneNumber" as={Input} label="Phone number" grow />
      </div>

      <div className="flex flex-col lg:flex-row lg:gap-16">
        <Field
          name="password"
          as={Input}
          type="password"
          label="Password"
          grow
        />
        <Field
          name="confirmPassword"
          as={Input}
          type="password"
          label="Confirm password"
          grow
        />
      </div>
    </section>
  );
};

export default Profile;
