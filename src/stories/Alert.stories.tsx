import React from "react";
// Components
import Alert from "../components/Alert/Alert";

export default {
  title: "Alert",
  component: Alert,
};

export const Default = () => (
  <div className="flex flex-col w-full h-[100vh] justify-center items-center gap-5">
    <Alert type="error">This is an error alert!</Alert>
    <Alert type="warning">This is a warning alert!</Alert>
    <Alert type="success">This is a success alert!</Alert>
  </div>
);
