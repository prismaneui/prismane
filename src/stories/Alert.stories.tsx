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
        <Alert variant="error">This is an error alert!</Alert>
      </div>
      <div className="flex flex-col gap-2">
        <h4>Warning Alert</h4>
        <Alert variant="warning">This is a warning alert!</Alert>
      </div>
      <div className="flex flex-col gap-2">
        <h4>Success Alert</h4>
        <Alert variant="success">This is a success alert!</Alert>
      </div>
      <div className="flex flex-col gap-2">
        <h4>Success Alert</h4>
        <Alert variant="info">This is an info alert!</Alert>
      </div>
    </div>
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-2">
        <h4>Error Alert Round</h4>
        <Alert variant="error" round>
          This is an error alert!
        </Alert>
      </div>
      <div className="flex flex-col gap-2">
        <h4>Warning Alert Round</h4>
        <Alert variant="warning" round>
          This is a warning alert!
        </Alert>
      </div>
      <div className="flex flex-col gap-2">
        <h4>Success Alert Round</h4>
        <Alert variant="success" round>
          This is a success alert!
        </Alert>
      </div>
      <div className="flex flex-col gap-2">
        <h4>Info Alert</h4>
        <Alert variant="info" round>
          This is an info alert!
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
        <Alert timeout={"infinite"} variant="error">
          This is an error alert!
        </Alert>
      </div>
      <div className="flex flex-col gap-2">
        <h4>Warning Alert</h4>
        <Alert timeout={"infinite"} variant="warning">
          This is a warning alert!
        </Alert>
      </div>
      <div className="flex flex-col gap-2">
        <h4>Success Alert</h4>
        <Alert timeout={"infinite"} variant="success">
          This is a success alert!
        </Alert>
      </div>
      <div className="flex flex-col gap-2">
        <h4>Info Alert</h4>
        <Alert timeout={"infinite"} variant="info">
          This is an info alert!
        </Alert>
      </div>
    </div>
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-2">
        <h4>Error Alert Round</h4>
        <Alert timeout={"infinite"} variant="error" round>
          This is an error alert!
        </Alert>
      </div>
      <div className="flex flex-col gap-2">
        <h4>Warning Alert Round</h4>
        <Alert timeout={"infinite"} variant="warning" round>
          This is a warning alert!
        </Alert>
      </div>
      <div className="flex flex-col gap-2">
        <h4>Success Alert Round</h4>
        <Alert timeout={"infinite"} variant="success" round>
          This is a success alert!
        </Alert>
      </div>
      <div className="flex flex-col gap-2">
        <h4>Success Alert Round</h4>
        <Alert timeout={"infinite"} variant="info" round>
          This is an info alert!
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
          variant="error"
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
          variant="warning"
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
          variant="success"
          action={
            <Button variant="tertiary" color="success" className="py-2">
              See more
            </Button>
          }
        >
          This is a success alert!
        </Alert>
      </div>
      <div className="flex flex-col gap-2">
        <h4>Info Alert</h4>
        <Alert
          timeout={"infinite"}
          variant="info"
          action={
            <Button variant="tertiary" color="info" className="py-2">
              See more
            </Button>
          }
        >
          This is an info alert!
        </Alert>
      </div>
    </div>
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-2">
        <h4>Error Alert Round</h4>
        <Alert
          timeout={"infinite"}
          variant="error"
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
          variant="warning"
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
          variant="success"
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
      <div className="flex flex-col gap-2">
        <h4>Success Alert Round</h4>
        <Alert
          timeout={"infinite"}
          variant="info"
          action={
            <Button variant="tertiary" color="info" className="py-2" round>
              See more
            </Button>
          }
          round
        >
          This is an info alert!
        </Alert>
      </div>
    </div>
  </div>
);
