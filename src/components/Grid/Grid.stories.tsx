// Components
import Grid from "./Grid";
// Utils
import { fr } from "../../utils";

export default {
  tags: ["autodocs"],
  title: "Components/Layout/Grid",
  component: Grid,
};

export const Default = () => {
  return (
    <Grid w="100%" h={fr(40)} gap={fr(2)}>
      <Grid.Item bg="primary" cl="white">
        1
      </Grid.Item>
      <Grid.Item bg="primary" cl="white">
        2
      </Grid.Item>
      <Grid.Item bg="primary" cl="white">
        3
      </Grid.Item>
      <Grid.Item bg="primary" cl="white">
        4
      </Grid.Item>
    </Grid>
  );
};

export const Columns = () => {
  return (
    <Grid templateColumns={3} w="100%" h={fr(20)} gap={fr(2)}>
      <Grid.Item bg="primary" cl="white" />
      <Grid.Item bg="primary" cl="white" />
      <Grid.Item bg="primary" cl="white" />
    </Grid>
  );
};

export const Spanning = () => {
  return (
    <Grid templateColumns={3} templateRows={4} w="100%" h={fr(50)} gap={fr(2)}>
      <Grid.Item rowSpan={3} columnSpan={1} bg="lime" />
      <Grid.Item columnSpan={2} bg="teal" />
      <Grid.Item columnSpan={2} bg="teal" />
      <Grid.Item columnSpan={3} bg="lime" />
    </Grid>
  );
};

export const Start_And_End_Positions = () => (
  <Grid templateColumns={3} w="100%" h={fr(10)} gap={fr(2)}>
    <Grid.Item columnStart={1} columnEnd={2} bg="lime" />
    <Grid.Item columnStart={3} columnEnd={4} bg="teal" />
  </Grid>
);

export const Areas = () => (
  <Grid
    templateAreas={`"header header header"
                  "nav main main"
                  "nav footer footer"`}
    templateRows={"40px 1fr 40px"}
    templateColumns={"120px 1fr"}
    h={fr(60)}
    w="100%"
    gap={fr(1)}
    cl="white"
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
