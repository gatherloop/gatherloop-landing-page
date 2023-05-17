import { Divider, ItemCard, ItemCardProps } from "@/components";
import React from "react";
import { H4, Image, Paragraph, XStack, YStack, YStackProps } from "tamagui";

type Item = ItemCardProps & { imageSrc: string };

const items: Item[] = [
  {
    title: "PELAJAR DAN UMUM",
    description:
      "Kami dapat membantumu dalam mempersiapkan skill yang dibutuhkan untuk menjadi software engineer dengan roadmap belajar yang disesuaikan dengan proses belajarmu saat ini",
    imageSrc: "/assets/images/CodingBootcampOffering.png",
  },
  {
    title: "INGIN ALIH PROFESI",
    description:
      "Buat kamu yang ingin pindah jenjang karir menjadi software engineer, kami dapat memberikan pelatihan yang dapat menyesuaikan waktu yang dibutuhkan",
    imageSrc: "/assets/images/CareerSwitchingOffering.png",
  },
  {
    title: "PERSIAPAN INTERVIEW",
    description:
      "Kamu juga dapat membantumu untuk melakukan persiapan interview dengan membantumu meningkatkan hard skill yang masih butuh diimprove, mempersiapkan portfolio, resume, self branding, meningkatkan skill komunikasi, dll",
    imageSrc: "/assets/images/InterviewPreparationOffering.png",
  },
  {
    title: "MENINGKATKAN KARIR",
    description:
      "Kami juga dapat membantumu untuk meningkatkan jenjang karir, kami akan membantu menilai performamu saat ini dan memberikan roadmap dan planning yang dapat digunakan untuk meningkatkan potensi kenaikan jenjang karirmu",
    imageSrc: "/assets/images/CareerImprovementOffering.png",
  },
];

export function OfferingSection(props: YStackProps) {
  return (
    <YStack space="$8" alignItems="center" {...props}>
      <YStack space="$3" alignItems="center">
        <H4 textAlign="center">APAKAH PROGRAM INI COCOK UNTUKMU ?</H4>
        <Divider />
        <Paragraph
          textAlign="center"
          size="$7"
          fontWeight="normal"
          maxWidth={640}
        >
          Kami dapat membantu siapapun untuk belajar ngoding, mulai dari
          pelajar, umum, profesional yang ingin alih profesi, orang - orang yang
          ingin melakukan persiapan interview, dan orang - orang yang sudah
          kerja dan ingin meningkatkan karir mereka
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
