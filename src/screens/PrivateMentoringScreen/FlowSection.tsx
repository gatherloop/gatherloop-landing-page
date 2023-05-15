import { Divider, ItemCard, ItemCardProps } from "@/components";
import { Newspaper, Rocket, Users } from "@tamagui/lucide-icons";
import React from "react";
import { H4, Paragraph, Theme, XStack, YStack } from "tamagui";

const items: ItemCardProps[] = [
  {
    title: "BOOTCAMP WEB DEVELOPMENT",
    description:
      "Pertama, kamu akan berkonsultasi dengan seorang mentor ahli dalam bidangnya untuk membahas proses belajar dan kendala yang kamu hadapi saat ini.",
    icon: <Users />,
  },
  {
    title: "PERSIAPAN INTERVIEW",
    description:
      "Selanjutnya, kamu akan mendapatkan rekomendasi roadmap belajar yang berisi materi dan estimasi durasi pembelajaran yang akan ditempuh",
    icon: <Newspaper />,
  },
  {
    title: "IMPROVE JENJANG KARIR",
    description:
      "Selanjutnya, kamu akan mendapatkan rekomendasi roadmap belajar yang berisi materi dan estimasi durasi pembelajaran yang akan ditempuh",
    icon: <Newspaper />,
  },
  {
    title: "PERSIAPAN LOMBA",
    description:
      "Selama belajar dengan mentor, kamu akan mendapatkan tiga kali pertemuan setiap minggunya. Di awal minggu, kamu akan mendapatkan gambaran tentang materi ",
    icon: <Rocket />,
  },
];

export function FlowSection() {
  return (
    <YStack space="$8" alignItems="center">
      <YStack space="$3" alignItems="center">
        <H4 textAlign="center">MULAI MENTORING SEKARANG</H4>
        <Divider />
        <Paragraph
          textAlign="center"
          size="$7"
          fontWeight="normal"
          maxWidth={640}
        >
          IKUTI LANGKAH BERIKUT UNTUK MULAI MENTORING
        </Paragraph>
      </YStack>
      {/* <Theme inverse> */}
      <XStack theme="blue" gap={24} flexWrap="wrap">
        {items.map((item) => (
          <ItemCard
            key={item.title}
            {...item}
            flexBasis="100%"
            $gtXs={{ flexBasis: "45%" }}
            $gtSm={{ flexBasis: "48%" }}
            $gtMd={{ flexBasis: "23%" }}
            width="100%"
          />
        ))}
      </XStack>
      {/* </Theme> */}
    </YStack>
  );
}
