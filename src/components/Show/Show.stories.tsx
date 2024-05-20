import React from "react";
// Components
import Show from "./Show";
import Stack from "../Stack";

export default {
  tags: ["autodocs"],
  title: "Components/Layout/Show",
  component: Show,
};

export const Default = () => (
  <Show>
    Shown over base (1024px) breakpoint! Resize your screen to hide if shown.
  </Show>
);

export const Sizes = () => (
  <Stack>
    <Show breakpoint="xs">Shown over xs (640px) breakpoint!</Show>
    <Show breakpoint="sm">Shown over sm (768px) breakpoint!</Show>
    <Show breakpoint="base">Shown over base (1024px) breakpoint!</Show>
    <Show breakpoint="md">Shown over md (1280px) breakpoint!</Show>
    <Show breakpoint="lg">Shown over lg (1536px) breakpoint!</Show>
    <Show breakpoint="2000px">Shown over 2000px!</Show>
  </Stack>
);
