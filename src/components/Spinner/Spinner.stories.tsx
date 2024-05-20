import React from "react";
// Components
import Spinner from "./Spinner";

export default {
  tags: ["autodocs"],
  title: "Components/Feedback/Spinner",
  component: Spinner,
};

export const Default = () => <Spinner />;

export const Sizes = () => (
  <>
    <Spinner size="xs" />
    <Spinner size="sm" />
    <Spinner size="base" />
    <Spinner size="md" />
    <Spinner size="lg" />
  </>
);

export const Color = () => <Spinner color="primary" />;
