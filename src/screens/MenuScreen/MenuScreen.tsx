import React from "react";
import { Image, ScrollView, YStack } from "tamagui";

export function MenuScreen() {
  return (
    <ScrollView gap="$3" padding="$3" height="100vh">
      <YStack maxWidth={640} alignSelf="center" width="100%" gap="$3">
        <Image
          width="100%"
          aspectRatio={840 / 1190}
          defaultSource={{ uri: "/assets/images/Menu1.png" }}
          source={{ uri: "/assets/images/Menu1.png" }}
          alt="Menu1"
        />
        <Image
          width="100%"
          aspectRatio={840 / 1190}
          defaultSource={{ uri: "/assets/images/Menu2.png" }}
          source={{ uri: "/assets/images/Menu2.png" }}
          alt="Menu2"
        />
        <Image
          width="100%"
          aspectRatio={840 / 1190}
          defaultSource={{ uri: "/assets/images/Menu3.png" }}
          source={{ uri: "/assets/images/Menu3.png" }}
          alt="Menu3"
        />
        <Image
          width="100%"
          aspectRatio={840 / 1190}
          defaultSource={{ uri: "/assets/images/Menu4.png" }}
          source={{ uri: "/assets/images/Menu4.png" }}
          alt="Menu4"
        />
        <Image
          width="100%"
          aspectRatio={840 / 1190}
          defaultSource={{ uri: "/assets/images/Menu5.png" }}
          source={{ uri: "/assets/images/Menu5.png" }}
          alt="Menu5"
        />
      </YStack>
    </ScrollView>
  );
}
