import { createContext } from "react";
import { UseFormGetValues, UseFormRegister } from "react-hook-form";

interface FormContextType {
  register: UseFormRegister<any>;
  errors: any;
  getValues: UseFormGetValues<any>;
}

export const FormContext = createContext<FormContextType | any>({
  register: () => {},
  errors: {},
  getValues: () => {},
});
