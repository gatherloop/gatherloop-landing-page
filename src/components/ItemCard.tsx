import React from "react";
import {
  Anchor,
  Button,
  H3,
  H4,
  Paragraph,
  XStack,
  YStack,
  YStackProps,
} from "tamagui";
import { IconProps } from "@tamagui/lucide-icons/types/IconProps";

export type ItemCardProps = {
  title: string;
  tagline?: string;
  description: string;
  icon?: React.ReactNode;
  isTransparent?: boolean;
  button?: {
    title: string;
    href: string;
    icon?: IconProps;
  };
} & YStackProps;

export function ItemCard({
  title,
  description,
  icon,
  tagline,
  isTransparent,
  button,
  ...yStackProps
}: ItemCardProps) {
  return (
    <YStack
      space="$3"
      theme="blue"
      backgroundColor={isTransparent ? undefined : "$background"}
      borderColor={isTransparent ? undefined : "$borderColor"}
      borderWidth={isTransparent ? undefined : "$1"}
      padding={isTransparent ? undefined : "$5"}
      borderRadius={isTransparent ? undefined : "$5"}
      elevation={isTransparent ? undefined : "$1"}
      {...yStackProps}
    >
      <XStack space="$3" alignItems="center">
        {icon ? (
          <YStack
            theme="blue_Button"
            backgroundColor="$background"
            borderColor="$borderColor"
            borderWidth="$1"
            borderRadius="$12"
            width={40}
            height={40}
            justifyContent="center"
            alignItems="center"
          >
            {icon}
          </YStack>
        ) : null}
        <H4>{title}</H4>
      </XStack>

      {tagline ? <H3 fontWeight="normal">{tagline}</H3> : null}

      <Paragraph size="$5">{description}</Paragraph>

      {button ? (
        <XStack>
          <Anchor href={button.href} textDecorationLine="none">
            <Button icon={button.icon}>{button.title}</Button>
          </Anchor>
        </XStack>
      ) : null}
    </YStack>
  );
}
