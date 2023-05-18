// Components
import Initials from "./Initials";

export default {
  title: "Initials",
  component: Initials,
};

export const Default = () => (
  <div className="flex gap-2">
    <h1>Initials for "Martin Petrov" are: </h1>
    <Initials name="Martin Petrov" />
  </div>
);
