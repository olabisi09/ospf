export default function Home() {
  return (
    <main className="flex h-full flex-col">
      <div className="h-full flex flex-col md:flex-row justify-between items-center px-8 md:px-20 py-14 gap-32">
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
        <section className="hidden md:block w-1/2 h-full bg-main-light">
          Carousel
        </section>
      </div>
    </main>
  );
}
