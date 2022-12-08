// Components
import Form from "../components/Form/Form";
import TextField from "../components/TextField/TextField";
import Button from "../components/Button/Button";
import Link from "../components/Link/Link";
import Card from "../components/Card/Card";
import Switch from "../components/Switch/Switch";
// Utils
import {
  validateRequired,
  validateUsernameRegex,
  validateMin,
} from "../utils/validators";

export default {
  title: "Form",
  component: Form,
};

export const Default = () => (
  <Card className="!p-5">
    <Form
      submit={(values: any) => console.log(values)}
      className="max-w-[300px]"
    >
      <TextField
        name="username"
        placeholder="Enter username: "
        label="Username:"
      />
      <Button variant="primary" submit>
        Submit
      </Button>
    </Form>
  </Card>
);

export const Complex = () => (
  <Card width="500px" className="!p-5">
    <h1 className="text-3xl">Login</h1>
    <span className="text-base-400 mb-10">
      Enter your credentials to access your account.
    </span>
    <Form
      submit={(values: any) => console.log(values)}
      className="max-w-[500px]"
    >
      <TextField
        name="username"
        placeholder="johnny"
        label="Enter username:"
        validators={{
          required: (v: string) => validateRequired(v),
          min: (v: string) => validateMin(v, 4, "Username"),
          regex: (v: string) => validateUsernameRegex(v),
        }}
      />
      <TextField
        name="password"
        placeholder="*********"
        label="Enter password:"
        type="password"
        validators={{
          required: (v: string) => validateRequired(v),
          min: (v: string) => validateMin(v, 8, "Password"),
        }}
      />
      <div className="flex justify-between items-center mb-10">
        <span>Turn on notifications?</span>
        <Switch name="dark-mode" />
      </div>
      <Button variant="primary" className="mb-5" submit full shadow>
        Login
      </Button>
      <span className="text-sm">
        Not a member?{" "}
        <Link to="#" className="pointer-events-none">
          Sign Up
        </Link>
      </span>
    </Form>
  </Card>
);
