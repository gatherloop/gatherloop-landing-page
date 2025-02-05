import React from "react";
import { Instagram, Menu } from "@tamagui/lucide-icons";
import { ScrollView, YStack } from "tamagui";
import { Layout, Navbar, Footer, Container } from "tamakit";
import { CommunitySection } from "./CommunitySection";
import { LocationSection } from "./LocationSection";
import { HeroSection } from "./HeroSection";
import { VibeSection } from "./VibeSection";
import { MenuSection } from "./MenuSection";
import { PromoSection } from "./PromoSection";
import { FacilitySection } from "./FacilitySection";
import { EventSection } from "./EventSection";

export type HomeScreenProps = {};

const links = [
  { title: "Suasana", href: "#suasana" },
  { title: "Menu", href: "#menu" },
  { title: "Promo", href: "#promo" },
  { title: "Fasilitas", href: "#fasilitas" },
  { title: "Kegiatan", href: "#kegiatan" },
  { title: "Komunitas", href: "#komunitas" },
  { title: "Lokasi", href: "#lokasi" },
];

export function HomeScreen(_props: HomeScreenProps) {
  return (
    <Layout
      navbar={
        <Navbar
          mobileMenuIcon={Menu}
          links={links}
          logoImageSource="/assets/images/GatherloopLogoDarkTheme.png"
        />
      }
      main={
        <ScrollView>
          <YStack gap="$10">
            <HeroSection />

            <Container>
              <YStack id="suasana">
                <VibeSection />
              </YStack>
            </Container>

            <Container>
              <YStack id="menu">
                <MenuSection />
              </YStack>
            </Container>

            <Container>
              <YStack id="promo">
                <PromoSection />
              </YStack>
            </Container>

            <Container>
              <YStack id="fasilitas">
                <FacilitySection />
              </YStack>
            </Container>

            <Container>
              <YStack id="kegiatan">
                <EventSection />
              </YStack>
            </Container>

            <Container>
              <YStack id="komunitas">
                <CommunitySection />
              </YStack>
            </Container>

            <Container>
              <YStack id="lokasi">
                <LocationSection />
              </YStack>
            </Container>

            <YStack marginBottom="$10"></YStack>
          </YStack>
        </ScrollView>
      }
      footer={
        <Footer
          logoImageSource="/assets/images/GatherloopLogoDarkTheme.png"
          tagline="Nongkrong, Belajar, dan Berkembang Bareng"
          links={[{ title: "Menu", subLinks: links }]}
          socialMediaLinks={[
            {
              icon: <Instagram />,
              href: "https://www.instagram.com/gatherloop/",
            },
          ]}
          copyrightText="copyright &copy; Gatherloop 2025"
        />
      }
    />
  );
}
