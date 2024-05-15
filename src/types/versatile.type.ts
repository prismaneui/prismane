export type Versatile = React.ElementType;

export type PrismaneVersatileRef<E extends Versatile = "div"> =
  React.ComponentPropsWithRef<E>["ref"];

export type AsProp<E extends Versatile = "div"> = {
  as?: E | React.ElementType;
};

export type VersatileProps<
  E extends Versatile = "div",
  P = Record<string, never>
> = React.PropsWithChildren<P & AsProp<E>> &
  Omit<React.ComponentPropsWithoutRef<E>, keyof P>;

export type PrismaneVersatile<
  E extends Versatile = "div",
  P = Record<string, never>
> = VersatileProps<E, Omit<P, keyof AsProp<E>>> & {
  ref?: PrismaneVersatileRef<E | Versatile>;
};

export type PrismaneVersatileComponent<Props = Record<string, never>> = (
  props: Props
) => any;
