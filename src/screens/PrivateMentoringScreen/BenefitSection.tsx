import { Divider, ItemCard, ItemCardProps } from "@/components";
import { Code2, Settings } from "@tamagui/lucide-icons";
import React from "react";
import { H4, Image, Paragraph, XStack, YStack } from "tamagui";

const items: ItemCardProps[] = [
  {
    title: "Mentoring Secara One on One",
    description:
      "Gatherloop menghadirkan workshop Frontend yang dirancang khusus untuk memperkenalkan dasar-dasar JavaScript",
    icon: <Code2 />,
  },
  {
    title: "Belajar Sesuai Kebutuhan",
    description:
      "Buat kamu penggiat Backend, Gatherloop juga menghadirkan workshop Backend untuk mengenalkan bahasa pemrograman Golang",
    icon: <Settings />,
  },
  
  {
    title: "Tugas dan Latihan Sesuai Kebutuhan",
    description:
      "Buat kamu penggiat Backend, Gatherloop juga menghadirkan workshop Backend untuk mengenalkan bahasa pemrograman Golang",
    icon: <Settings />,
  },
  {
    title: "Waktu Belajar Lebih Fleksibel",
    description:
      "Buat kamu penggiat Backend, Gatherloop juga menghadirkan workshop Backend untuk mengenalkan bahasa pemrograman Golang",
    icon: <Settings />,
  },
];

export function BenefitSection() {
  return (
    <YStack marginVertical="$15" space="$8" $gtMd={{ flexDirection: "row" }}>
      <Image
        maxWidth={480}
        width="100%"
        height="auto"
        aspectRatio={1}
        defaultSource={{ uri: "/assets/images/Benefit.png" }}
        src={{ uri: "/assets/images/Benefit.png" }}
        alt="benefit"
      />
      <YStack flexShrink={1} space="$5">
        <H4 textAlign="center" $gtXs={{ textAlign: "left" }}>
          MENGAPA MEMILIH KAMI ?
        </H4>
        <Divider alignSelf="center" $gtXs={{ alignSelf: "flex-start" }} />
        <Paragraph size="$5" textAlign="center" $gtXs={{ textAlign: "left" }}>
          Kamu suka ngoding dan ingin menjadi seorang Frontend atau Backend
          engineer tapi belum memiliki skill yang dibutuhkan ? Tenang, kamu bisa
          mengikuti workshop Frontend dan Backend yang diadakan oleh Gatherloop
          untuk mempelajari skill dasar yang dibutuhkan untuk menjadi seorang
          Frontend dan Backend Engineer
        </Paragraph>
        <XStack flexWrap="wrap">
          {items.map((item) => (
            <ItemCard
              key={item.title}
              isTransparent
              flexBasis="100%"
              $gtXs={{ flexBasis: "50%" }}
              padding="$3"
              {...item}
            />
          ))}
        </XStack>
      </YStack>
    </YStack>
  );
}
