import React from "react";
import { YStack } from "tamagui";
import { Content } from "../../molecules";
import { Card, Image } from "../../atoms";
import { useRouter } from "next/router";

export type JoinSectionProps = {};

export function JoinSection(_props: JoinSectionProps) {
  const router = useRouter();
  return (
    <Card flexDirection="row" flexWrap="wrap-reverse" padding="$8">
      <YStack
        flexBasis="100%"
        alignItems="center"
        marginTop="$5"
        marginRight="$0"
        $gtXs={{
          alignItems: "flex-start",
          marginTop: "$0",
          marginRight: "$5",
          flexBasis: "35%",
        }}
      >
        <Image
          src="/assets/images/Join.webp"
          width={4032}
          height={3024}
          alt=""
        />
      </YStack>

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

      <YStack flexBasis="50%" display="none" $gtXs={{ display: "flex" }}>
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
    </Card>
  );
}
