export type PrismaneWithInternal<
  Props,
  Internal extends Record<string, any>
> = React.ForwardRefExoticComponent<Props> & {
  [K in keyof Internal]: React.ForwardRefExoticComponent<Internal[K]>;
};
