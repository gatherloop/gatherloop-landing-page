import React from "react";
import { XStack, YStack } from "tamagui";
import { Content } from "../../molecules";
import { Card, Image } from "../../atoms";

export type FacilitySectionProps = {};

const facilities = [
  {
    title: "Coworking Space",
    description:
      "Tempat yang nyaman untuk ngoding dan belajar bersama. Selain itu di tempat ini juga sering digunakan untuk kegiatan sharing, workshop, meetup, dll",
    imageSrc: "/assets/images/CoworkingSpace.webp",
  },
  {
    title: "Meeting Room",
    description:
      "Ruangan ini cocok apabila kamu membutuhkan tempat yang tenang untuk meeting atau diskusi",
    imageSrc: "/assets/images/MeetingRoom.webp",
  },
  {
    title: "Kantin",
    description:
      "Kelaparan saat ngoding ? Tenang, di Gatherloop ada kantin yang bisa membantumu dalam mengisi kekosongan perutmu",
    imageSrc: "/assets/images/Canteen.webp",
  },
  {
    title: "Mushola",
    description:
      "Jangan cuma ngoding, ingat juga ibadah agar selamat dunia akhirat. Gatherloop memiliki mushola yang dapat digunakan untuk beribadah",
    imageSrc: "/assets/images/PrayerRoom.webp",
  },
];

export function FacilitySection(_props: FacilitySectionProps) {
  return (
    <YStack justifyContent="space-between" space="$5">
      <Content
        size="lg"
        align="center"
        title="Fasilitas Basecamp"
        descriptions={[
          "Gatherloop memiliki basecamp yang menyediakan beberapa fasilitas untuk menunjang kenyamanan belajarmu",
        ]}
      />
      <XStack justifyContent="space-between" flexWrap="wrap">
        {facilities.map(({ title, description, imageSrc }) => (
          <YStack
            key={title}
            flexBasis="100%"
            padding="$2"
            $gtXs={{ flexBasis: "50%" }}
            $gtMd={{ flexBasis: "25%" }}
          >
            <Card space="$3" alignItems="center" flex={1}>
              <Image src={imageSrc} alt={title} width={528} height={416} />
              <Content
                align="center"
                title={title}
                descriptions={[description]}
              />
            </Card>
          </YStack>
        ))}
      </XStack>
    </YStack>
  );
}
