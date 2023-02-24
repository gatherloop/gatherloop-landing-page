import React from "react";
import { XStack, YStack } from "tamagui";
import { Content } from "../../molecules";
import { Image } from "../../atoms";

export type JoinSectionProps = {};

export function JoinSection(_props: JoinSectionProps) {
  return (
    <XStack justifyContent="space-between" flexWrap="wrap-reverse">
      <YStack flexBasis="100%" display="flex" $gtSm={{ display: "none" }}>
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
              onPress: () => console.log("clicked"),
            },
            {
              text: "Ikuti Instagram",
              onPress: () => console.log("clicked"),
            },
          ]}
        />
      </YStack>
      <YStack
        flexBasis="50%"
        display="none"
        paddingRight="$4"
        $gtSm={{ display: "flex" }}
        $gtMd={{ paddingRight: "$8" }}
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
              onPress: () => console.log("clicked"),
            },
            {
              text: "Ikuti Instagram",
              onPress: () => console.log("clicked"),
            },
          ]}
        />
      </YStack>
      <YStack
        flexBasis="50%"
        display="none"
        $gtSm={{ display: "flex" }}
        $gtMd={{ paddingLeft: "$8" }}
      >
        <Image src="/assets/images/Join.png" width={477} height={418} alt="" />
      </YStack>
    </XStack>
  );
}
