import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Icon } from "./Icon";

export default {
  component: Icon,
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: 50,
  src: "/assets/icons/Calendar.svg",
};
