import React from "react";
// Components
import Breadcrumb from "../Breadcrumb/Breadcrumb";

export default {
  tags: ["autodocs"],
  title: "Components/Navigation/Breadcrumb",
  component: Breadcrumb,
};

export const Default = () => (
  <Breadcrumb>
    <Breadcrumb.Item href="https://www.google.com">Home</Breadcrumb.Item>
    <Breadcrumb.Separator />
    <Breadcrumb.Item href="https://www.google.com">Pages</Breadcrumb.Item>
  </Breadcrumb>
);

export const Custom_Separator = () => (
  <Breadcrumb>
    <Breadcrumb.Item href="https://www.google.com">Home</Breadcrumb.Item>
    <Breadcrumb.Separator>-</Breadcrumb.Separator>
    <Breadcrumb.Item href="https://www.google.com">Pages</Breadcrumb.Item>
  </Breadcrumb>
);

export const Foreign_Links = () => (
  <Breadcrumb>
    <Breadcrumb.Item href="https://www.google.com" foreign>
      I will open in a new tab
    </Breadcrumb.Item>
    <Breadcrumb.Separator />
    <Breadcrumb.Item href="https://www.google.com" foreign>
      I will too
    </Breadcrumb.Item>
  </Breadcrumb>
);

export const Custom_Item = () => (
  <Breadcrumb>
    <Breadcrumb.Item as="a" href="https://www.google.com" target="_blank">
      I am a normal anchor
    </Breadcrumb.Item>
    <Breadcrumb.Separator />
    <Breadcrumb.Item as="a" href="https://www.google.com" target="_blank">
      Me too
    </Breadcrumb.Item>
  </Breadcrumb>
);
