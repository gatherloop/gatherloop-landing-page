import React from "react";
import { XStack, YStack } from "tamagui";
import { Content } from "../../molecules";
import { Image } from "../../atoms";
import { useRouter } from "next/router";
import { menuItems } from "../navbar";

export type HeroSectionProps = {};

export function HeroSection(_props: HeroSectionProps) {
  const router = useRouter();
  return (
    <XStack justifyContent="space-between" flexWrap="wrap">
      <YStack flexBasis="100%" display="flex" $gtXs={{ display: "none" }}>
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
              onPress: () => router.push(`/#${menuItems.programs.id}`),
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
          title="Membantumu dalam mengembangkan skill untuk menjadi seorang software engineer"
          descriptions={[
            "Gatherloop merupakan community space di Probolinggo. Kami bekerja sama dengan komunitas IT untuk mengadakan sharing session, workshop, dan career mentoring untuk membantu pelajar dan fresh graduate untuk meraih pekerjaan impiannya sebagai software engineer",
          ]}
          buttons={[
            {
              text: "Lihat Program Gatherloop",
              onPress: () => router.push(`/#${menuItems.programs.id}`),
            },
          ]}
        />
      </YStack>
      <YStack
        flexBasis="100%"
        paddingLeft="$0"
        marginTop="$5"
        alignItems="center"
        $gtXs={{
          paddingLeft: "$8",
          alignItems: "flex-end",
          flexBasis: "50%",
          marginTop: "$0",
        }}
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
