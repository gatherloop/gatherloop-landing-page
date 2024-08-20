import React from "react";
import { Container, Navbar } from "@/components";
import { ScrollView, Theme } from "tamagui";
import { HeroSection } from "./HeroSection";
import { FooterSection } from "./FooterSection";
import { LocationSection } from "./LocationSection";
import { CafeSection } from "./CafeSection";
import { CommunitySection } from "./CommunitySection";
import { EventSection } from "./EventSection";

export type HomeScreenProps = {};

export function HomeScreen(_props: HomeScreenProps) {
  return (
    <>
      <Navbar />
      <ScrollView overflow="scroll">
        <Container>
          <HeroSection />
          <CafeSection />
          <EventSection />
          <LocationSection />
        </Container>
        <FooterSection />
      </ScrollView>
    </>
  );
}
