// Hooks
import { useId } from "../../hooks";
// Utils
import { splitProps } from "../../utils";
// Types
import { PrismaneFieldComponent } from "../../types";

const useFieldProps = (props: any): [any, PrismaneFieldComponent] => {
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
    "checked",
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
