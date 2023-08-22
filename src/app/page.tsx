"use client";
import Steps from "@/components/steps";
import Image from "next/image";
import { useEffect, useState } from "react";

const CurrentStep = ({ step }: { step: number }) => {
  switch (step) {
    case 1:
      return (
        <div className="flex flex-col justify-between items-center">
          <Image
            src="/carousel-1.svg"
            alt="vaccinations"
            width={300}
            height={300}
          />
          <p className="text-center">Choose professionals from a range of various experiences and qualifications</p>
        </div>
      );
    case 2:
      return (
        <div className="flex flex-col justify-between">
          <Image
            src="/carousel-2.svg"
            alt="vaccinations"
            width={300}
            height={300}
          />
          <p className="text-center">Book Specialists ahead of time.</p>
        </div>
      );
    case 3:
      return (
        <div className="flex flex-col justify-between">
          <Image
            src="/carousel-3.svg"
            alt="vaccinations"
            width={300}
            height={300}
          />
          <p className="text-center">Fill in for freinds annd unavailable staff and enjoy flexibility.</p>
        </div>
      );
      case 4:
        return (
          <div className="flex flex-col justify-between">
          <Image
            src="/carousel-4.svg"
            alt="vaccinations"
            width={300}
            height={300}
          />
          <p className="text-center">Faster renumeration faster than your 9-6 fulltimes roles</p>
        </div>
        );
  }
};

export default function Home() {
  const [activeStep, setActiveStep] = useState(1);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setActiveStep((prev) => (prev === 4 ? 1 : prev + 1));
  //   }, 4000); // Change this value to adjust the auto-scroll speed

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
        <section className="hidden md:flex flex-col items-center justify-center gap-8 w-1/2 h-full">
          <div className="border-main border-2 p-16 rounded-md transition-all">
            <CurrentStep step={activeStep} />
          </div>
          <Steps steps={4} activeStep={activeStep - 1} />
        </section>
      </div>
    </main>
  );
}
