import { Formik, Form } from 'formik';
import { MySelect, MyTextInput } from '../components';
import formJson from '../data/custom-form.json'
import * as Yup from 'yup';


const initialValues: { [key: string]: any } = {};
const requiredFields: { [key: string]: any } = {}

for (const input of formJson) { //Recorremos la respuesta http para crear un arreglo con los campos
  initialValues[input.name] = input.value;

  if (!input.validations) continue; //Si el objeto no existe dentro del json que continue el ciclo for

  let schema = Yup.string()

  for (const rule of input.validations) {
    if (rule.type === 'required') {
      schema = schema.required('Este campo es requerido');
    }

    if (rule.type === 'minLength') {
      schema = schema.min((rule as any).value || 2, `Mínimo de ${(rule as any).value || 2} caracteres`);
    }

    if (rule.type === 'email') {
      schema = schema.email(`Revise el formato del email`);
    }
  }

  requiredFields[input.name] = schema; //Le asignamos las validaciones del campo que esta recorriendo
}

const validationSchema = Yup.object({ ...requiredFields }); //Creamos el validationSchema a partir de los campos requeridos


export const DynamicForm = () => {
  return (
    <div>
      <h1>Dynamic Form</h1>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log(values)
        }}
      >
        {(formik) => (
          <Form noValidate>
            {formJson.map(({ type, name, placeholder, label, options }) => {

              if (type === 'input' || type === 'password' || type === 'email') { //Si el campo es tipo input
                return <MyTextInput
                  key={name}
                  type={(type as any)}
                  name={name}
                  label={label}
                  placeholder={placeholder} />

              } else if (type === 'select') { //Si el campo es tipo Select
                return (
                  <MySelect
                    key={name}
                    label={label}
                    name={name}
                  >
                    <option value="">Select an option</option>
                    { //Recorremos las opciones y devolvemos un jsx con las opciones mediante un map
                      options?.map(({ id, label }) => (
                        <option key={id} value={id}>{label}</option>
                      ))
                    }
                  </MySelect>
                )
              }
              throw new Error(`El type: ${type}, no es soportado`);
            })}

            <button type="submit">Submit</button>

          </Form>
        )}
      </Formik>

    </div>
  )
}