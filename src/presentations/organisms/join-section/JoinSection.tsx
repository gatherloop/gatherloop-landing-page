import React from "react";
import { XStack, YStack } from "tamagui";
import { Content } from "../../molecules";
import { Image } from "../../atoms";
import { useRouter } from "next/router";

export type JoinSectionProps = {};

export function JoinSection(_props: JoinSectionProps) {
  const router = useRouter();
  return (
    <XStack justifyContent="space-between" flexWrap="wrap-reverse">
      <YStack flexBasis="100%" display="flex" $gtXs={{ display: "none" }}>
        <Content
          align="center"
          size="lg"
          title="Tunggu apalagi ? Gabung dengan Gatherloop sekarang"
          descriptions={[
            "Dengan bergabung di Gatherloop, kalian akan mendapatkan informasi - informasi menganai event - event terbaru yang diadakan oleh Gatherloop",
          ]}
          buttons={[
            {
              text: "Gabung ke Grup",
              onPress: () => router.push("/join"),
            },
            {
              text: "Ikuti Instagram",
              onPress: () => router.push("/instagram"),
            },
          ]}
        />
      </YStack>
      <YStack
        flexBasis="50%"
        display="none"
        paddingRight="$4"
        $gtXs={{ display: "flex" }}
      >
        <Content
          size="lg"
          title="Tunggu apalagi ? Gabung dengan Gatherloop sekarang"
          descriptions={[
            "Dengan bergabung di Gatherloop, kalian akan mendapatkan informasi - informasi menganai event - event terbaru yang diadakan oleh Gatherloop",
          ]}
          buttons={[
            {
              text: "Gabung ke Grup",
              onPress: () => router.push("/join"),
            },
            {
              text: "Ikuti Instagram",
              onPress: () => router.push("/instagram"),
            },
          ]}
        />
      </YStack>
      <YStack flexBasis="50%" display="none" $gtXs={{ display: "flex" }}>
        <Image src="/assets/images/Join.png" width={477} height={418} alt="" />
      </YStack>
    </XStack>
  );
}
