import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Navbar } from "./Navbar";
import { Container } from "../../atoms";

export default {
  component: Navbar,
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = (args) => (
  <Container>
    <Navbar {...args} />
  </Container>
);

export const Default = Template.bind({});
Default.args = {};
