import { Field } from "formik";
import Input from "../input";
import TextArea from "../textarea";
import Select from "../select";

const WorkExperience = () => {
  const options = (
    <>
      <option>RN</option>
      <option>B.Sc Nursing</option>
      <option>B.Med</option>
      <option>Midwifery</option>
      <option>Pediatrics</option>
    </>
  )
  return (
    <section className="px-11 py-8">
      <h1 className="text-3xl text-left font-extrabold">Work Experience</h1>
      <p className="pt-6">
        Yes we know you don&apos;t like forms , just one and you can upload the
        rest <br /> through your cv. That&apos;s fair right?
      </p>

      <Field name="companyName" as={Input} label="Last place you worked" />

      <div className="flex flex-col lg:flex-row lg:gap-16">
        <Field name="startDate" as={Input} type="date" label="Start date" />
        <Field name="endDate" as={Input} type="date" label="End date" />
      </div>

      <div className="form-control mb-4 lg:mb-12">
        <label className="label cursor-pointer gap-2 justify-normal">
          <input
            type="checkbox"
            // checked={checked}
          />
          <span className="label-text">Still work here</span>
        </label>
      </div>

      <Field name="responsibilities" as={TextArea} label="Responsibilities" />
      <Field name="qualification" as={Select} label="Qualification" options={options}/>
    </section>
  );
};

export default WorkExperience;
