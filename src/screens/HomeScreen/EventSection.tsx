import React from "react";
import { H1, Image, Paragraph, XStack, YStack } from "tamagui";

const events: EventCardProps[] = [
  {
    id: "bootcampIT",
    title: "Bootcamp IT",
    description:
      "Gatherloop mengadakan bootcamp IT mingguan dengan topik menarik seputar Frontend, Backend, dan Android. Program ini dirancang khusus untuk kamu yang ingin memperdalam pengetahuan di bidang teknologi.",
    logoUrl: "/assets/images/BootcampIT.png",
    logoPosition: "left",
    photoUrls: [
      "/assets/images/EventBootcampIT1.jpg",
      "/assets/images/EventBootcampIT2.jpg",
      "/assets/images/EventBootcampIT3.jpg",
      "/assets/images/EventBootcampIT4.jpg",
    ],
  },
  {
    id: "bedahBuku",
    title: "Bedah Buku",
    description:
      "Gatherloop menjadi tempat berkumpulnya para pecinta buku yang secara rutin mengadakan event bedah buku setiap bulan. Di setiap acara, satu judul buku akan dibahas secara mendalam untuk menggali isi dan poin-poin pentingnya",
    logoUrl: "/assets/images/BedahBuku.png",
    logoPosition: "right",
    photoUrls: [
      "/assets/images/EventBedahBuku1.jpg",
      "/assets/images/EventBedahBuku2.jpg",
      "/assets/images/EventBedahBuku3.jpg",
      "/assets/images/EventBedahBuku4.jpg",
    ],
  },
  {
    id: "boardGame",
    title: "Board Game",
    description:
      "Gatherloop memiliki berbagai koleksi board game, seperti Monopoly, Ular Tangga, Catur, Catan, dan masih banyak lagi. Nikmati waktu bermain bersama teman di event board game yang diadakan setiap akhir pekan",
    logoUrl: "/assets/images/PlayDay.png",
    logoPosition: "left",
    photoUrls: [
      "/assets/images/EventBoardGame1.jpg",
      "/assets/images/EventBoardGame2.jpg",
      "/assets/images/EventBoardGame3.jpg",
      "/assets/images/EventBoardGame4.jpg",
    ],
  },
  {
    id: "sport",
    title: "Sport",
    description:
      "Di Gatherloop, menjaga kesehatan dan kebugaran sama pentingnya dengan mengasah keterampilan. Oleh karena itu, kami rutin mengadakan kegiatan olahraga seperti futsal dan bulu tangkis bersama.",
    logoUrl: "/assets/images/Sport.png",
    logoPosition: "right",
    photoUrls: [
      "/assets/images/EventSport1.jpg",
      "/assets/images/EventSport2.jpg",
    ],
  },
];

type EventCardProps = {
  id: string;
  title: string;
  description: string;
  logoUrl: string;
  logoPosition: "left" | "right";
  photoUrls: string[];
};

function EventCard(props: EventCardProps) {
  return (
    <YStack padding="$8" space="$8" id={props.id}>
      <YStack
        alignItems="center"
        justifyContent="center"
        space="$10"
        $gtSm={{
          flexDirection: props.logoPosition === "left" ? "row" : "row-reverse",
          alignItems: "flex-start",
        }}
      >
        <Image
          maxWidth={280}
          width="100%"
          height="auto"
          aspectRatio={1}
          flex={1}
          flexBasis="100%"
          src={{ uri: props.logoUrl }}
          defaultSource={{ uri: props.logoUrl }}
          alt="event logo"
        />
        <YStack
          flex={1}
          backgroundColor="$gray2"
          padding="$8"
          borderRadius="$5"
        >
          <H1
            size="$10"
            textAlign="center"
            $gtSm={{ textAlign: "left" }}
            maxWidth={500}
            lineHeight={80}
          >
            {props.title}
          </H1>
          <Paragraph
            size="$5"
            textAlign="center"
            $gtSm={{ textAlign: "left" }}
            maxWidth={500}
          >
            {props.description}
          </Paragraph>
        </YStack>
      </YStack>
      <XStack gap={15} flexWrap="wrap" justifyContent="center">
        {props.photoUrls.map((photoUrl) => (
          <YStack flexBasis="46%" $gtSm={{ flexBasis: "23%" }} key={photoUrl}>
            <Image
              width="100%"
              height="auto"
              aspectRatio={1}
              src={{ uri: photoUrl }}
              defaultSource={{ uri: photoUrl }}
              alt="photo image"
            />
          </YStack>
        ))}
      </XStack>
    </YStack>
  );
}

export function EventSection() {
  return (
    <YStack justifyContent="center" paddingVertical="$10" space="$5">
      <YStack gap={15} alignItems="center">
        <YStack maxWidth={600}>
          <H1 size="$10" textAlign="center">
            Perluas Wawasan dan Relasimu Lewat Event Gatherloop
          </H1>
          <Paragraph size="$5" textAlign="center">
            Gatherloop memiliki banyak event seru yang dapat kamu ikuti untuk
            menambah wawasan dan relasi sesuai dengan minatmu
          </Paragraph>
        </YStack>
      </YStack>

      {events.map((event) => (
        <EventCard key={event.id} {...event} />
      ))}
    </YStack>
  );
}
