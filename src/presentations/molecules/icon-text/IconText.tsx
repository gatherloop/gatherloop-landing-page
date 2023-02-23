import React from "react";
import { Paragraph, XStack, YStack } from "tamagui";
import { Icon } from "../../atoms";

export type IconTextSize = "sm" | "md" | "lg";
export type IconPosition = "top" | "bottom" | "left" | "right";

export type IconTextProps = {
  text: string;
  src: string;
  isSelected?: boolean;
  size?: IconTextSize;
  iconPosition?: IconPosition;
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

const wrapperMap: Record<IconPosition, typeof XStack | typeof YStack> = {
  left: XStack,
  right: XStack,
  top: YStack,
  bottom: YStack,
};

export function IconText({
  src,
  text,
  isSelected,
  iconPosition = "left",
  size = "md",
}: IconTextProps) {
  const Wrapper = wrapperMap[iconPosition];
  const { iconSize, textSize } = sizeMap[size];

  const renderIcon = () => <Icon src={src} size={iconSize} />;
  const renderText = () => (
    <Paragraph fontSize={textSize} fontWeight={isSelected ? "600" : "400"}>
      {text}
    </Paragraph>
  );

  return (
    <Wrapper space="$2" alignItems="center" justifyContent="center">
      {iconPosition === "left" || iconPosition === "top" ? renderIcon() : null}
      {renderText()}
      {iconPosition === "right" || iconPosition === "bottom"
        ? renderIcon()
        : null}
    </Wrapper>
  );
}
