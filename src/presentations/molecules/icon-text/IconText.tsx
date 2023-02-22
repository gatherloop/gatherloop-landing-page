import React from "react";
import { Paragraph, XStack, styled } from "tamagui";
import { Icon } from "../../atoms";

export type IconTextSize = "sm" | "md" | "lg";

export type IconTextProps = {
  text: string;
  src: string;
  size?: IconTextSize;
};

const sizeMap: Record<IconTextSize, { textSize: string; iconSize: number }> = {
  sm: {
    textSize: "$4",
    iconSize: 14,
  },
  md: {
    textSize: "$5",
    iconSize: 16,
  },
  lg: {
    textSize: "$6",
    iconSize: 18,
  },
};

export function IconText({ src, text, size = "md" }: IconTextProps) {
  const { iconSize, textSize } = sizeMap[size];
  return (
    <XStack space="$1.5" alignItems="center">
      <Icon src={src} size={iconSize} />
      <Paragraph fontSize={textSize}>{text}</Paragraph>
    </XStack>
  );
}
