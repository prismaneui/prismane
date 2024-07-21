// Components
import CloseButton from "./CloseButton";

export default {
  tags: ["autodocs"],
  title: "Components/Inputs/CloseButton",
  component: CloseButton,
};

export const Default = () => {
  return <CloseButton aria-label="Close Modal" />;
};

export const Variants = () => (
  <>
    <CloseButton variant="primary" aria-label="Close Popup" />
    <CloseButton variant="secondary" aria-label="Close Popup" />
    <CloseButton variant="tertiary" aria-label="Close Popup" />
    <CloseButton variant="text" aria-label="Close Popup" />
  </>
);

export const Sizes = () => (
  <>
    <CloseButton size="xs" aria-label="Close Download Popup" />
    <CloseButton size="sm" aria-label="Close Download Popup" />
    <CloseButton size="base" aria-label="Close Download Popup" />
    <CloseButton size="md" aria-label="Close Download Popup" />
    <CloseButton size="lg" aria-label="Close Download Popup" />
  </>
);

export const Color = () => (
  <CloseButton color="orange" aria-label="Close Settings" />
);

export const Custom = () => (
  <CloseButton
    aria-label="Close Ad Popup"
    br="full"
    variant="secondary"
    color="lime"
  />
);
