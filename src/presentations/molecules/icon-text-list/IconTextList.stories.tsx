import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { IconTextList } from "./IconTextList";

export default {
  component: IconTextList,
} as ComponentMeta<typeof IconTextList>;

const Template: ComponentStory<typeof IconTextList> = (args) => (
  <IconTextList {...args} />
);

const items = [
  {
    src: "/assets/icons/Calendar.svg",
    text: "Hubungi Instagram Gatherloop untuk menentukan jadwal konsultasi",
  },
  {
    src: "/assets/icons/Users.svg",
    text: "Ceritakan tugas dan kendala yang dialami",
  },
  {
    src: "/assets/icons/Monitor.svg",
    text: "Dibimbing untuk menyelesaikan tugas tersebut",
  },
];

export const Default = Template.bind({});
Default.args = {
  items,
};

export const Small = Template.bind({});
Small.args = {
  items,
  size: "sm",
};

export const Medium = Template.bind({});
Medium.args = {
  items,
  size: "md",
};

export const Large = Template.bind({});
Large.args = {
  items,
  size: "lg",
};
