import { createContext, useState } from "react";

const FormContext = createContext();

// eslint-disable-next-line react/prop-types
export function FormProvider({ children }) {
  const [formData, setFormData] = useState();
  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <FormContext.Provider value={{ formData, setFormData }}>
      {children}
    </FormContext.Provider>
  );
}

export default FormContext;
