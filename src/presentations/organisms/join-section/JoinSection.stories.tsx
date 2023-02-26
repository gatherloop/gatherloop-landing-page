import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { JoinSection } from "./JoinSection";
import { Container } from "../../atoms";

export default {
  component: JoinSection,
} as ComponentMeta<typeof JoinSection>;

const Template: ComponentStory<typeof JoinSection> = (args) => (
  <Container>
    <JoinSection {...args} />
  </Container>
);

export const Default = Template.bind({});
Default.args = {};
