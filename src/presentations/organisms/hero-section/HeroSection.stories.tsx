import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { HeroSection } from "./HeroSection";
import { Container } from "../../atoms";

export default {
  component: HeroSection,
} as ComponentMeta<typeof HeroSection>;

const Template: ComponentStory<typeof HeroSection> = (args) => (
  <Container>
    <HeroSection {...args} />
  </Container>
);

export const Default = Template.bind({});
Default.args = {};
