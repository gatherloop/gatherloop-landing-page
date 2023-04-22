import { Divider } from "@/components";
import { MapPin } from "@tamagui/lucide-icons";
import React from "react";
import { Anchor, Button, H4, Image, Paragraph, XStack, YStack } from "tamagui";

export function LocationSection() {
  return (
    <YStack marginVertical="$12">
      <YStack space="$5">
        <XStack
          flexWrap="wrap"
          justifyContent="center"
          $gtSm={{ justifyContent: "flex-start" }}
        >
          <Image
            maxWidth={480}
            width="100%"
            height="auto"
            marginRight="$0"
            marginBottom="$3"
            flexBasis="100%"
            $gtSm={{ marginRight: "$8", marginBottom: "$8", flexBasis: "40%" }}
            aspectRatio={1}
            defaultSource={{ uri: "/assets/images/Location.webp" }}
            src={{ uri: "/assets/images/Location.webp" }}
            alt="mentoring"
            borderRadius="$12"
          />
          <YStack flexBasis="100%" $gtSm={{ flexBasis: "40%" }} space="$5">
            <H4 textAlign="center" $gtSm={{ textAlign: "left" }}>
              LOKASI BASECAMP
            </H4>
            <Divider alignSelf="center" $gtSm={{ alignSelf: "flex-start" }} />
            <Paragraph
              size="$9"
              fontWeight="normal"
              textAlign="center"
              $gtSm={{ textAlign: "left" }}
            >
              Yuk belajar bersama di basecamp Gatherloop
            </Paragraph>
            <Paragraph
              size="$5"
              textAlign="center"
              $gtSm={{ textAlign: "left" }}
            >
              Basecamp Gatherloop berlokasi di perumahan new kraksaan land blok
              G16, Kabupaten Probolinggo.
            </Paragraph>
            <XStack
              justifyContent="center"
              $gtSm={{ justifyContent: "flex-start" }}
            >
              <Anchor href="/location" textDecorationLine="none">
                <Button theme="blue" icon={MapPin}>
                  LIHAT LOKASI
                </Button>
              </Anchor>
            </XStack>
          </YStack>
        </XStack>
      </YStack>
    </YStack>
  );
}
