import React from "react";
import { Button, Paragraph, YStack } from "tamagui";

type ContainerProps = {};

export function Container(props: ContainerProps) {
  return (
    <YStack space="$5">
      <Paragraph>lorem ipsum dolor sit amet</Paragraph>
      <Button>Press Me</Button>
    </YStack>
  );
}
