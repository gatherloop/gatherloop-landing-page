import React from "react";
import { Container } from "@/components";
import { ScrollView } from "tamagui";
import { HeroSection } from "./HeroSection";
import { WorkshopSection } from "./WorkshopSection";
import { MeetupSection } from "./MeetupSection";
import { PrivateMentoringSection } from "./PrivateMentoringSection";
import { FacilitySection } from "./FacilitySection";
import { FooterSection } from "./FooterSection";
import { LocationSection } from "./LocationSection";

export type HomeScreenProps = {};

export function HomeScreen(_props: HomeScreenProps) {
  return (
    <ScrollView overflow="scroll">
      <Container>
        <HeroSection />
        <WorkshopSection />
        <MeetupSection />
        <PrivateMentoringSection />
        <FacilitySection />
        <LocationSection />
      </Container>
      <FooterSection />
    </ScrollView>
  );
}
