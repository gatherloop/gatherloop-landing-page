import React from "react";
import { H1, Image, Paragraph, SizableText, YStack } from "tamagui";

export function HeroSection() {
  return (
    <YStack
      id="home"
      alignItems="center"
      justifyContent="center"
      paddingVertical="$10"
      space="$10"
      $gtSm={{ flexDirection: "row", alignItems: "flex-start" }}
    >
      <YStack
        space="$5"
        flex={1}
        alignItems="center"
        $gtSm={{ alignItems: "flex-start" }}
      >
        <H1
          size="$10"
          textAlign="center"
          $gtSm={{ textAlign: "left" }}
          maxWidth={500}
          lineHeight={80}
        >
          Cafe Buat{" "}
          <SizableText
            size="$10"
            backgroundColor="$blue8"
            paddingVertical="$1"
            paddingHorizontal="$3"
            borderRadius="$5"
          >
            Nongkrong
          </SizableText>
          ,{" "}
          <SizableText
            size="$10"
            backgroundColor="$blue8"
            paddingVertical="$1"
            paddingHorizontal="$3"
            borderRadius="$5"
          >
            Belajar
          </SizableText>
          , dan{" "}
          <SizableText
            size="$10"
            backgroundColor="$blue8"
            paddingVertical="$1"
            paddingHorizontal="$3"
            borderRadius="$5"
          >
            Berkembang
          </SizableText>{" "}
          Bareng
        </H1>
        <Paragraph
          size="$5"
          textAlign="center"
          $gtSm={{ textAlign: "left" }}
          maxWidth={500}
        >
          Gatherloop Cafe & Community merupakan sebuah cafe di Probolinggo yang
          menjadi tempat nongkrong dan mengembangkan skill dan minat dengan
          berkolaborasi dengan banyak komunitas
        </Paragraph>
      </YStack>
      <YStack>
        <Image
          borderRadius="$12"
          aspectRatio={1}
          width="100%"
          height="100%"
          source={{ uri: "/assets/images/Hero.png", width: 360 }}
          defaultSource={{ uri: "/assets/images/Hero.png" }}
          alt="hero image"
          display="none"
          $gtSm={{ display: "block" }}
        />
      </YStack>
    </YStack>
  );
}
