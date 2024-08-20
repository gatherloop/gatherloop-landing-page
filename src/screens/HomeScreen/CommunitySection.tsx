import {
  BookOpen,
  Briefcase,
  Dices,
  Dribbble,
  Laptop,
  MapPin,
} from "@tamagui/lucide-icons";
import React from "react";
import {
  Anchor,
  Button,
  H1,
  H3,
  H4,
  Image,
  Paragraph,
  XStack,
  YStack,
} from "tamagui";

const communities: CommunityCardProps[] = [
  {
    title: "Android Developer",
    description: "Lorem ipsum dolor sit amet",
    icon: <Laptop />,
  },
  {
    title: "Frontend Developer",
    description: "Lorem ipsum dolor sit amet",
    icon: <Laptop />,
  },
  {
    title: "Backend Developer",
    description: "Lorem ipsum dolor sit amet",
    icon: <Laptop />,
  },
  {
    title: "Bedah Buku",
    description: "Lorem ipsum dolor sit amet",
    icon: <BookOpen />,
  },
  {
    title: "Board Game",
    description: "Lorem ipsum dolor sit amet",
    icon: <Dices />,
  },
  {
    title: "Sport",
    description: "Lorem ipsum dolor sit amet",
    icon: <Dribbble />,
  },
];

export type CommunityCardProps = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

export function CommunityCard(props: CommunityCardProps) {
  return (
    <YStack
      backgroundColor="$gray2"
      overflow="hidden"
      borderRadius="$5"
      flexBasis="32%"
      elevation="$10"
    >
      <Image
        width="100%"
        height={200}
        src={{ uri: "/assets/images/Location.webp" }}
        defaultSource={{ uri: "/assets/images/Location.webp" }}
        alt="hero image"
      />
      <YStack paddingHorizontal="$3" paddingVertical="$8" position="relative">
        <YStack
          backgroundColor="$gray5"
          position="absolute"
          padding="$3"
          borderRadius="$10"
          top={-25}
          left={0}
          right={0}
          marginLeft="auto"
          marginRight="auto"
          zIndex={99}
          width={50}
          height={50}
        >
          {props.icon}
        </YStack>
        <H4 textAlign="center">{props.title}</H4>
        <Paragraph textAlign="center">{props.description}</Paragraph>
      </YStack>
    </YStack>
  );
}

export function CommunitySection() {
  return (
    <YStack paddingVertical="$10" space="$10">
      <YStack alignItems="center" maxWidth={600} margin="auto" gap={15}>
        <H1 size="$10" textAlign="center">
          Perluas Wawasan dan Relasi Sesuai Bidang dan Hobimu
        </H1>
        <Paragraph size="$5" textAlign="center">
          Gatherloop memiliki banyak komunitas yang dapat kamu ikuti sesuai
          dengan minatmu
        </Paragraph>
      </YStack>

      <YStack gap={15}>
        <XStack gap={15} flex={1} flexWrap="wrap">
          {communities.map((community) => (
            <CommunityCard key={community.title} {...community} />
          ))}
        </XStack>
      </YStack>
    </YStack>
  );
}
