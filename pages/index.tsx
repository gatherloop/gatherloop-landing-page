import React from "react";
import { Paragraph, YStack, Image, XStack, Anchor } from "tamagui";
import { Logo } from "../src/presentations";

export default function Home() {
  return (
    <YStack justifyContent="center" height="100vh">
      <YStack
        backgroundColor="#171717"
        height="100%"
        justifyContent="center"
        alignItems="center"
      >
        <YStack justifyContent="center" alignItems="center" marginBottom="30px">
          <Image
            src="/gatherloop-logo.svg"
            alt="Gatherloop Logo"
            defaultSource={{ uri: "/gatherloop-logo.svg" }}
            width={300}
            height={60}
          />
          <Logo width={1000} height={200} />
          <Paragraph textAlign="center" marginTop="15px" color="white">
            Community Gathering Space at Kraksaan, Probolinggo
          </Paragraph>
        </YStack>

        <XStack space={24}>
          <Anchor
            href="https://www.instagram.com/gatherloop/"
            paddingVertical="5px"
            paddingHorizontal="15px"
            borderRadius="15px"
            textDecorationLine="none"
          >
            <XStack space={8}>
              <Image
                src="/instagram.svg"
                alt="instagram logo"
                width={24}
                height={24}
              />
              <Paragraph color="white">Instagram</Paragraph>
            </XStack>
          </Anchor>

          <Anchor
            href="/join"
            paddingVertical="5px"
            paddingHorizontal="15px"
            borderRadius="15px"
            textDecorationLine="none"
          >
            <XStack space={8}>
              <Image
                src="/whatsapp.svg"
                alt="whatsapp logo"
                width={24}
                height={24}
              />
              <Paragraph color="white">Join Group</Paragraph>
            </XStack>
          </Anchor>
        </XStack>
      </YStack>
    </YStack>
  );
}
