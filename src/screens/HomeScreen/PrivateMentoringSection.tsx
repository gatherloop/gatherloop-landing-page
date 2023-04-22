import { Divider, ItemCard, ItemCardProps } from "@/components";
import { Newspaper, Rocket, Users } from "@tamagui/lucide-icons";
import React from "react";
import { H4, Paragraph, YStack } from "tamagui";

const items: ItemCardProps[] = [
  {
    title: "KONSULTASIKAN PROSES BELAJARMU",
    description:
      "Pertama, kamu akan berkonsultasi dengan seorang mentor ahli dalam bidangnya untuk membahas proses belajar dan kendala yang kamu hadapi saat ini. Kamu akan diberikan tes dan tantangan untuk mengevaluasi kemampuanmu, sehingga mentor dapat memberikan umpan balik dan merekomendasikan roadmap belajar yang sesuai dengan tujuan dan kebutuhanmu.",
    icon: <Users />,
  },
  {
    title: "DAPATKAN REKOMENDASI ROADMAP BELAJAR",
    description:
      "Selanjutnya, kamu akan mendapatkan rekomendasi roadmap belajar yang berisi materi dan estimasi durasi pembelajaran yang akan ditempuh, kamu juga akan mendapatkan tantangan yang dapat kamu kerjakan untuk meningkatkan pemahamanmu terhadap topik yang dipelajari. Setelah menyetujui roadmap belajar, maka proses pembelajaran secara one-on-one akan dimulai.",
    icon: <Newspaper />,
  },
  {
    title: "DIBIMBING BELAJAR SECARA ONE ON ONE",
    description:
      "Selama belajar dengan mentor, kamu akan mendapatkan tiga kali pertemuan setiap minggunya. Di awal minggu, kamu akan mendapatkan gambaran tentang materi dan tugas untuk satu minggu ke depan. Di pertengahan minggu, akan membahas proses dan kendala yang kamu hadapi selama pembelajaran. Di akhir minggu, kamu akan mendapatkan feedback terhadap hasil belajarmu selama satu minggu.",
    icon: <Rocket />,
  },
];

export function PrivateMentoringSection() {
  return (
    <YStack marginTop="$11" space="$8" alignItems="center">
      <YStack space="$3">
        <H4 textAlign="center">PRIVATE MENTORING</H4>
        <Divider alignSelf="center" />
        <Paragraph
          textAlign="center"
          size="$7"
          fontWeight="normal"
          maxWidth={640}
        >
          Dibimbing secara one on one untuk menjadi Frontend atau Backend
          engineer bersama mentor ahli di bidangnya
        </Paragraph>
      </YStack>
      <YStack
        theme="blue"
        backgroundColor="$background"
        borderColor="$borderColor"
        borderWidth="$1"
        padding="$8"
        borderRadius="$8"
        elevation="$1"
        space="$8"
        $gtMd={{ flexDirection: "row" }}
      >
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
