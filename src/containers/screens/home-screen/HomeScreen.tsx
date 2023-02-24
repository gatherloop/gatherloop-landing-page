import React from "react";
import { YStack } from "tamagui";
import {
  Container,
  FacilitySection,
  HeroSection,
  JoinSection,
  LocationSection,
  Navbar,
  ProblemSection,
  ProgramSection,
} from "../../../presentations";

export type HomeScreenProps = {};

export function HomeScreen(_props: HomeScreenProps) {
  return (
    <Container>
      <YStack space="$8" paddingVertical="$5">
        <Navbar />
        <HeroSection />
        <ProblemSection />
        <ProgramSection />
        <FacilitySection />
        <LocationSection />
        <JoinSection />
      </YStack>
    </Container>
  );
}
