import { ArrowRightCircle } from "@tamagui/lucide-icons";
import React from "react";
import {
  Anchor,
  Button,
  Image,
  Paragraph,
  XStack,
  YStack,
  YStackProps,
} from "tamagui";

export function MentorSection(props: YStackProps) {
  return (
    <YStack alignItems="center" justifyContent="center" space="$10" {...props}>
      <Image
        borderRadius="$20"
        maxWidth={240}
        width="100%"
        height="auto"
        aspectRatio={1}
        src={{
          uri: "https://media.licdn.com/dms/image/C5603AQEsF3F--ivLJg/profile-displayphoto-shrink_800_800/0/1622887591562?e=1687392000&v=beta&t=XXWTWu0wWpM-5b3Mwob8sWXCKm0oYiuxTSriQc-pUk8",
        }}
        defaultSource={{
          uri: "https://media.licdn.com/dms/image/C5603AQEsF3F--ivLJg/profile-displayphoto-shrink_800_800/0/1622887591562?e=1687392000&v=beta&t=XXWTWu0wWpM-5b3Mwob8sWXCKm0oYiuxTSriQc-pUk8",
        }}
        alt="mentor"
      />
      <YStack
        space="$5"
        flex={1}
        alignItems="center"
        $gtSm={{ alignItems: "flex-start" }}
        maxWidth={720}
      >
        <Paragraph size="$9" textAlign="center" $gtSm={{ textAlign: "left" }}>
          Halo, Saya Aka, Mentor yang akan membantumu mencapai goal yang kamu
          impikan
        </Paragraph>
        <Paragraph size="$5" textAlign="center" $gtSm={{ textAlign: "left" }}>
          Saya adalah seorang senior frontend engineer yang memiliki pengalaman
          lebih dari 4 tahun di industri dalam web development. Saya menggunakan
          Typescript, React, Next.js, dan beberapa tools lain untuk development
          sehari hari. Saya telah mengajar selama lebih dari 6 tahun untuk
          membantu fresh graduates dan junior engineer untuk mendapatkan
          pekerjaan impiannya
        </Paragraph>
        <XStack
          space="$3"
          justifyContent="center"
          $gtSm={{ justifyContent: "flex-start" }}
        >
          <Anchor href="/form-private-mentoring" textDecorationLine="none">
            <Button theme="blue" icon={ArrowRightCircle}>
              Profile Lengkap
            </Button>
          </Anchor>
        </XStack>
      </YStack>
    </YStack>
  );
}
