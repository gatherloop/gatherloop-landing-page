import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ProgramSection } from "./ProgramSection";
import { Container } from "../../atoms";

export default {
  component: ProgramSection,
} as ComponentMeta<typeof ProgramSection>;

const Template: ComponentStory<typeof ProgramSection> = (args) => (
  <Container>
    <ProgramSection {...args} />
  </Container>
);

export const Default = Template.bind({});
Default.args = {};
