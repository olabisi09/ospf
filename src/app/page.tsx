"use client";
import Steps from "@/components/steps";
import Image from "next/image";
import { useEffect, useState } from "react";

const CurrentStep = ({ step }: { step: number }) => {
  switch (step) {
    case 1:
      return (
        <Image
          src="/medical-history.png"
          alt="medical-history"
          width={256}
          height={268}
        />
      );
    case 2:
      return (
        <Image
          src="/doctor-with-clipboard.png"
          alt="doctor-with-clipboard"
          width={188}
          height={456}
        />
      );
    case 3:
      return (
        <Image
          src="/medical-history.png"
          alt="medical-history"
          width={256}
          height={268}
        />
      );
  }
};

export default function Home() {
  const [activeStep, setActiveStep] = useState(1);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setActiveStep((prev) => (prev === 3 ? 1 : prev + 1));
  //   }, 2000); // Change this value to adjust the auto-scroll speed

  //   return () => {
  //     clearInterval(interval);
  //   };
  // }, []);

  return (
    <main className="flex flex-col">
      <div className="h-full flex flex-col md:flex-row justify-between items-center px-8 md:px-20 py-24 gap-32">
        <section className="w-full md:w-1/2">
          <h1 className="text-4xl">
            Hire Medical <br />
            Professionals For Free
          </h1>
          <p className="text-gray pt-7 font-extralight">
            We link up medical professionals with available shifts and <br />
            surgeries at top medical facilities.
          </p>
          <p className="pt-8 text-gray font-extralight">
            Professionals get faster jobs to do , good rates and enjoy
            <br />
            flexibility, while facilities can plan better and reach <br />{" "}
            professionals more quicker ways.
          </p>
          <div className="flex gap-2 md:gap-8 mt-8">
            <button className="bg-main text-white px-4 md:px-20 w-full py-5 rounded-tl-lg rounded-br-lg">
              New Shift
            </button>
            <button className="bg-main text-white px-4 md:px-20 w-full py-5 rounded-tl-lg rounded-br-lg">
              Available Shifts
            </button>
          </div>
        </section>
        <section className="hidden md:flex flex-col items-center justify-center gap-8 w-1/2 h-full transition-all">
          <CurrentStep step={activeStep} />
          <Steps steps={3} activeStep={activeStep} />
        </section>
      </div>
    </main>
  );
}
