import React from "react";
import { ScrollView, YStack } from "tamagui";
import {
  Container,
  FacilitySection,
  HeroSection,
  JoinSection,
  LocationSection,
  Navbar,
  ProblemSection,
  ProgramSection,
  menuItems,
} from "../../../presentations";

export type HomeScreenProps = {};

export function HomeScreen(_props: HomeScreenProps) {
  return (
    <ScrollView flex={1}>
      <Container>
        <YStack space="$8" paddingVertical="$5">
          <Navbar />
          <HeroSection />
          <YStack id={menuItems.problems.id}>
            <ProblemSection />
          </YStack>
          <YStack id={menuItems.programs.id}>
            <ProgramSection />
          </YStack>
          <YStack id={menuItems.facilities.id}>
            <FacilitySection />
          </YStack>
          <YStack id={menuItems.location.id}>
            <LocationSection />
          </YStack>
          <YStack id={menuItems.join.id}>
            <JoinSection />
          </YStack>
        </YStack>
      </Container>
    </ScrollView>
  );
}
