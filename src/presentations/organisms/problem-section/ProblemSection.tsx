import React from "react";
import { Image, XStack, YStack } from "tamagui";
import { Content } from "../../molecules";

export type ProblemSectionProps = {};

export function ProblemSection(_props: ProblemSectionProps) {
  return (
    <XStack justifyContent="space-between" space="$5">
      <Image
        src="/assets/images/Discussion.png"
        width={475}
        height={394}
        defaultSource={{ uri: "/assets/images/Discussion.png" }}
        alt=""
      />
      <YStack flex={1}>
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
    </XStack>
  );
}
