import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { IconText } from "./IconText";

export default {
  component: IconText,
} as ComponentMeta<typeof IconText>;

const Template: ComponentStory<typeof IconText> = (args) => (
  <IconText {...args} />
);

export const Default = Template.bind({});
Default.args = {
  src: "/assets/icons/Calendar.svg",
  text: "Set a Schedule",
};

export const IsSelected = Template.bind({});
IsSelected.args = {
  src: "/assets/icons/Calendar.svg",
  text: "Set a Schedule",
  isSelected: true,
};

export const Large = Template.bind({});
Large.args = {
  src: "/assets/icons/Calendar.svg",
  text: "Set a Schedule",
  size: "lg",
};

export const Medium = Template.bind({});
Medium.args = {
  src: "/assets/icons/Calendar.svg",
  text: "Set a Schedule",
  size: "md",
};

export const Small = Template.bind({});
Small.args = {
  src: "/assets/icons/Calendar.svg",
  text: "Set a Schedule",
  size: "sm",
};

export const LeftIcon = Template.bind({});
LeftIcon.args = {
  src: "/assets/icons/Calendar.svg",
  text: "Set a Schedule",
  iconPosition: "left",
};

export const RightIcon = Template.bind({});
RightIcon.args = {
  src: "/assets/icons/Calendar.svg",
  text: "Set a Schedule",
  iconPosition: "right",
};

export const TopIcon = Template.bind({});
TopIcon.args = {
  src: "/assets/icons/Calendar.svg",
  text: "Set a Schedule",
  iconPosition: "top",
};

export const BottomIcon = Template.bind({});
BottomIcon.args = {
  src: "/assets/icons/Calendar.svg",
  text: "Set a Schedule",
  iconPosition: "bottom",
};
