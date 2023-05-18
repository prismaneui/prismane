// Components
import Spinner from "./Spinner";
import Center from "../Center/Center";

export default {
  title: "Spinner",
  component: Spinner,
};

export const Default = () => (
  <Center w={120} h={120}>
    <Spinner />
  </Center>
);
