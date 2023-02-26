import React from "react";
import { YStack } from "tamagui";
import { IconText, IconTextProps } from "../icon-text";

export type MenuItemProps = {
  onPress: () => void;
} & IconTextProps;

export function MenuItem(props: MenuItemProps) {
  return (
    <YStack cursor="pointer" onPress={props.onPress}>
      <IconText
        src={props.src}
        text={props.text}
        isSelected={props.isSelected}
      />
    </YStack>
  );
}
