import { Divider } from "@/components";
import { CheckCircle2 } from "@tamagui/lucide-icons";
import React from "react";
import { H5, Paragraph, Theme, XStack, YStack, YStackProps } from "tamagui";

const items = [
  {
    title: "Basic",
    description: "Untuk Masa Depan yang lebih baik",
    price: 600000,
    benefits: [
      "Mentoring secara one on one",
      "Penyesuaian roadmap belajar",
      "Konsultasi via whatsapp tak terbatas",
      "Pertemuan 1 kali dalam seminggu",
    ],
    isRecommended: false,
  },
  {
    title: "Pro",
    description: "Untuk Masa Depan yang lebih baik",
    price: 1500000,
    benefits: [
      "Mentoring secara one on one",
      "Penyesuaian roadmap belajar",
      "Konsultasi via whatsapp tak terbatas",
      "Pertemuan 3 kali dalam seminggu",
    ],
    isRecommended: true,
  },
  {
    title: "Standard",
    description: "Untuk Masa Depan yang lebih baik",
    price: 1000000,
    benefits: [
      "Mentoring secara one on one",
      "Penyesuaian roadmap belajar",
      "Konsultasi via whatsapp tak terbatas",
      "Pertemuan 2 kali dalam seminggu",
    ],
    isRecommended: false,
  },
];

export function PricingSection(props: YStackProps) {
  return (
    <YStack
      alignItems="center"
      justifyContent="center"
      space="$10"
      $gtSm={{ flexDirection: "row", alignItems: "flex-start" }}
      {...props}
    >
      <XStack gap={24}>
        {items.map((item) => (
          <Theme key={item.title} inverse={item.isRecommended}>
            <YStack
              space="$5"
              flex={1}
              alignItems="center"
              $gtSm={{ alignItems: "flex-start" }}
              backgroundColor="$background"
              borderColor="$borderColor"
              borderRadius="$5"
              theme="blue"
              padding="$8"
              flexShrink={1}
              flexGrow={0}
              flexBasis="33%"
            >
              <H5 textAlign="center" $gtSm={{ textAlign: "left" }}>
                {item.title}
              </H5>
              <Divider />
              <Paragraph
                size="$9"
                maxWidth={600}
                textAlign="center"
                $gtSm={{ textAlign: "left" }}
              >
                Rp. {item.price.toLocaleString()} / Bulan
              </Paragraph>

              <Paragraph
                size="$5"
                textAlign="center"
                $gtSm={{ textAlign: "left" }}
              >
                {item.description}
              </Paragraph>

              {item.benefits.map((benefit) => (
                <XStack space="$3" key={benefit}>
                  <CheckCircle2 />
                  <Paragraph>{benefit}</Paragraph>
                </XStack>
              ))}
            </YStack>
          </Theme>
        ))}
      </XStack>
    </YStack>
  );
}
