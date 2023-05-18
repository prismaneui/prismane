// Components
import Tabs from "./Tabs";
import TabsList from "./TabsList";
import TabsTab from "./TabsTab";
import TabsPanel from "./TabsPanel";
// Utils
import { fr } from "../../utils";

export default {
  title: "Tabs",
  component: Tabs,
};

export const Default = () => (
  <Tabs defaultValue="ivan" p={fr(20)}>
    <TabsList>
      <TabsTab value="ivan">Ivan</TabsTab>
      <TabsTab value="gosho">Gosho</TabsTab>
      <TabsTab value="petkan">Petkan</TabsTab>
    </TabsList>
    <TabsPanel value="ivan">Ivan</TabsPanel>
    <TabsPanel value="gosho">Gosho</TabsPanel>
    <TabsPanel value="petkan">Petkan</TabsPanel>
  </Tabs>
);

export const Variants = () => (
  <Tabs defaultValue="ivan" variant="filled" p={fr(20)}>
    <TabsList>
      <TabsTab value="ivan">Ivan</TabsTab>
      <TabsTab value="gosho">Gosho</TabsTab>
      <TabsTab value="petkan">Petkan</TabsTab>
    </TabsList>
    <TabsPanel value="ivan">Ivan</TabsPanel>
    <TabsPanel value="gosho">Gosho</TabsPanel>
    <TabsPanel value="petkan">Petkan</TabsPanel>
  </Tabs>
);
