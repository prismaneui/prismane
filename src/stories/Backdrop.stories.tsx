import React from "react";
// Components
import Backdrop from "../components/Backdrop/Backdrop";
import Card from "../components/Card/Card";
import Button from "../components/Button/Button";

export default {
  title: "Backdrop",
  component: Backdrop,
};

export const Default = () => (
  <Backdrop>
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
  </Backdrop>
);
