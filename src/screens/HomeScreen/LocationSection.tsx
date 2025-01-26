import React from "react";
import { H1, Image, Paragraph, XStack, YStack } from "tamagui";
import { PageHeader } from "tamakit";

export function LocationSection() {
  return (
    <YStack space="$5" id="lokasi" alignItems="center">
      <YStack maxWidth={640}>
        <PageHeader
          tag="Lokasi"
          title="Tunggu Apalagi ? Yuk Datang ke Gatherloop"
          subtitle="New Kraksaan Land, Blok G16, Karang Asem, Kebon Agung, Kraksaan"
          align="center"
          primaryButton={{
            label: "Lihat Google Map",
            onPress: () => window.open("https://gatherloop.co/location"),
          }}
        />
      </YStack>

      <XStack
        backgroundColor="$background"
        padding="$5"
        borderRadius="$8"
        gap="$5"
        alignSelf="stretch"
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d988.3423736873073!2d113.440684!3d-7.7505767!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd701d59b4cd13d%3A0xcca062879ea93279!2sGatherloop%20Cafe%20%26%20Community!5e0!3m2!1sid!2sid!4v1724152619975!5m2!1sid!2sid"
          width="100%"
          height="auto"
          style={{ aspectRatio: 1, flex: 1, borderRadius: 10, border: "none" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </XStack>
    </YStack>
  );
}
