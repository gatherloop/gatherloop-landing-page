import { Divider, ItemCard, ItemCardProps } from "@/components";
import { ArrowRightCircle } from "@tamagui/lucide-icons";
import React from "react";
import { Anchor, Button, H4, Paragraph, YStack } from "tamagui";

const items: ItemCardProps[] = [
  {
    title: "PENYESUAIAN MATERI",
    description:
      "Dengan program private mentoring, peserta akan mendapatkan rekomendasi roadmap belajar yang disesuaikan dengan kebutuhan dan kemampuan belajar mereka. Program ini akan membantu peserta untuk menghindari mempelajari topik yang sudah mereka kuasai, sehingga proses belajar dapat berjalan lebih cepat dan efisien.",
  },
  {
    title: "PAIRING SESSION",
    description:
      "Gatherloop menyediakan program mentoring dengan kesempatan untuk pairing dengan mentor ahli. Kamu akan diberikan bantuan langsung dan panduan dari mentor dalam menyelesaikan tantangan atau masalah yang kamu hadapi, sehingga kamu bisa belajar dengan cara yang lebih efektif dan terarah.",
  },
  {
    title: "FEEDBACK PERSONAL",
    description:
      "Peserta dapat berkonsultasi tentang topik yang ingin dipelajari, membahas kelemahan dan kekuatan dalam proses belajar mereka, dan menerima feedback personal yang membantu meningkatkan kemampuan dan pengetahuan mereka. Seluruh proses belajar dan perkembangan peserta akan dianalisis oleh mentor dan peserta akan diberikan feedback yang membantu mempercepat proses belajar mereka.",
  },
];

export function PrivateMentoringSection() {
  return (
    <YStack
      marginTop="$11"
      space="$8"
      theme="blue"
      backgroundColor="$background"
      borderColor="$borderColor"
      borderWidth="$1"
      padding="$8"
      borderRadius="$8"
      elevation="$1"
    >
      <YStack space="$8" $gtMd={{ flexDirection: "row" }}>
        <YStack flex={1} space="$3" width="100%">
          <H4>PRIVATE MENTORING</H4>
          <Divider />
          <Paragraph size="$6" fontWeight="normal">
            Dibimbing secara one on one untuk menjadi frontend atau backend
            engineer bersama mentor ahli di bidangnya
          </Paragraph>
        </YStack>

        {items.map((item) => (
          <ItemCard
            key={item.title}
            {...item}
            flex={1}
            width="100%"
            isTransparent
          />
        ))}
      </YStack>
    </YStack>
  );
}
