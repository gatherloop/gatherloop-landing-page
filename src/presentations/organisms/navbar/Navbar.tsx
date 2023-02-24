import React from "react";
import { TouchableOpacity } from "react-native";
import { Paragraph, XStack, YStack } from "tamagui";
import { Logo } from "../../atoms";

const menuItems = [
  { title: "Permasalahan" },
  { title: "Program" },
  { title: "Fasilitas" },
  { title: "Lokasi" },
  { title: "Gabung" },
];

export type NavbarProps = {};

export function Navbar(_props: NavbarProps) {
  return (
    <XStack justifyContent="space-between" alignItems="center">
      <YStack flex={1}>
        <Logo width={236} height={50} />
      </YStack>
      <XStack space="$5" display="none" $gtXs={{ display: "flex" }}>
        {menuItems.map(({ title }) => (
          <TouchableOpacity key={title} onPress={() => console.log("clicked")}>
            <Paragraph>{title}</Paragraph>
          </TouchableOpacity>
        ))}
      </XStack>
    </XStack>
  );
}
