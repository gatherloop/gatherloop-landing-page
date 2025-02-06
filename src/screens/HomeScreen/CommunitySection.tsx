import React from "react";
import { Anchor, Button, H1, Image, Paragraph, XStack, YStack } from "tamagui";
import { PageHeader } from "tamakit";

const events: EventCardProps[] = [
  {
    title: "Software Engineer",
    description:
      "Gatherloop punya komunitas software engineer buat kamu yang mau belajar seputar Frontend, Backend, dan Android develoment. Seminggu sekali akan ada meetup dimana kamu bisa konsultasi dan belajar bareng teman teman yang lain.",
    logoUrl: "/assets/images/BootcampIT.png",
    logoPosition: "left",
    photoUrls: [
      "/assets/images/EventBootcampIT1.jpg",
      "/assets/images/EventBootcampIT2.jpg",
      "/assets/images/EventBootcampIT3.jpg",
      "/assets/images/EventBootcampIT4.jpg",
    ],
    joinButtons: [
      { label: "Join Basic Programming", href: "/join-basic-programming" },
      { label: "Join Frontend", href: "/join-frontend" },
      { label: "Join Backend", href: "/join-backend" },
      { label: "Join Android", href: "/join-android" },
    ],
  },
  {
    title: "English Day",
    description:
      "Seminggu sekali, Gatherloop ngadain english day dimana kamu bakalan bisa ngelatih kemampuan berbahasa inggrismu. Gabung ke grup untuk lihat jadwalnya",
    logoUrl: "/assets/images/EnglishDay.png",
    logoPosition: "right",
    photoUrls: [
      "/assets/images/Thumbnail.svg",
      "/assets/images/Thumbnail.svg",
      "/assets/images/Thumbnail.svg",
      "/assets/images/Thumbnail.svg",
    ],
    joinButtons: [{ label: "Join English Day", href: "/join-english" }],
  },
  {
    title: "Bedah Buku",
    description:
      "Gatherloop menjadi tempat berkumpulnya para pecinta buku yang secara rutin mengadakan event bedah buku setiap bulan. Di setiap acara, satu judul buku akan dibahas secara mendalam untuk menggali isi dan poin-poin pentingnya",
    logoUrl: "/assets/images/BedahBuku.png",
    logoPosition: "left",
    photoUrls: [
      "/assets/images/EventBedahBuku1.jpg",
      "/assets/images/EventBedahBuku2.jpg",
      "/assets/images/EventBedahBuku3.jpg",
      "/assets/images/EventBedahBuku4.jpg",
    ],
    joinButtons: [{ label: "Join Bedah Buku", href: "/join-book" }],
  },
  {
    title: "Board Game",
    description:
      "Pengen main board game tapi gak punya temen ? Jangan hawatir, kamu tinggal join komunitas board game Gatherloop dan cari teman main",
    logoUrl: "/assets/images/PlayDay.png",
    logoPosition: "right",
    photoUrls: [
      "/assets/images/EventBoardGame1.jpg",
      "/assets/images/EventBoardGame2.jpg",
      "/assets/images/EventBoardGame3.jpg",
      "/assets/images/EventBoardGame4.jpg",
    ],
    joinButtons: [
      {
        label: "Join Board Game",
        href: "/join-board-game",
      },
    ],
  },
  {
    title: "Sport",
    description:
      "Di Gatherloop, menjaga kesehatan dan kebugaran sama pentingnya dengan mengasah keterampilan. Oleh karena itu, kami rutin mengadakan kegiatan olahraga seperti futsal dan bulu tangkis bersama.",
    logoUrl: "/assets/images/Sport.png",
    logoPosition: "left",
    photoUrls: [
      "/assets/images/EventSport1.jpg",
      "/assets/images/EventSport2.jpg",
      "/assets/images/EventSport3.jpg",
      "/assets/images/EventSport4.jpg",
    ],
    joinButtons: [{ label: "Join Sport", href: "/join-sport" }],
  },
];

type EventCardProps = {
  title: string;
  description: string;
  logoUrl: string;
  logoPosition: "left" | "right";
  photoUrls: string[];
  joinButtons: { label: string; href: string }[];
};

function EventCard(props: EventCardProps) {
  return (
    <YStack padding="$8" space="$8">
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
          width="100%"
          maxWidth={280}
          height="auto"
          aspectRatio={1}
          flex={1}
          flexBasis="100%"
          source={{ uri: props.logoUrl }}
          defaultSource={{ uri: props.logoUrl }}
          alt="event logo"
        />
        <YStack
          backgroundColor="$background"
          padding="$8"
          borderRadius="$5"
          space="$3"
        >
          <H1
            size="$10"
            textAlign="center"
            $gtSm={{ textAlign: "left" }}
            maxWidth={500}
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
          <XStack
            gap={12}
            flexWrap="wrap"
            justifyContent="center"
            $gtSm={{ justifyContent: "flex-start" }}
          >
            {props.joinButtons.map((joinButton) => (
              <Anchor
                key={joinButton.label}
                href={joinButton.href}
                textDecorationLine="none"
              >
                <Button>{joinButton.label}</Button>
              </Anchor>
            ))}
          </XStack>
        </YStack>
      </YStack>
      <XStack gap={15} flexWrap="wrap" justifyContent="center">
        {props.photoUrls.map((photoUrl) => (
          <YStack flexBasis="46%" $gtSm={{ flexBasis: "23%" }} key={photoUrl}>
            <Image
              width="100%"
              height="auto"
              aspectRatio={1}
              source={{ uri: photoUrl }}
              defaultSource={{ uri: photoUrl }}
              alt="photo image"
            />
          </YStack>
        ))}
      </XStack>
    </YStack>
  );
}

export function CommunitySection() {
  return (
    <>
      <PageHeader
        tag="Komunitas"
        title="Ikut Komunitas Gatherloop Buat Nambah Relasimu"
        subtitle="Boost skillmu dengan ubah circlemu"
        align="center"
      />
      <YStack paddingVertical="$10" space="$5">
        {events.map((event) => (
          <EventCard key={event.title} {...event} />
        ))}
      </YStack>
    </>
  );
}
