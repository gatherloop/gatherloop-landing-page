import React from "react";
import { Paragraph, XStack, YStack } from "tamagui";
import { Card, Container, Logo } from "../../atoms";
import Link from "next/link";

export const menuItems = {
  problems: {
    title: "Permasalahan",
    id: "problems",
  },
  programs: {
    title: "Program",
    id: "programs",
  },
  facilities: {
    title: "Fasilitas",
    id: "facilities",
  },
  location: {
    title: "Lokasi",
    id: "locations",
  },
  join: {
    title: "Gabung",
    id: "join",
  },
};

export type NavbarProps = {};

export function Navbar(_props: NavbarProps) {
  return (
    <Card justifyContent="space-between" borderVariant="flat">
      <Container flexDirection="row" alignItems="center">
        <YStack flex={1}>
          <Logo width={165} height={35} />
          <Paragraph>Tehehe</Paragraph>
        </YStack>
        <XStack space="$5" display="none" $gtXs={{ display: "flex" }}>
          {Object.entries(menuItems).map(([_key, { title, id }]) => (
            <Link
              key={title}
              href={`/#${id}`}
              style={{ textDecoration: "none" }}
            >
              <Paragraph>{title}</Paragraph>
            </Link>
          ))}
        </XStack>
      </Container>
    </Card>
  );
}
