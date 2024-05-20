import React from "react";
// Components
import Link from "./Link";
import Stack from "../Stack/Stack";

export default {
  tags: ["autodocs"],
  title: "Components/Navigation/Link",
  component: Link,
};

export const Default = () => <Link href="#">Link</Link>;

export const Underline = () => (
  <Stack>
    <Link href="#" underline="none">
      No Underline
    </Link>
    <Link href="#" underline="hover">
      Hover for Underline
    </Link>
    <Link href="#" underline="always">
      Always Underlined
    </Link>
  </Stack>
);

export const Foreign = () => (
  <Link href="https://www.google.com" foreign>
    I will open in a blank page
  </Link>
);

export const Before_Function = () => (
  <Link
    before={async () => {
      console.log("Redirecting...");
    }}
    href="https://www.google.com"
    foreign
  >
    I will log to console, before redirecting
  </Link>
);

export const Color = () => (
  <Stack>
    <Link href="#" cl="red">
      Red
    </Link>
    <Link href="#" cl="orange">
      Orange
    </Link>
    <Link href="#" cl="lime">
      Lime
    </Link>
    <Link href="#" cl="green">
      Green
    </Link>
    <Link href="#" cl="base">
      Base
    </Link>
  </Stack>
);

export const Underline_Color = () => (
  <Link
    href="#"
    sx={{
      textDecorationColor: "lime",
    }}
  >
    I have a different underline color
  </Link>
);

export const Underline_Thickness = () => (
  <Link
    href="#"
    sx={{
      textDecorationThickness: "4px",
    }}
  >
    I have a thicker underline
  </Link>
);

export const Underline_Styles = () => (
  <Link
    href="#"
    sx={{
      textDecorationStyle: "wavy",
    }}
  >
    I have a wavy underline
  </Link>
);
