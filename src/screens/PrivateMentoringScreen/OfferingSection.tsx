import { Divider, ItemCard, ItemCardProps } from "@/components";
import React from "react";
import { H4, Image, Paragraph, XStack, YStack } from "tamagui";

type Item = ItemCardProps & { imageSrc: string };

const items: Item[] = [
  {
    title: "ALIH JENJANG KARIR",
    description:
      "Selama belajar dengan mentor, kamu akan mendapatkan tiga kali pertemuan setiap minggunya. Di awal minggu, kamu akan mendapatkan gambaran tentang materi ",
    imageSrc: "/assets/images/CareerSwitchingOffering.png",
  },
  {
    title: "WEB DEVELOPMENT BOOTCAMP",
    description:
      "Pertama, kamu akan berkonsultasi dengan seorang mentor ahli dalam bidangnya untuk membahas proses belajar dan kendala yang kamu hadapi saat ini.",
    imageSrc: "/assets/images/CodingBootcampOffering.png",
  },
  {
    title: "PERSIAPAN INTERVIEW",
    description:
      "Selanjutnya, kamu akan mendapatkan rekomendasi roadmap belajar yang berisi materi dan estimasi durasi pembelajaran yang akan ditempuh",
    imageSrc: "/assets/images/InterviewPreparationOffering.png",
  },
  {
    title: "MENINGKATKAN JENJANG KARIR",
    description:
      "Selanjutnya, kamu akan mendapatkan rekomendasi roadmap belajar yang berisi materi dan estimasi durasi pembelajaran yang akan ditempuh",
    imageSrc: "/assets/images/CareerImprovementOffering.png",
  },
];

export function OfferingSection() {
  return (
    <YStack space="$8" alignItems="center">
      <YStack space="$3" alignItems="center">
        <H4 textAlign="center">APA YANG BISA KAMI BANTU ?</H4>
        <Divider />
        <Paragraph
          textAlign="center"
          size="$7"
          fontWeight="normal"
          maxWidth={640}
        >
          Apapun kebutuhan dan masalahmu, kami bisa bantu
        </Paragraph>
      </YStack>
      <XStack theme="blue" flexWrap="wrap">
        {items.map((item) => (
          <YStack
            key={item.title}
            flexBasis="100%"
            $gtXs={{ flexBasis: "45%" }}
            $gtSm={{ flexBasis: "50%" }}
            $gtMd={{ flexBasis: "25%" }}
            space="$5"
            padding="$6"
          >
            <Image
              maxWidth={480}
              width="100%"
              height="auto"
              aspectRatio={1}
              defaultSource={{ uri: item.imageSrc }}
              src={{ uri: item.imageSrc }}
              alt={item.imageSrc}
            />
            <ItemCard {...item} isTransparent />
          </YStack>
        ))}
      </XStack>
    </YStack>
  );
}
