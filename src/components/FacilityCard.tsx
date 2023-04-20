import React from "react";
import { H3, Image, Paragraph, YStack, YStackProps } from "tamagui";

export type FacilityCardProps = {
  title: string;
  description: string;
  imageUrl: string;
} & YStackProps;

export function FacilityCard({
  imageUrl,
  title,
  description,
  ...yStackProps
}: FacilityCardProps) {
  return (
    <YStack {...yStackProps} space="$3">
      <Image
        src={{ uri: imageUrl }}
        defaultSource={{ uri: imageUrl }}
        aspectRatio={1 / 1.5}
        width="100%"
        height="auto"
        alt={title}
        borderRadius="$5"
      />
      <H3 textAlign="center" $gtXs={{ textAlign: "left" }}>
        {title}
      </H3>
      <Paragraph size="$5">{description}</Paragraph>
    </YStack>
  );
}
