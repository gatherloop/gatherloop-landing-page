import React from "react";
import { XStack, YStack } from "tamagui";
import { Content } from "../../molecules";
import { Image } from "../../atoms";

export type HeroSectionProps = {};

export function HeroSection(_props: HeroSectionProps) {
  return (
    <XStack justifyContent="space-between" flexWrap="wrap-reverse">
      <YStack flexBasis="100%" display="flex" $gtSm={{ display: "none" }}>
        <Content
          align="center"
          size="lg"
          title="Membantumu dalam mengembangkan skill untuk menjadi seorang software engineer"
          descriptions={[
            "Gatherloop merupakan community space di Probolinggo. Kami bekerja sama dengan komunitas IT untuk mengadakan sharing session, workshop, dan career mentoring untuk membantu pelajar dan fresh graduate untuk meraih pekerjaan impiannya sebagai software engineer",
          ]}
          buttons={[
            {
              text: "Lihat Program Gatherloop",
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
          title="Membantumu dalam mengembangkan skill untuk menjadi seorang software engineer"
          descriptions={[
            "Gatherloop merupakan community space di Probolinggo. Kami bekerja sama dengan komunitas IT untuk mengadakan sharing session, workshop, dan career mentoring untuk membantu pelajar dan fresh graduate untuk meraih pekerjaan impiannya sebagai software engineer",
          ]}
          buttons={[
            {
              text: "Lihat Program Gatherloop",
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
        <Image
          src="/assets/images/Computer.png"
          width={411}
          height={350}
          alt=""
        />
      </YStack>
    </XStack>
  );
}
