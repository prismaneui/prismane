import React from "react";
import { Heart } from "phosphor-react";
// Components
import Card from "../components/Card/Card";
import Button from "../components/Button/Button";

export default {
  title: "Card",
  component: Card,
};

export const Basic = () => (
  <Card
    actions={<Button variant="primary">Accept</Button>}
    width="300px"
    className="!p-5"
  >
    <div className="flex flex-col gap-2">
      <h1>Payment</h1>
      <span>
        Would you like to accept this incoming payment from{" "}
        <strong>John Doe</strong> sending the sum of <strong>$405.30</strong>
      </span>
    </div>
  </Card>
);

export const Complex = () => (
  <Card
    width="300px"
    header={
      <img
        src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallup.net%2Fwp-content%2Fuploads%2F2019%2F09%2F952492-forest-trees-nature-landscape-tree.jpg&f=1&nofb=1&ipt=8937703eeda4cae50bd6a557404f34d306d32f2f4ca2f04329da879bbfd581b7&ipo=images"
        alt="Forest"
        className="w-full object-cover"
      />
    }
    actions={
      <div className="flex w-full justify-between items-center">
        <Button variant="primary">Read More</Button>
        <Button variant="secondary" action round icon={<Heart />} />
      </div>
    }
    className="!p-5"
  >
    <div className="flex flex-col gap-2">
      <h1>Forest</h1>
      <span>
        Forests can occur wherever the temperatures rise above 10 °C in the
        warmest months and the annual precipitation is more than 200 mm.
      </span>
    </div>
  </Card>
);
