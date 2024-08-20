import React from "react";
import { H1, Paragraph, YStack } from "tamagui";

export function LocationSection() {
  return (
    <YStack space="$5" id="lokasi">
      <YStack space="$5" alignItems="center">
        <H1 textAlign="center">Yuk Datang ke Gatherloop</H1>
        <Paragraph size="$5" textAlign="center">
          Perumahan new kraksaan land blok G16, Kraksaan, Probolinggo.
        </Paragraph>
      </YStack>
      <YStack backgroundColor="$gray2" padding="$5" borderRadius="$8">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d988.3423736873073!2d113.440684!3d-7.7505767!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd701d59b4cd13d%3A0xcca062879ea93279!2sGatherloop%20Cafe%20%26%20Community!5e0!3m2!1sid!2sid!4v1724152619975!5m2!1sid!2sid"
          width="100%"
          height="auto"
          style={{ aspectRatio: 1, borderRadius: 10, border: "none" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </YStack>
    </YStack>
  );
}
