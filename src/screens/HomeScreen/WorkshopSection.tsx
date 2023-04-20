import { Divider, ItemCard, ItemCardProps } from "@/components";
import {
  ArrowRightCircle,
  Code2,
  Rocket,
  Settings,
} from "@tamagui/lucide-icons";
import React from "react";
import { Anchor, Button, H5, Paragraph, XStack, YStack } from "tamagui";

const items: ItemCardProps[] = [
  {
    title: "WORKSHOP FRONTEND",
    description:
      "GatherLoop menghadirkan workshop frontend yang dirancang khusus untuk memperkenalkan dasar-dasar JavaScript, DOM, Single Page Application, Modularization, Typescript, dan React, sehingga dapat membantu para peserta untuk mengenal dunia frontend.",
    icon: <Code2 />,
  },
  {
    title: "WORKSHOP BACKEND",
    description:
      "Buat kamu penggiat backend, Gatherloop juga menghadirkan workshop backend untuk mengenalkan bahasa pemrograman Golang, web development, API development, ORM, Middleware, JWT, dan Clean Architecture. Workshop ini didesain untuk membantu peserta mengenal dunia backend dengan langkah yang tepat.",
    icon: <Settings />,
  },
];

export function WorkshopSection() {
  return (
    <XStack space="$8">
      <YStack space="$5" flex={1} width="100%">
        <H5 textAlign="center" $gtXs={{ textAlign: "left" }}>
          WORKSHOP
        </H5>
        <Divider alignSelf="center" $gtXs={{ alignSelf: "flex-start" }} />
        <Paragraph
          size="$8"
          fontWeight="$1"
          textAlign="center"
          $gtXs={{ textAlign: "left" }}
        >
          Gali potensi dan kembangkan skillmu bersama kami melalui workshop
          terbaik dari Gatherloop
        </Paragraph>
        <Paragraph size="$5">
          Kamu suka ngoding dan ingin menjadi seorang Frontend atau Backend
          engineer tapi belum memiliki skill yang dibutuhkan ? Tenang, kamu bisa
          mengikuti workshop Frontend dan Backend yang diadakan oleh Gatherloop
          untuk mempelajari skill dasar yang dibutuhkan untuk menjadi seorang
          Frontend dan Backend Engineer
        </Paragraph>
        <Anchor
          href="https://www.instagram.com/gatherloop"
          textDecorationLine="none"
        >
          <Button theme="blue" icon={ArrowRightCircle}>
            LIHAT JADWAL WORKSHOP
          </Button>
        </Anchor>
      </YStack>

      <YStack space="$3" flex={1} width="100%">
        {items.map((item) => (
          <ItemCard key={item.title} marginBottom="$0" {...item} />
        ))}
      </YStack>
    </XStack>
  );
}
