import Image from "next/image";

const RegistrationComplete = () => {
  return (
    <section className="px-11 py-8 text-center">
      <h1 className="text-3xl text-left font-extrabold">
        Registration Complete
      </h1>

      <label className="flex flex-col cursor-pointer rounded-3xl bg-orangeLight items-center justify-center mt-12 py-24">
        <Image src="/complete.svg" alt="upload" width={100} height={200} />
      </label>

      <button className="bg-main w-auto text-white p-4 rounded-tl-lg rounded-br-lg mt-20">
        Go to Login
      </button>
    </section>
  );
};

export default RegistrationComplete;
