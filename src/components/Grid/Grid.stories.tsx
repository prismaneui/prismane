import { FC } from "react";
import { Meta } from "@storybook/react";
// Components
import Grid from "./Grid";
// Utils
import { fr } from "../../utils";

export default {
  title: "Grid",
  component: Grid,
} as Meta;

export const Default: FC = () => {
  return (
    <Grid gap={3} templateColumns={8} templateRows={4} h={fr(120)} w={fr(120)}>
      <Grid.Item
        columnStart={1}
        columnEnd={3}
        rowStart={1}
        rowEnd={2}
        h={fr(10)}
        w="100%"
        bg="primary"
      ></Grid.Item>
      <Grid.Item
        columnStart={3}
        columnEnd={8}
        rowStart={1}
        rowEnd={2}
        h={fr(10)}
        w="100%"
        bg="primary"
      ></Grid.Item>
      <Grid.Item
        columnStart={2}
        columnEnd={8}
        rowStart={2}
        rowEnd={4}
        h={fr(10)}
        w="100%"
        bg="primary"
      ></Grid.Item>
    </Grid>
  );
};

export const Areas: FC = () => {
  return (
    <Grid
      templateAreas={`"header header"
              "nav main"
              "nav footer"`}
      templateRows={3}
      templateColumns={2}
      h="200px"
      w="600px"
      gap="4px"
    >
      <Grid.Item pl="8px" bg="orange" area={"header"}>
        Header
      </Grid.Item>
      <Grid.Item pl="8px" bg="pink" area={"nav"}>
        Nav
      </Grid.Item>
      <Grid.Item pl="8px" bg="green" area={"main"}>
        Main
      </Grid.Item>
      <Grid.Item pl="8px" bg="blue" area={"footer"}>
        Footer
      </Grid.Item>
    </Grid>
  );
};

export const Spanning: FC = () => {
  return (
    <Grid templateColumns={3} templateRows={4} w="100%" h={fr(50)} gap={fr(2)}>
      <Grid.Item rowSpan={3} columnSpan={1} bg="lime" />
      <Grid.Item columnSpan={2} bg="teal" />
      <Grid.Item columnSpan={2} bg="teal" />
      <Grid.Item columnSpan={3} bg="lime" />
    </Grid>
  );
};
