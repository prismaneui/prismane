import React from "react";
// Components
import Alert from "../components/Alert/Alert";
import Button from "../components/Button/Button";

export default {
  title: "Alert",
  component: Alert,
};

export const Default = () => (
  <div className="flex gap-5">
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-2">
        <h4>Error Alert</h4>
        <Alert type="error">This is an error alert!</Alert>
      </div>
      <div className="flex flex-col gap-2">
        <h4>Warning Alert</h4>
        <Alert type="warning">This is a warning alert!</Alert>
      </div>
      <div className="flex flex-col gap-2">
        <h4>Success Alert</h4>
        <Alert type="success">This is a success alert!</Alert>
      </div>
    </div>
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-2">
        <h4>Error Alert Round</h4>
        <Alert type="error" round>
          This is an error alert!
        </Alert>
      </div>
      <div className="flex flex-col gap-2">
        <h4>Warning Alert Round</h4>
        <Alert type="warning" round>
          This is a warning alert!
        </Alert>
      </div>
      <div className="flex flex-col gap-2">
        <h4>Success Alert Round</h4>
        <Alert type="success" round>
          This is a success alert!
        </Alert>
      </div>
    </div>
  </div>
);

export const No_Timeout = () => (
  <div className="flex gap-5">
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-2">
        <h4>Error Alert</h4>
        <Alert timeout={"infinite"} type="error">
          This is an error alert!
        </Alert>
      </div>
      <div className="flex flex-col gap-2">
        <h4>Warning Alert</h4>
        <Alert timeout={"infinite"} type="warning">
          This is a warning alert!
        </Alert>
      </div>
      <div className="flex flex-col gap-2">
        <h4>Success Alert</h4>
        <Alert timeout={"infinite"} type="success">
          This is a success alert!
        </Alert>
      </div>
    </div>
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-2">
        <h4>Error Alert Round</h4>
        <Alert timeout={"infinite"} type="error" round>
          This is an error alert!
        </Alert>
      </div>
      <div className="flex flex-col gap-2">
        <h4>Warning Alert Round</h4>
        <Alert timeout={"infinite"} type="warning" round>
          This is a warning alert!
        </Alert>
      </div>
      <div className="flex flex-col gap-2">
        <h4>Success Alert Round</h4>
        <Alert timeout={"infinite"} type="success" round>
          This is a success alert!
        </Alert>
      </div>
    </div>
  </div>
);

export const Custom_Action = () => (
  <div className="flex gap-5">
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-2">
        <h4>Error Alert</h4>
        <Alert
          timeout={"infinite"}
          type="error"
          action={
            <Button variant="tertiary" color="error" className="py-2">
              See more
            </Button>
          }
        >
          This is an error alert!
        </Alert>
      </div>
      <div className="flex flex-col gap-2">
        <h4>Warning Alert</h4>
        <Alert
          timeout={"infinite"}
          type="warning"
          action={
            <Button variant="tertiary" color="warning" className="py-2">
              See more
            </Button>
          }
        >
          This is a warning alert!
        </Alert>
      </div>
      <div className="flex flex-col gap-2">
        <h4>Success Alert</h4>
        <Alert
          timeout={"infinite"}
          type="success"
          action={
            <Button variant="tertiary" color="success" className="py-2">
              See more
            </Button>
          }
        >
          This is a success alert!
        </Alert>
      </div>
    </div>
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-2">
        <h4>Error Alert Round</h4>
        <Alert
          timeout={"infinite"}
          type="error"
          action={
            <Button variant="tertiary" color="error" className="py-2" round>
              See more
            </Button>
          }
          round
        >
          This is an error alert!
        </Alert>
      </div>
      <div className="flex flex-col gap-2">
        <h4>Warning Alert Round</h4>
        <Alert
          timeout={"infinite"}
          type="warning"
          action={
            <Button variant="tertiary" color="warning" className="py-2" round>
              See more
            </Button>
          }
          round
        >
          This is a warning alert!
        </Alert>
      </div>
      <div className="flex flex-col gap-2">
        <h4>Success Alert Round</h4>
        <Alert
          timeout={"infinite"}
          type="success"
          action={
            <Button variant="tertiary" color="success" className="py-2" round>
              See more
            </Button>
          }
          round
        >
          This is a success alert!
        </Alert>
      </div>
    </div>
  </div>
);
