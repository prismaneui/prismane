import React from "react";
// Components
import Image from ".";

export default {
  tags: ["autodocs"],
  title: "Components/Data Display/Image",
  component: Image,
};

export const Default = () => (
  <Image
    src="https://wallup.net/wp-content/uploads/2016/01/136699-coast-beach-waves-lighthouse-Oregon-landscape.jpg"
    alt="Coast Image"
  />
);

export const Object_Fit = () => (
  <Image
    h={320}
    w="100%"
    src="https://i2.wp.com/wadetours.com/wp-content/uploads/2020/01/Statue-of-Liberty-2-scaled.jpg"
    alt="Person Image"
    fit="cover"
  />
);

export const Rounded = () => (
  <Image
    h={240}
    w={240}
    src="https://i.pinimg.com/originals/e5/3c/6b/e53c6bfa45da3f684fda60c4b21b1307.jpg"
    alt="Person Image"
    fit="cover"
    br="full"
  />
);
