import { Container } from "./Container";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  component: Container,
} as ComponentMeta<typeof Container>;

export const Default: ComponentStory<typeof Container> = () => <Container />;
