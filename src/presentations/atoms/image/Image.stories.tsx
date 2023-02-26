import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Image } from "./Image";
import { Container } from "../container";

export default {
  component: Image,
} as ComponentMeta<typeof Image>;

const Template: ComponentStory<typeof Image> = (args) => (
  <Container>
    <Image {...args} alt="" />
  </Container>
);

export const Default = Template.bind({});
Default.args = {
  width: 528,
  height: 416,
  src: "/assets/images/CoworkingSpace.png",
};
