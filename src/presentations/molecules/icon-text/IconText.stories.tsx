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
  src: "/assets/icons/mic.svg",
  text: "lets talk",
};

export const Large = Template.bind({});
Large.args = {
  src: "/assets/icons/mic.svg",
  text: "lets talk",
  size: "lg",
};

export const Medium = Template.bind({});
Medium.args = {
  src: "/assets/icons/mic.svg",
  text: "lets talk",
  size: "md",
};

export const Small = Template.bind({});
Small.args = {
  src: "/assets/icons/mic.svg",
  text: "lets talk",
  size: "sm",
};
