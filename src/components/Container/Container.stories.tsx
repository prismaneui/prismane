import React from "react";
// Components
import Container from "./Container";
import Stack from "../Stack/Stack";

export default {
  tags: ["autodocs"],
  title: "Components/Layout/Container",
  component: Container,
};

export const Default = () => {
  return (
    <Container>
      Containing text within a well-designed container is a powerful technique
      to captivate users&apos; attention. By providing space around the text,
      the content gains prominence and becomes visually appealing. This focused
      presentation not only enhances readability but also guides users&apos;
      eyes to the essential message. A thoughtful container complements the
      overall aesthetics of the interface and creates a sense of order and
      elegance. Whether it&apos;s a subtle drop shadow or a vibrant background,
      the container elevates the text, making it stand out amidst other
      elements.
    </Container>
  );
};

export const Sizes = () => {
  return (
    <Stack cl="white">
      <Container maxSize="xs" bg="red">
        xs (360px)
      </Container>
      <Container maxSize="sm" bg="green">
        sm (384px)
      </Container>
      <Container maxSize="base" bg="teal">
        base (448px)
      </Container>
      <Container maxSize="md" bg="copper">
        md (512px)
      </Container>
      <Container maxSize="lg" bg="ruby">
        lg (576px)
      </Container>
      <Container maxSize="xl" bg="purple">
        xl (672px)
      </Container>
      <Container maxSize="2xl" bg="lime">
        2xl (768px)
      </Container>
      <Container maxSize="3xl" bg="orange">
        3xl (896px)
      </Container>
      <Container maxSize="4xl" bg="amethyst">
        4xl (1024px)
      </Container>
      <Container maxSize="5xl" bg="diamond">
        5xl (1152px)
      </Container>
      <Container maxSize="6xl" bg="primary">
        6xl (1280px)
      </Container>
      <Container maxSize="500px" bg="gray">
        Custom Size (500px)
      </Container>
    </Stack>
  );
};
