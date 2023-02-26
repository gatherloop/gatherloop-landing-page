import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { LocationSection } from "./LocationSection";
import { Container } from "../../atoms";

export default {
  component: LocationSection,
} as ComponentMeta<typeof LocationSection>;

const Template: ComponentStory<typeof LocationSection> = (args) => (
  <Container>
    <LocationSection {...args} />
  </Container>
);

export const Default = Template.bind({});
Default.args = {};
