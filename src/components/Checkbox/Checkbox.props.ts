import { ReactNode } from "react";
// Components Props
import { FlexProps } from "@components/Flex";
import { TransitionProps } from "@components/Transition";
// Types
import { PrismaneFieldComponent, PrismaneProps } from "@types";

export type CheckboxProps = PrismaneProps<
  { indeterminate?: boolean; icon?: ReactNode },
  FlexProps & TransitionProps & PrismaneFieldComponent
>;
