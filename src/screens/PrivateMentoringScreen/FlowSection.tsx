import { Divider, ItemCard, ItemCardProps } from "@/components";
import { Newspaper, Rocket, Users } from "@tamagui/lucide-icons";
import React from "react";
import {
  H1,
  H2,
  H3,
  H4,
  Paragraph,
  Theme,
  XStack,
  YStack,
  YStackProps,
} from "tamagui";

const items: ItemCardProps[] = [
  {
    title: "KONSULTASIKAN KENDALA DAN PROSES BELAJARMU",
    description:
      "Pertama, kamu akan berkonsultasi dengan seorang mentor ahli dalam bidangnya untuk membahas proses belajar dan kendala yang kamu hadapi saat ini. Kamu akan diberikan tes dan tantangan untuk mengevaluasi kemampuanmu, sehingga mentor dapat memberikan umpan balik dan merekomendasikan roadmap belajar yang sesuai dengan tujuan dan kebutuhanmu.",
    icon: <H4>1</H4>,
  },
  {
    title: "DAPATKAN REKOMENDASI ROADMAP BELAJAR",
    description:
      "Selanjutnya, kamu akan mendapatkan rekomendasi roadmap belajar yang berisi materi dan estimasi durasi pembelajaran yang akan ditempuh, kamu juga akan mendapatkan tantangan yang dapat kamu kerjakan untuk meningkatkan pemahamanmu terhadap topik yang dipelajari. Setelah menyetujui roadmap belajar, maka proses pembelajaran secara one-on-one akan dimulai.",
    icon: <H4>2</H4>,
  },
  {
    title: "DIBIMBING BELAJAR SECARA ONE ON ONE",
    description:
      "Selama belajar dengan mentor, kamu akan mendapatkan tiga kali pertemuan setiap minggunya. Di awal minggu, kamu akan mendapatkan gambaran tentang materi dan tugas untuk satu minggu ke depan. Di pertengahan minggu, akan membahas proses dan kendala yang kamu hadapi selama pembelajaran. Di akhir minggu, kamu akan mendapatkan feedback terhadap hasil belajarmu selama satu minggu.",
    icon: <H4>3</H4>,
  },
];

export function FlowSection(props: YStackProps) {
  return (
    <YStack space="$8" alignItems="center" {...props}>
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
      <XStack theme="blue" gap={24} flexWrap="wrap">
        {items.map((item) => (
          <ItemCard
            key={item.title}
            {...item}
            flexBasis="100%"
            $gtXs={{ flexBasis: "45%" }}
            $gtSm={{ flexBasis: "30%" }}
            width="100%"
          />
        ))}
      </XStack>
    </YStack>
  );
}
