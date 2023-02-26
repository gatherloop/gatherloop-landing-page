import React from "react";
import { XStack, YStack } from "tamagui";
import { Content } from "../../molecules";
import { Card, Image } from "../../atoms";

export type ProblemSectionProps = {};

export function ProblemSection(_props: ProblemSectionProps) {
  return (
    <Card flexDirection="row" flexWrap="wrap-reverse" padding="$8" space="$5">
      <YStack
        flexBasis="100%"
        alignItems="center"
        marginTop="$5"
        $gtXs={{ flexBasis: "40%", alignItems: "flex-start", marginTop: "$0" }}
      >
        <Image
          src="/assets/images/Discussion.webp"
          width={475}
          height={394}
          alt=""
        />
      </YStack>

      <YStack
        display="none"
        paddingLeft="$4"
        flexBasis="50%"
        $gtXs={{ display: "flex" }}
      >
        <Content
          size="lg"
          title="Permasalahan apa yang ingin kami selesaikan ?"
          descriptions={[
            "Kamu bermimpi untuk menjadi seorang software engineer ? Namun, dibutuhkan usaha yang sangat keras agar bisa mencapai mimpi tersebut.",
            "Tidak hanya mengusai bahasa pemrograman, seorang software engineer juga dituntut untuk bisa menganalisa sistem dan menentukan cara yang tepat untuk membangun sistem berdasarkan kondisi tertentu",
            "Gatherloop lahir untuk membantumu agar dapat berkembang dan menjadi seorang software engineer yang berkualitas dan meraih pekerjaan impianmu",
          ]}
        />
      </YStack>

      <YStack display="flex" flexBasis="100%" $gtXs={{ display: "none" }}>
        <Content
          align="center"
          size="lg"
          title="Permasalahan apa yang ingin kami selesaikan ?"
          descriptions={[
            "Kamu bermimpi untuk menjadi seorang software engineer ? Namun, dibutuhkan usaha yang sangat keras agar bisa mencapai mimpi tersebut.",
            "Tidak hanya mengusai bahasa pemrograman, seorang software engineer juga dituntut untuk bisa menganalisa sistem dan menentukan cara yang tepat untuk membangun sistem berdasarkan kondisi tertentu",
            "Gatherloop lahir untuk membantumu agar dapat berkembang dan menjadi seorang software engineer yang berkualitas dan meraih pekerjaan impianmu",
          ]}
        />
      </YStack>
    </Card>
  );
}
