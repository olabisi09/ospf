import { FieldHookConfig, useField } from "formik";

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options: React.ReactNode;
  label: string;
}

const Select: React.FC<SelectProps & FieldHookConfig<string> & any> = (props) => {
  const [field, meta] = useField(props);
  const { label, options, ...rest } = props;
  
  return (
    <div className="form-control w-full max-w-xs mb-6">
        <label className="label">
          <span className="label-text">{label}</span>
        </label>
        <select {...field} {...rest} className="select select-bordered border-gray-light focus:outline-gray-light">
          {options}
        </select>
      </div>
  )
}

export default Select;