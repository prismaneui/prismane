// Components
import { Stack, Text, Center } from "../../components";
// Hooks
import useNetworkStatus from "./useNetworkStatus";

export default {
  tags: ["autodocs"],
  title: "Hooks/Miscellaneous/useNetworkStatus",
  component: useNetworkStatus,
};

export const Default = () => {
  const online = useNetworkStatus();

  return (
    <Center as={Stack}>
      <Text as="h1">Your status:</Text>
      <Text>You network is: {online ? "online" : "offline"}</Text>
    </Center>
  );
};
