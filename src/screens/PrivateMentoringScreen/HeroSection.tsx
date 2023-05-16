import { Divider } from "@/components";
import { ArrowRightCircle } from "@tamagui/lucide-icons";
import React from "react";
import {
  Anchor,
  Button,
  H5,
  Image,
  Paragraph,
  Theme,
  XStack,
  YStack,
} from "tamagui";

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
        borderRadius="$5"
        maxWidth={360}
        width="100%"
        height="auto"
        aspectRatio={500 / 500}
        src={{ uri: "/assets/images/PrivateMentoringHero.png" }}
        defaultSource={{ uri: "/assets/images/PrivateMentoringHero.png" }}
        alt="hero image"
      />
      <YStack
        space="$5"
        flex={1}
        alignItems="center"
        $gtSm={{ alignItems: "flex-start" }}
      >
        <H5 textAlign="center" $gtSm={{ textAlign: "left" }}>
          PRIVATE MENTORING
        </H5>
        <Divider />
        <Paragraph
          size="$9"
          maxWidth={600}
          textAlign="center"
          $gtSm={{ textAlign: "left" }}
        >
          Membantumu menjadi seorang software engineer hebat dengan pelatihan
          secara{" "}
          <Theme inverse>
            <Paragraph
              size="$9"
              backgroundColor="$background"
              paddingHorizontal="$2.5"
              paddingVertical="$1.5"
              lineHeight="$10"
            >
              one on one
            </Paragraph>
          </Theme>
        </Paragraph>
        <Paragraph
          size="$5"
          maxWidth={640}
          textAlign="center"
          $gtSm={{ textAlign: "left" }}
        >
          Dengan private mentoring kamu akan mendapatkan kesempatan belajar
          dengan mentor secara one on one sehingga proses belajar menjadi lebih
          fokus, terarah, dan sesuai dengan kemampuan pribadimu
        </Paragraph>
        <XStack
          space="$3"
          justifyContent="center"
          $gtSm={{ justifyContent: "flex-start" }}
        >
          <Anchor href="/form-private-mentoring" textDecorationLine="none">
            <Button theme="blue" icon={ArrowRightCircle}>
              Konsultasi Sekarang
            </Button>
          </Anchor>
          <Anchor href="/form-private-mentoring" textDecorationLine="none">
            <Button>Pelajari Lebih Lanjut</Button>
          </Anchor>
        </XStack>
      </YStack>
    </YStack>
  );
}
