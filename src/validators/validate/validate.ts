type Value = any;

type Validator = (v: Value) => null | string | Promise<null | string>;

type Validators = { [x: string]: Validator };

const validate = async (value: Value, validators: Validators) => {
  let error: string | null = null;

  for (const validator of Object.keys(validators)) {
    error = await validators[validator](value);

    if (error) {
      break;
    }
  }

  return error;
};

export default validate;
