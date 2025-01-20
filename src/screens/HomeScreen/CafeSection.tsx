import { MapPin } from "@tamagui/lucide-icons";
import React from "react";
import { Anchor, Button, H1, Image, Paragraph, XStack, YStack } from "tamagui";

const imageUrls = [
  "/assets/images/Cafe-1.jpg",
  "/assets/images/Cafe-2.jpg",
  "/assets/images/Cafe-3.jpg",
  "/assets/images/Cafe-4.jpg",
  "/assets/images/Cafe-5.jpg",
  "/assets/images/Cafe-6.jpg",
];

export function CafeSection() {
  return (
    <YStack space="$10">
      <XStack gap={15} flex={1} flexWrap="wrap" justifyContent="center">
        {imageUrls.map((imageUrl) => (
          <YStack flexBasis="45%" $gtXs={{ flexBasis: "30%" }} key={imageUrl}>
            <Image
              width="100%"
              height="auto"
              aspectRatio={1}
              source={{ uri: imageUrl }}
              defaultSource={{ uri: imageUrl }}
              alt="hero image"
            />
          </YStack>
        ))}
      </XStack>
    </YStack>
  );
}
