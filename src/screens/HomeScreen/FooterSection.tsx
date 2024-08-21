import React from "react";
import { Container, Logo } from "@/components";
import { Instagram, Users } from "@tamagui/lucide-icons";
import { Anchor, Button, H3, Paragraph, YStack } from "tamagui";

export function FooterSection() {
  return (
    <YStack backgroundColor="$gray2" paddingVertical="$10" marginTop="$10">
      <Container>
        <YStack space="$5" $gtXs={{ flexDirection: "row" }}>
          <YStack space="$3" flex={1} width="100%">
            <Logo width={250} height={62} />
          </YStack>
          <YStack space="$5" flex={1} width="100%">
            <H3>Stay Up to Date</H3>
            <Paragraph size="$5">
              Ikuti Instagram Gatherloop atau Gabung ke Group agar tidak
              ketinggalan update event - event terbaru dari Gatherloop
            </Paragraph>
            <YStack
              space="$3"
              justifyContent="center"
              $gtXs={{ justifyContent: "flex-start", flexDirection: "row" }}
            >
              <Anchor
                href="https://www.instagram.com/gatherloop/"
                textDecorationLine="none"
              >
                <Button theme="blue" icon={Instagram}>
                  Ikuti Gatherloop
                </Button>
              </Anchor>
            </YStack>
          </YStack>
        </YStack>
      </Container>
    </YStack>
  );
}
