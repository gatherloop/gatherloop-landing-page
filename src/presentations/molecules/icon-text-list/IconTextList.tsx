import React from "react";
import { YStack } from "tamagui";
import { IconText, IconTextProps, IconTextSize } from "../icon-text";

type IconTextListItem = Omit<
  IconTextProps,
  "size" | "isSelected" | "iconPosition"
>;

type IconTextListAlign = "left" | "center" | "right";

export type IconTextListProps = {
  items: IconTextListItem[];
  size?: IconTextSize;
  align?: IconTextListAlign;
};

const spaceMap = {
  sm: "$1.5",
  md: "$2",
  lg: "$3",
} as const;

const alignMap = {
  left: "flex-start",
  center: "center",
  right: "flex-end",
} as const;

export function IconTextList({
  items,
  size = "md",
  align = "left",
}: IconTextListProps) {
  const space = spaceMap[size];
  const alignItems = alignMap[align];
  return (
    <YStack space={space} alignItems={alignItems}>
      {items.map(({ text, src }, index) => (
        <IconText key={index} text={text} src={src} size={size} />
      ))}
    </YStack>
  );
}
