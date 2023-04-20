import { Divider, ItemCard, ItemCardProps } from "@/components";
import { ArrowRightCircle, Book, Share2, Users } from "@tamagui/lucide-icons";
import React from "react";
import { Anchor, Button, H4, Image, Paragraph, XStack, YStack } from "tamagui";

const items: ItemCardProps[] = [
  {
    title: "PERLUAS WAWASAN",
    description:
      "Meetup GatherLoop menghadirkan para pembicara dari berbagai industri yang akan memberikan update terbaru tentang teknologi dan tren yang saat ini digunakan di industri. Acara ini menawarkan kesempatan bagi para peserta untuk memperluas pengetahuan mereka tentang tren dan inovasi di industri, dan juga dapat membantu dalam menentukan bidang yang harus dipelajari selanjutnya",
    icon: <Share2 />,
  },
  {
    title: "TEMUKAN RELASI BARU",
    description:
      "Meetup GatherLoop dihadiri oleh pelajar dan pengembang dari berbagai industri yang berbeda. Acara ini merupakan kesempatan yang tepat bagi peserta untuk memperluas jaringan kontak dan membangun hubungan yang baru. Dalam lingkungan yang santai dan ramah, peserta dapat berdiskusi tentang topik-topik terkait teknologi, berbagi pengalaman dan ide, dan meminta masukan dari rekan-rekan sejawat untuk membantu memperbaiki proses belajar mereka. ",
    icon: <Users />,
  },
];

export function MeetupSection() {
  return (
    <YStack marginTop="$12">
      <YStack space="$5">
        <XStack
          flexWrap="wrap"
          justifyContent="center"
          $gtSm={{ justifyContent: "flex-start" }}
        >
          <Image
            maxWidth={480}
            width="100%"
            height="100%"
            marginRight="$0"
            marginBottom="$3"
            $gtSm={{ marginRight: "$8", marginBottom: "$8" }}
            aspectRatio={2 / 1}
            defaultSource={{ uri: "/assets/images/Join.webp" }}
            src={{ uri: "/assets/images/Join.webp" }}
            alt="mentoring"
            borderRadius="$12"
          />

          <YStack flexBasis="100%" $gtSm={{ flexBasis: "40%" }} space="$5">
            <H4 textAlign="center" $gtSm={{ textAlign: "left" }}>
              MEETUP BULANAN
            </H4>
            <Divider alignSelf="center" $gtSm={{ alignSelf: "flex-start" }} />
            <Paragraph
              size="$9"
              fontWeight="normal"
              textAlign="center"
              $gtSm={{ textAlign: "left" }}
            >
              Kembangkan wawasan dan relasimu dengan bergabung dalam meetup
              bulanan Gatherloop
            </Paragraph>
            <Paragraph
              size="$5"
              textAlign="center"
              $gtSm={{ textAlign: "left" }}
            >
              Gatherloop mengadakan meetup rutin tiap bulan yang dapat dihadiri
              oleh pelajar, mahasiswa, fresh graduate, atau siapapun yang
              berkutat di bidang IT. Di setiap meetup akan ada topik yang
              dibawakan oleh developer dari industri, sehingga cocok untuk
              menambah wawasan dan memperluas relasi
            </Paragraph>
            <XStack>
              <Anchor
                href="https://www.instagram.com/gatherloop"
                textDecorationLine="none"
              >
                <Button theme="blue" icon={ArrowRightCircle}>
                  LIHAT JADWAL MEETUP
                </Button>
              </Anchor>
            </XStack>
          </YStack>
        </XStack>

        <YStack space="$8" $gtMd={{ flexDirection: "row" }} marginTop="$10">
          {items.map((item) => (
            <ItemCard
              key={item.title}
              {...item}
              isTransparent
              flex={1}
              width="100%"
              height="100%"
            />
          ))}
        </YStack>
      </YStack>
    </YStack>
  );
}
