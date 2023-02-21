import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Paragraph } from "tamagui";
import { Container } from "./Container";

export default {
  component: Container,
} as ComponentMeta<typeof Container>;

const Template: ComponentStory<typeof Container> = (args) => (
  <Container {...args}>{args.children}</Container>
);

export const Default = Template.bind({});
Default.args = {
  children: <Paragraph borderWidth={1}>Container</Paragraph>,
};
