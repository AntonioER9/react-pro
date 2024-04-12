import { ChangeEvent, useState } from 'react';


export const useForm = <T>(initState: T) => { //Hook generico el tipo de dato puede ser cualquier cosa

  const [formData, setFormData] = useState(initState);

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev, //Estado anterior
      [event.target.name]: event.target.value //Input que está cambiando en el formulario.
    }))
  }

  const resetForm = () => {
    setFormData({ ...initState })
  }

  const isValidEmail = (email: string) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }


  return {
    ...formData, //name, password, etc... para tomarlos en el componente

    // properties
    formData,

    // Methods
    isValidEmail,
    onChange,
    resetForm,
  }
}