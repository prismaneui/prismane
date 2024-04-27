// Components
import Skeleton from "./Skeleton";
import Stack from "../Stack";
// Utils
import { fr } from "../../utils";

export default {
  tags: ["autodocs"],
  title: "Components/Feedback/Skeleton",
  component: Skeleton,
};

export const Default = () => (
  <Stack>
    <Skeleton h={fr(6)} />
    <Skeleton h={fr(6)} />
    <Skeleton h={fr(6)} />
  </Stack>
);

export const Variants = () => (
  <>
    <Skeleton w={120} h={120} variant="circular" />
    <Skeleton w={240} h={120} variant="rounded" />
    <Skeleton w={240} h={120} variant="rectangular" />
  </>
);

export const Circle_And_Text_Example = () => (
  <Stack>
    <Skeleton w={64} h={64} variant="circular" />
    <Skeleton w={240} h={20} variant="rounded" />
    <Skeleton w={240} h={20} variant="rounded" />
    <Skeleton w={240} h={20} variant="rounded" />
  </Stack>
);
