import React from "react";
import { YStack, YStackProps } from "tamagui";

export type BorderVariant = "flat" | "rounded";

const borderVariantMap = {
  flat: "$0",
  rounded: "$5",
};

export type CardProps = {
  children: React.ReactNode;
  borderVariant?: BorderVariant;
} & YStackProps;

export const Card = ({
  children,
  borderVariant = "rounded",
  ...yStackProps
}: CardProps) => {
  return (
    <YStack
      backgroundColor="$accent"
      borderRadius={borderVariantMap[borderVariant]}
      padding="$4"
      {...yStackProps}
    >
      {children}
    </YStack>
  );
};
