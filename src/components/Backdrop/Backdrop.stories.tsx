// Components
import Backdrop from "./Backdrop";
import Card from "../Card/Card";
import Button from "../Button/Button";
import Flex from "../Flex/Flex";
// Utils
import { fr } from "../../utils";

export default {
  title: "Backdrop",
  component: Backdrop,
};

export const Default = () => (
  <Backdrop>
    <Card w={fr(75)} p={fr(5)}>
      <Flex direction="column" gap={fr(2)}>
        <h1>Payment</h1>
        <span>
          Would you like to accept this incoming payment from{" "}
          <strong>John Doe</strong> sending the sum of <strong>$405.30</strong>
        </span>
      </Flex>
      <Card.Footer>
        <Button variant="primary">Accept</Button>
      </Card.Footer>
    </Card>
  </Backdrop>
);
