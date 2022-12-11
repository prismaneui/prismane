import { createContext } from "react";
import { Control, UseFormRegister } from "react-hook-form";

interface FormContextType {
  register: UseFormRegister<any>;
  errors: any;
  control: Control;
  options: any;
}

export const FormContext = createContext<FormContextType | any>({
  register: () => {},
  errors: {},
  control: {},
  options: {},
});
