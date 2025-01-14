import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { BridgeOverview } from "./BridgeOverview";

export default {
  title: "PoCs/BridgeOverview",
  component: BridgeOverview,
} as ComponentMeta<typeof BridgeOverview>;

export const GettingStarted: ComponentStory<typeof BridgeOverview> = () => (
  <BridgeOverview />
);
