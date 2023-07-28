import Image from "next/image";

const UploadResume = () => {
  return (
    <section className="px-11 py-8">
      <h1 className="text-3xl text-left font-extrabold">Upload Resume</h1>
      <p className="pt-6">
        Recruiters can see this and get to know your skill and experiences
        better.
      </p>

      <label className="flex flex-col cursor-pointer rounded-3xl bg-orangeLight items-center justify-center mt-28 py-24">
        <Image src="/upload.svg" alt="upload" width={70} height={70} />
        <p className="text-lg text-orange text-center font-bold pt-4">
          Drag and drop or select file
        </p>
        <input type="file" hidden />
      </label>
    </section>
  );
};

export default UploadResume;
