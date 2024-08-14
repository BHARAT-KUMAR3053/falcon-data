import { FieldHookConfig, useField } from 'formik';
import React from 'react';

interface TextAreaProps {
  label?: string;
  rows?: number;
  placeholder?: string;
  name?: string;
}

const TextArea: React.FC<TextAreaProps> = ({ label, name, rows, placeholder, ...props }) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [field, meta] = useField(props as string | FieldHookConfig<any>);

  return (
    <div>
      {label && <label>{label}</label>}
      <textarea {...field} {...props} rows={rows} placeholder={placeholder} name={name} />
      {meta.touched && meta.error ? <div style={{ color: 'red' }}>{meta.error}</div> : null}
    </div>
  );
};

export default TextArea;
