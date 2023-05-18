import { Meta } from "@storybook/react";
// Components
import Breadcrumb from "../Breadcrumb/Breadcrumb";

export default {
  title: "Breadcrumb",
  component: Breadcrumb,
} as Meta;

export const Default = () => (
  <Breadcrumb>
    <Breadcrumb.Item>Home</Breadcrumb.Item>
    <Breadcrumb.Separator />
    <Breadcrumb.Item>Pages</Breadcrumb.Item>
  </Breadcrumb>
);
