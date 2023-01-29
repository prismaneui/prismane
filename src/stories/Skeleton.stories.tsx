import React from "react";
// Components
import Skeleton from "../components/Skeleton/Skeleton";

export default {
  title: "Skeleton",
  component: Skeleton,
};

export const Circular = () => (
  <Skeleton variant="circular" width="64px" height="64px" />
);

export const Rounded = () => (
  <Skeleton variant="rounded" width="200px" height="20px" />
);

export const Rectangular = () => (
  <Skeleton variant="rectangular" width="200px" height="20px" />
);

export const Complex = () => (
  <div className="flex flex-col gap-5 w-52">
    <Skeleton variant="rounded" height="16px" width="100%" />
    <Skeleton variant="circular" height="64px" width="64px" />
    <Skeleton variant="rectangular" height="32px" width="100%" />
    <Skeleton variant="rounded" height="32px" width="100%" />
  </div>
);
