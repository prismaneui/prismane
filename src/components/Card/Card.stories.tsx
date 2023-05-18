import React from "react";
import { Heart } from "@phosphor-icons/react";
// Components
import Card from "./Card";
import Button from "../Button/Button";
import Text from "../Text/Text";
import Image from "../Image/Image";
import Flex from "../Flex/Flex";
// Utils
import { fr } from "../../utils";

export default {
  title: "Card",
  component: Card,
};

export const Basic = () => (
  <Card w={fr(75)} p={fr(5)}>
    <div className="flex flex-col gap-2">
      <Text as="h1" cl={["base", 700]}>
        Payment
      </Text>
      <span>
        Would you like to accept this incoming payment from{" "}
        <strong>John Doe</strong> sending the sum of <strong>$405.30</strong>
      </span>
    </div>
    <Card.Footer>
      <Button variant="primary">Accept</Button>
    </Card.Footer>
  </Card>
);

export const Complex = () => (
  <Card w={fr(75)} p={fr(5)}>
    <Card.Header>
      <Image
        src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallup.net%2Fwp-content%2Fuploads%2F2019%2F09%2F952492-forest-trees-nature-landscape-tree.jpg&f=1&nofb=1&ipt=8937703eeda4cae50bd6a557404f34d306d32f2f4ca2f04329da879bbfd581b7&ipo=images"
        alt="Forest"
        w="100%"
      />
    </Card.Header>
    <div className="flex flex-col gap-2">
      <h1>Forest</h1>
      <span>
        Forests can occur wherever the temperatures rise above 10 °C in the
        warmest months and the annual precipitation is more than 200 mm.
      </span>
    </div>
    <Card.Footer gap={fr(3)}>
      <Button variant="primary">Read More</Button>
      <Button variant="secondary" action round icon={<Heart />} />
    </Card.Footer>
  </Card>
);
