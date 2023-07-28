import { FieldHookConfig, useField } from "formik";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  grow?: boolean;
  type?: string;
}

const Input: React.FC<InputProps & FieldHookConfig<string> & any> = (props) => {
  const [field, meta] = useField(props);
  const { label, grow, type, ...rest } = props;

  return (
    <div className={`form-control w-auto mb-6 ${grow ? "grow" : ""}`}>
      <label className="label">
        <span className="label-text">{label}</span>
      </label>
      <input
        {...rest}
        {...field}
        type={type || "text"}
        className="input input-bordered w-full bg-orangeLight border-0 focus:outline-orange"
      />
      {
        /**validation error message */
        meta.touched && meta.error ? (
          <menu className="flex gap-1 text-red">
            <span className="text-red">&#42;</span>
            {meta.error.toString()}
          </menu>
        ) : null
      }
    </div>
  );
};

export default Input;
