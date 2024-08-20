import { Anchor, Button, SizableText, XStack, YStack } from "tamagui";
import { Container } from "./Container";
import Logo from "./Logo";

const links = [
  { label: "Bootcamp IT", href: "#bootcampIT" },
  { label: "Bedah Buku", href: "#bedahBuku" },
  { label: "Board Game", href: "#boardGame" },
  { label: "Sport", href: "#sport" },
  { label: "Lokasi", href: "#lokasi" },
];

export function Navbar() {
  return (
    <YStack paddingVertical="$5" backgroundColor="$gray2">
      <Container justifyContent="space-between" flexDirection="row">
        <Anchor href="#home" width={176} height={45}>
          <Logo width={176} height={45} />
        </Anchor>
        <XStack
          alignItems="center"
          gap={50}
          display="none"
          $gtSm={{ display: "flex" }}
        >
          {links.map(({ label, href }) => (
            <Anchor href={href} textDecorationLine="none" key={label}>
              <SizableText>{label}</SizableText>
            </Anchor>
          ))}
        </XStack>
      </Container>
    </YStack>
  );
}
