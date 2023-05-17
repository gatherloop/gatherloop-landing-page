import React from "react";
import {
  H4,
  Image,
  Paragraph,
  Theme,
  XStack,
  XStackProps,
  YStack,
} from "tamagui";

export type TestimonialCardProps = {
  name: string;
  job: string;
  description: string;
  imageUrl: string;
} & XStackProps;

export function TestimonialCard({
  name,
  job,
  description,
  imageUrl,
  ...yStackProps
}: TestimonialCardProps) {
  return (
    <YStack
      theme="blue"
      backgroundColor="$background"
      borderColor="$borderColor"
      borderWidth={1}
      borderRadius="$5"
      padding="$5"
      space="$5"
      justifyContent="space-between"
      {...yStackProps}
    >
      <Paragraph size="$6">{description}</Paragraph>
      <XStack space="$3" alignItems="center">
        <Image
          borderRadius="$20"
          maxWidth={60}
          width="100%"
          height="auto"
          aspectRatio={500 / 500}
          src={{ uri: imageUrl }}
          defaultSource={{ uri: imageUrl }}
          alt={imageUrl}
        />
        <YStack>
          <H4>{name}</H4>
          <Paragraph size="$5">{job}</Paragraph>
        </YStack>
      </XStack>
    </YStack>
  );
}
