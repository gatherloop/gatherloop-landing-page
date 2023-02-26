import { useRouter } from "next/router";
import React from "react";
import { XStack, YStack } from "tamagui";
import { Image } from "../../atoms";
import { Content } from "../../molecules";

export type LocationSectionProps = {};

export function LocationSection(_props: LocationSectionProps) {
  const router = useRouter();
  return (
    <XStack flexWrap="wrap">
      <YStack
        flexBasis="100%"
        display="flex"
        marginBottom="$4"
        $gtXs={{ display: "none", marginBottom: "$0" }}
      >
        <Content
          align="center"
          size="lg"
          title="Lokasi Basecamp"
          descriptions={[
            "Yuk datang ke basecamp Gatherloop untuk belajar bersama. Lokasinya di perumahan new kraksaan land blok G16, Kabupaten Probolinggo.",
          ]}
          buttons={[
            { text: "Lihat Peta", onPress: () => router.push("/location") },
          ]}
        />
      </YStack>

      <YStack
        flexBasis="100%"
        paddingRight="$0"
        alignItems="center"
        $gtXs={{
          flexBasis: "50%",
          paddingRight: "$4",
          alignItems: "flex-start",
        }}
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
        $gtXs={{ display: "flex" }}
      >
        <Content
          size="lg"
          title="Lokasi Basecamp"
          descriptions={[
            "Yuk datang ke basecamp Gatherloop untuk belajar bersama. Lokasinya di perumahan new kraksaan land blok G16, Kabupaten Probolinggo.",
          ]}
          buttons={[
            { text: "Lihat Peta", onPress: () => router.push("/location") },
          ]}
        />
      </YStack>
    </XStack>
  );
}
