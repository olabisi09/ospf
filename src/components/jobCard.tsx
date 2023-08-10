import Image from "next/image";

export interface Job {
  occupation: string;
  availability: string;
  fee: string;
  status: string;
  date: string;
  department: string;
  bScRequired: boolean;
}

const JobCard = ({ job }: { job: Job }) => {
  return (
    <div className="w-full flex flex-col lg:flex-row items-start gap-4 px-6 py-6 rounded-lg border-t-4 border-b-4 border-t-orange border-b-orange shadow-md">
      <Image src="/doctor.svg" alt="user" width={100} height={100} />
      <div className="flex flex-col gap-4 w-full">
        <div className="flex justify-between">
          <h3>{job?.occupation}</h3>
          <button className="bg-transparent border-none outline-none ml-auto">
            <Image src="/bookmark.svg" alt="bookmark" width={20} height={30} />
          </button>
        </div>

        <div>
          Availability: {job?.availability} &nbsp; Fee: {job?.fee} &nbsp;
          Status:
          <span
            className={` capitalize ${
              job?.status === "closed" ? "text-red" : "text-green"
            }`}
          >
            {" "}
            {job?.status}
          </span>
        </div>
        <p>Date: {job?.date}</p>

        <span className="py-1 w-48 capitalize text-center text-main-text border border-1 border-main-text rounded-lg">
          {job?.department}
        </span>

        <div className="flex flex-col gap-2 text-center items-center ml-auto">
          <Image
            src="/badge.svg"
            alt="degree required"
            width={30}
            height={35}
          />
          <span className="text-description text-sm">B.Sc required</span>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
