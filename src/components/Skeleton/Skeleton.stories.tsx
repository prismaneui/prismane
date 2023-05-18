import React from "react";
// Components
import Skeleton from "./Skeleton";

export default {
  title: "Skeleton",
  component: Skeleton,
};

export const Circular = () => <Skeleton variant="circular" w={64} h={64} />;

export const Rounded = () => <Skeleton variant="rounded" w={200} h={20} />;

export const Rectangular = () => (
  <Skeleton variant="rectangular" w={200} h={20} />
);

export const Complex = () => (
  <div className="flex flex-col gap-5 w-52">
    <Skeleton variant="rounded" h={16} w="100%" />
    <Skeleton variant="circular" h={64} w={64} />
    <Skeleton variant="rectangular" h={32} w="100%" />
    <Skeleton variant="rounded" h={32} w="100%" />
  </div>
);
