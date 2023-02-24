import React from "react";
import { XStack, YStack } from "tamagui";
import { Image } from "../../atoms";
import { Content } from "../../molecules";

export type LocationSectionProps = {};

export function LocationSection(_props: LocationSectionProps) {
  return (
    <XStack>
      <YStack display="flex" $gtSm={{ display: "none" }}>
        <Content
          align="center"
          size="lg"
          title="Lokasi Basecamp"
          descriptions={[
            "Yuk datang ke basecamp Gatherloop untuk belajar bersama. Lokasinya di perumahan new kraksaan land blok G16, Kabupaten Probolinggo.",
          ]}
          buttons={[
            { text: "Lihat Peta", onPress: () => console.log("clicked") },
          ]}
        />
      </YStack>

      <YStack
        flexBasis="50%"
        paddingRight="$4"
        display="none"
        $gtSm={{ display: "flex" }}
      >
        <Image
          src="/assets/images/BaseCamp.png"
          alt=""
          width={470}
          height={332}
        />
      </YStack>

      <YStack
        flexBasis="50%"
        paddingLeft="$4"
        display="none"
        $gtSm={{ display: "flex" }}
      >
        <Content
          size="lg"
          title="Lokasi Basecamp"
          descriptions={[
            "Yuk datang ke basecamp Gatherloop untuk belajar bersama. Lokasinya di perumahan new kraksaan land blok G16, Kabupaten Probolinggo.",
          ]}
          buttons={[
            { text: "Lihat Peta", onPress: () => console.log("clicked") },
          ]}
        />
      </YStack>
    </XStack>
  );
}
