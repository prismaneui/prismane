// Components
import Hide from "./Hide";
import Stack from "../Stack/Stack";

export default {
  tags: ["autodocs"],
  title: "Components/Layout/Hide",
  component: Hide,
};

export const Default = () => (
  <Hide>
    Hidden over base (1024px) breakpoint! Resize your screen to reveal if
    hidden.
  </Hide>
);

export const Sizes = () => (
  <Stack>
    <Hide breakpoint="xs">Hidden over xs (640px) breakpoint!</Hide>
    <Hide breakpoint="sm">Hidden over sm (768px) breakpoint!</Hide>
    <Hide breakpoint="base">Hidden over base (1024px) breakpoint!</Hide>
    <Hide breakpoint="md">Hidden over md (1280px) breakpoint!</Hide>
    <Hide breakpoint="lg">Hidden over lg (1536px) breakpoint!</Hide>
    <Hide breakpoint="2000px">Hidden over 2000px!</Hide>
  </Stack>
);
