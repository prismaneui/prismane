// Hooks
import { useId } from "../../hooks";
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

  if (!field.name) {
    field.name = useId();
  }

  return [rest, field];
};

export default useFieldProps;
