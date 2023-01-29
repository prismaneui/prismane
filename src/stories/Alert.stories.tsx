import React from "react";
// Components
import Alert from "../components/Alert/Alert";

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
