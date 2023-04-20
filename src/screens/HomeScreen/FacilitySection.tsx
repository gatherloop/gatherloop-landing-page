import { FacilityCard, Divider } from "@/components";
import React from "react";
import { H3, Paragraph, YStack } from "tamagui";

const items = [
  {
    title: "Coworking Space",
    imageUrl: "/assets/images/CoworkingSpace.webp",
    description:
      "Tempat yang nyaman untuk ngoding dan belajar bersama. Selain itu di tempat ini juga sering digunakan untuk kegiatan sharing, workshop, meetup, dll",
  },
  {
    title: "Meeting Room",
    imageUrl: "/assets/images/MeetingRoom.webp",
    description:
      "Ruangan ini cocok apabila kamu membutuhkan tempat yang tenang untuk meeting atau diskusi",
  },
  {
    title: "Kantin",
    imageUrl: "/assets/images/Canteen.webp",
    description:
      "Kelaparan saat ngoding ? Tenang, di Gatherloop ada kantin yang bisa membantumu dalam mengisi kekosongan perutmu",
  },
  {
    title: "Mushola",
    imageUrl: "/assets/images/PrayerRoom.webp",
    description:
      "Jangan cuma ngoding, ingat juga ibadah agar selamat dunia akhirat. Gatherloop memiliki mushola yang dapat digunakan untuk beribadah",
  },
];

export function FacilitySection() {
  return (
    <YStack marginTop="$10" space="$8">
      <YStack
        justifyContent="space-between"
        alignItems="center"
        $gtXs={{ flexDirection: "row" }}
        space="$5"
      >
        <YStack space="$3" flex={1}>
          <H3 textAlign="center" $gtXs={{ textAlign: "left" }}>
            FASILITAS BASECAMP
          </H3>
          <Divider alignSelf="center" $gtSm={{ alignSelf: "flex-start" }} />
          <Paragraph
            size="$5"
            textAlign="center"
            $gtXs={{ textAlign: "left" }}
            maxWidth={640}
          >
            Gatherloop memiliki basecamp yang menyediakan beberapa fasilitas
            untuk menunjang kenyamanan belajarmu
          </Paragraph>
        </YStack>
      </YStack>

      <YStack space="$8" $gtXs={{ flexDirection: "row" }}>
        {items.map((item) => (
          <FacilityCard
            key={item.title}
            {...item}
            flex={1}
            width="100%"
            height="100%"
          />
        ))}
      </YStack>
    </YStack>
  );
}
