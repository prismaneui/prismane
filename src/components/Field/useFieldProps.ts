// Utils
import { splitProps } from "../../utils";

const useFieldProps = (props: any) => {
  const [rest, field] = splitProps(props, [
    "variant",
    "minLength",
    "maxLength",
    "name",
    "id",
    "placeholder",
    "type",
    "readOnly",
    "icon",
    "error",
    "size",
    "validating",
    "disabled",
    "addons",
    "value",
    "defaultValue",
    "onChange",
    "onFocus",
    "onBlur",
  ]);

  return [rest, field];
};

export default useFieldProps;
