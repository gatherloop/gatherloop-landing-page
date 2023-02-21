import React from "react";
import { YStack } from "tamagui";

export type ContainerProps = {
  children: React.ReactNode;
};

export function Container(props: ContainerProps) {
  return (
    <YStack
      marginHorizontal="auto"
      width="100%"
      $gtXs={{ width: 660 }}
      $gtSm={{ width: 800 }}
      $gtMd={{ width: 1020 }}
      $gtLg={{ width: 1280 }}
      paddingHorizontal="$3"
    >
      {props.children}
    </YStack>
  );
}
