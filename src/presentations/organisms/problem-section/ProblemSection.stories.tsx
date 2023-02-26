import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ProblemSection } from "./ProblemSection";
import { Container } from "../../atoms";

export default {
  component: ProblemSection,
} as ComponentMeta<typeof ProblemSection>;

const Template: ComponentStory<typeof ProblemSection> = (args) => (
  <Container>
    <ProblemSection {...args} />
  </Container>
);

export const Default = Template.bind({});
Default.args = {};
