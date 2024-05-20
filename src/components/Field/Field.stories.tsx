import React from "react";
import { EnvelopeSimple } from "@phosphor-icons/react";
// Components
import Field from "./Field";
import Stack from "../Stack/Stack";

export default {
  tags: ["autodocs"],
  title: "Components/Inputs/Field",
  component: Field,
};

export const Default = () => <Field placeholder="Simple Field" />;

export const Variants = () => (
  <Stack>
    <Field variant="outlined" placeholder="Outlined Field" />
    <Field variant="filled" placeholder="Filled Field" />
    <Field variant="underlined" placeholder="Underlined Field" />
    <Field variant="unstyled" placeholder="Unstyled Field" />
  </Stack>
);

export const Sizes = () => (
  <Stack>
    <Field size="xs" placeholder="xs" />
    <Field size="sm" placeholder="sm" />
    <Field size="base" placeholder="base" />
    <Field size="md" placeholder="md" />
    <Field size="lg" placeholder="lg" />
  </Stack>
);

export const Disabled = () => (
  <Field placeholder="This field is disabled" disabled />
);

export const Validating = () => (
  <Field placeholder="This field is validating" validating />
);

export const Icon = () => (
  <Field icon={<EnvelopeSimple />} placeholder="Enter Your Email" />
);

export const Addon = () => (
  <Field addons={<Field.Addon>.com</Field.Addon>} placeholder="mysite" />
);

export const Addon_Positions = () => (
  <Field
    addons={
      <>
        <Field.Addon position="left">www.</Field.Addon>
        <Field.Addon position="right">.com</Field.Addon>
      </>
    }
    placeholder="mysite"
  />
);

export const Advanced_Composition = () => (
  <Field.Wrapper>
    <Field.Label htmlFor="hashtag">Hashtag:</Field.Label>
    <Field
      name="hashtag"
      addons={<Field.Addon position="left">#</Field.Addon>}
      placeholder="Enter hashtag"
    />
    <Field.Error>Some static error!</Field.Error>
  </Field.Wrapper>
);

export const Type = () => (
  <Field placeholder="This is a number field" type="number" />
);
