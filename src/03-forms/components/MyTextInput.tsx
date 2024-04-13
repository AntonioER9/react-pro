import { ErrorMessage, useField } from 'formik';

interface Props {
  label: string;
  name: string;
  type?: 'text' | 'email' | 'password';
  placeholder?: string;
  [x: string]: any; //comodín por cualquier campo adicional que nos envién
}


export const MyTextInput = ({ label, ...props }: Props) => {

  const [field] = useField(props) //name, value, onChange, onBlur, onTouched

  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input className="text-input" {...field} {...props} />
      <ErrorMessage name={props.name} component="span" />
    </>
  )
}