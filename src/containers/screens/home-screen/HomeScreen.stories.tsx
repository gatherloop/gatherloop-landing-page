import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { HomeScreen } from "./HomeScreen";

export default {
  component: HomeScreen,
} as ComponentMeta<typeof HomeScreen>;

const Template: ComponentStory<typeof HomeScreen> = (args) => (
  <HomeScreen {...args} />
);

export const Default = Template.bind({});
Default.args = {};
