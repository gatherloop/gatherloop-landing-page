import React from "react";
import { Container, Logo } from "@/components";
import { Instagram, Users } from "@tamagui/lucide-icons";
import { Anchor, Button, H3, H5, Paragraph, XStack, YStack } from "tamagui";

export function FooterSection() {
  return (
    <YStack
      backgroundColor="$background"
      borderColor="$borderColor"
      borderTopWidth="$1"
      paddingVertical="$10"
      marginTop="$10"
    >
      <Container>
        <XStack space="$5">
          <YStack space="$3" flex={1} width="100%">
            <Logo width={250} height={50} />
            <H5>COMMUNITY GATHERING SPACE</H5>
          </YStack>
          <YStack space="$5" flex={1} width="100%">
            <H3>Stay Up to Date</H3>
            <Paragraph size="$5">
              Ikuti Instagram Gatherloop atau Gabung ke Group agar tidak
              ketinggalan update event - event terbaru dari Gatherloop
            </Paragraph>
            <XStack
              space="$3"
              justifyContent="center"
              $gtXs={{ justifyContent: "flex-start" }}
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
        </XStack>
      </Container>
    </YStack>
  );
}
