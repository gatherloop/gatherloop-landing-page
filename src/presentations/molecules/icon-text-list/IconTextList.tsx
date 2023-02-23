import React from "react";
import { YStack } from "tamagui";
import { IconText, IconTextProps, IconTextSize } from "../icon-text";

type IconTextListItem = Omit<
  IconTextProps,
  "size" | "isSelected" | "iconPosition"
>;

export type IconTextListProps = {
  items: IconTextListItem[];
  size?: IconTextSize;
};

const spaceMap = {
  sm: "$1.5",
  md: "$2",
  lg: "$3",
} as const;

export function IconTextList({ items, size = "md" }: IconTextListProps) {
  const space = spaceMap[size];
  return (
    <YStack space={space} alignItems="flex-start">
      {items.map(({ text, src }, index) => (
        <IconText key={index} text={text} src={src} size={size} />
      ))}
    </YStack>
  );
}
