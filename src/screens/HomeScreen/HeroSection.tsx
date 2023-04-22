import { Divider } from "@/components";
import { Instagram, Users } from "@tamagui/lucide-icons";
import React from "react";
import { Anchor, Button, H1, Image, Paragraph, XStack, YStack } from "tamagui";

export function HeroSection() {
  return (
    <YStack
      alignItems="center"
      justifyContent="center"
      paddingVertical="$15"
      space="$10"
      $gtSm={{ flexDirection: "row", alignItems: "flex-start" }}
    >
      <Image
        borderRadius="$12"
        maxWidth={360}
        width="100%"
        height="auto"
        aspectRatio={1}
        flex={1}
        flexBasis="100%"
        src={{ uri: "/assets/images/Hero.webp" }}
        defaultSource={{ uri: "/assets/images/Hero.webp" }}
        alt="hero image"
      />
      <YStack
        space="$5"
        flex={1}
        alignItems="center"
        $gtSm={{ alignItems: "flex-start" }}
      >
        <H1 textAlign="center" $gtSm={{ textAlign: "left" }}>
          Gatherloop
        </H1>
        <Paragraph textAlign="center" $gtSm={{ textAlign: "left" }}>
          COMMUNITY GATHERING SPACE
        </Paragraph>
        <Divider />
        <Paragraph
          size="$9"
          maxWidth={600}
          textAlign="center"
          $gtSm={{ textAlign: "left" }}
        >
          Membantumu mengembangkan skill untuk menjadi seorang software engineer
        </Paragraph>
        <Paragraph size="$5" textAlign="center" $gtSm={{ textAlign: "left" }}>
          Gatherloop merupakan community space di Probolinggo. Kami bekerja sama
          dengan komunitas IT untuk mengadakan sharing session, workshop, dan
          career mentoring untuk membantu pelajar dan fresh graduate untuk
          meraih pekerjaan impiannya sebagai software engineer
        </Paragraph>
        <XStack
          space="$3"
          justifyContent="center"
          $gtSm={{ justifyContent: "flex-start" }}
        >
          <Anchor
            href="https://www.instagram.com/gatherloop/"
            textDecorationLine="none"
          >
            <Button theme="blue" icon={Instagram}>
              Ikuti Gatherloop
            </Button>
          </Anchor>

          <Anchor href="/join" textDecorationLine="none">
            <Button theme="blue" icon={Users}>
              Gabung Group
            </Button>
          </Anchor>
        </XStack>
      </YStack>
    </YStack>
  );
}
