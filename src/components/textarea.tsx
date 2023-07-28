import { FieldHookConfig, useField } from "formik";

interface TextAreaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  children: string;
  label: string;
}

const TextArea: React.FC<TextAreaProps & FieldHookConfig<string> & any> = (
  props
) => {
  const [field, meta] = useField(props);
  const { label, children, ...rest } = props;

  return (
    <div className="form-control w-auto mb-6">
      <label className="label">
        <span className="label-text">{label}</span>
      </label>
      <textarea
        {...rest}
        {...field}
        //maxLength={300}
        className="rounded-lg p-4 w-full resize-none h-44 bg-orangeLight border-0 focus:outline-orange"
      >
        {children}
      </textarea>
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

export default TextArea;
