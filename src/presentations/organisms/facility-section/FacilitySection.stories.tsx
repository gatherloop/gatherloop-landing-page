import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { FacilitySection } from "./FacilitySection";
import { Container } from "../../atoms";

export default {
  component: FacilitySection,
} as ComponentMeta<typeof FacilitySection>;

const Template: ComponentStory<typeof FacilitySection> = (args) => (
  <Container>
    <FacilitySection {...args} />
  </Container>
);

export const Default = Template.bind({});
Default.args = {};
