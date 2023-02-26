import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { MenuItem } from "./MenuItem";

export default {
  component: MenuItem,
} as ComponentMeta<typeof MenuItem>;

const Template: ComponentStory<typeof MenuItem> = (args) => (
  <MenuItem {...args} />
);

export const Default = Template.bind({});
Default.args = {
  onPress: () => console.log("clicked"),
  src: "/assets/icons/Calendar.svg",
  text: "Set A Schedule",
};

export const IsSelected = Template.bind({});
IsSelected.args = {
  onPress: () => console.log("clicked"),
  src: "/assets/icons/Calendar.svg",
  text: "Set A Schedule",
  isSelected: true,
};
