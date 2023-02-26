import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Paragraph } from "tamagui";
import { Card } from "./Card";
import { Container } from "../container";

export default {
  component: Card,
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => (
  <Container>
    <Card {...args}>{args.children}</Card>
  </Container>
);

export const Default = Template.bind({});
Default.args = {
  children: <Paragraph>Card</Paragraph>,
};

export const FlatBorder = Template.bind({});
FlatBorder.args = {
  children: <Paragraph>Card</Paragraph>,
  borderVariant: "flat",
};
