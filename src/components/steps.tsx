interface StepsProps {
  steps: number;
  activeStep: number;
}

const Steps = ({ steps, activeStep }: StepsProps) => {
  return (
    <section className="flex gap-2">
      {Array.from({ length: steps }).map((_, index) => (
        <div
          key={index}
          className={`rounded-full w-2 h-2 lg:w-3 lg:h-3 ${
            activeStep === index ? "bg-main" : "bg-[#D9D9D9]"
          }`}
        ></div>
      ))}
    </section>
  );
};

export default Steps;
