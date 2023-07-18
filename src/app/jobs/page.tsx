"use client";

import Image from "next/image";
import data from "../../dummy.json";
import JobCard from "@/components/jobCard";

export default function Jobs() {
  return (
    <main className="lg:mx-12">
      <h1 className="pl-6 flex gap-2 uppercase text-base font-medium mt-12 mb-6">
        <Image width={35} height={20} src="/filter.svg" alt="filter" /> Filters
      </h1>

      <div className="flex gap-16">
        <section className="hidden lg:block h-full px-8 py-16 rounded-lg shadow-md w-1/4 flex-none">
          <div className="form-control w-full max-w-xs mb-6">
            <label className="label">
              <span className="label-text">Keywords</span>
            </label>
            <input
              type="text"
              placeholder="Eg. Registered Nurse"
              className="input input-bordered w-full max-w-xs border-gray-light focus:outline-gray-light"
            />
          </div>

          <div className="form-control w-full max-w-xs mb-6">
            <label className="label">
              <span className="label-text">Qualification</span>
            </label>
            <select className="select select-bordered border-gray-light focus:outline-gray-light">
              <option>RN</option>
              <option>B.Sc Nursing</option>
              <option>B.Med</option>
              <option>Midwifery</option>
              <option>Pediatrics</option>
            </select>
          </div>

          <div className="form-control mb-12">
            <label>Job Type</label>
            <label className="label cursor-pointer gap-2 justify-normal">
              <input
                type="checkbox"
                // checked={checked}
              />
              <span className="label-text">Temporary</span>
            </label>
            <label className="label cursor-pointer gap-2 justify-normal">
              <input
                type="checkbox"
                // checked={checked}
              />
              <span className="label-text">Permanent</span>
            </label>
          </div>

          <div className="form-control mb-28">
            <label>Featured Shifts</label>
            <label className="label cursor-pointer gap-2 justify-normal">
              <input type="checkbox" />
              <span className="label-text">Show featured jobs only</span>
            </label>
          </div>

          <button className="py-1 w-full uppercase text-main-text border border-1 border-main rounded-lg">
            Clear all filters
          </button>
        </section>

        <section className="mx-4 lg:mx-0 lg:py-16 w-full flex flex-col gap-10">
          {data?.map((job, index) => (
            <JobCard key={index} job={job} />
          ))}
        </section>
      </div>
    </main>
  );
}
