import { useState } from "react";
import OTPInput from "react-otp-input";

const AccountVerification = () => {
  const [otp, setOtp] = useState("");

  return (
    <section className="px-11 py-8">
      <h1 className="text-3xl text-left font-extrabold">
        Account Verification
      </h1>
      <p className="pt-6">Enter the verification code sent to your email</p>

      <div className="flex flex-col gap-12 lg:gap-32 mt-12 lg:mt-28 items-center">
        <OTPInput
          value={otp}
          onChange={setOtp}
          numInputs={5}
          //inputType="number"
          renderSeparator={<span></span>}
          renderInput={(props) => <input {...props} />}
          containerStyle={
            "w-full flex lg:gap-6 justify-between lg:justify-center"
          }
          inputStyle={
            "bg-orangeLight focus:outline-orange focus:border-none rounded-lg !w-12 h-12 !lg:w-32 lg:h-32 lg:text-3xl text-center font-bold"
          }
        />

        <button className="bg-main w-auto text-white p-4 rounded-tl-lg rounded-br-lg">
          Verify Account
        </button>
      </div>
    </section>
  );
};

export default AccountVerification;
