import React from "react";
import { TouchableOpacity } from "react-native";
import { IconText, IconTextProps } from "../icon-text";

export type MenuItemProps = {
  onPress: () => void;
} & IconTextProps;

export function MenuItem(props: MenuItemProps) {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <IconText
        src={props.src}
        text={props.text}
        isSelected={props.isSelected}
      />
    </TouchableOpacity>
  );
}
