import { Stack, Center, Flex, Button, Text } from "../../components";
import { fr } from "../../utils";
import useSorting from "./useSorting";

export default {
  title: "useSorting",
  component: useSorting,
};

export const Default = () => {
  const items = [
    { name: "Apple", quantity: 10 },
    { name: "Banana", quantity: 5 },
    { name: "Cherry", quantity: 15 },
    { name: "Date", quantity: 8 },
  ];

  const { sorted, key, direction, setKey, toggleDirection } = useSorting(
    items,
    "name"
  );

  return (
    <Stack as={Center}>
      <Button onClick={() => setKey("name")}>Sort by Name</Button>
      <Button onClick={() => setKey("quantity")}>Sort by Quantity</Button>
      <Button onClick={toggleDirection}>Toggle Order</Button>
      <Stack mt={fr(6)}>
        {sorted.map((item, index) => (
          <Text key={index}>
            {item.name} - {item.quantity}
          </Text>
        ))}
      </Stack>
      <Text>
        Sorting by: <Text as="strong">{key}</Text> (Order:{" "}
        <Text as="strong">{direction}</Text>)
      </Text>
    </Stack>
  );
};
