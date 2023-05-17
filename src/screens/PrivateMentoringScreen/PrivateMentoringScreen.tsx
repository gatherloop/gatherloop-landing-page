import React from "react";
import { Container } from "@/components";
import { ScrollView, Theme, YStack } from "tamagui";
import { HeroSection } from "./HeroSection";
import { OfferingSection } from "./OfferingSection";
import { TestimonialSection } from "./TestimonialSection";
import { BenefitSection } from "./BenefitSection";
import { MentorSection } from "./MentorSection";
import { FlowSection } from "./FlowSection";
import { PricingSection } from "./PricingSection";

export function PrivateMentoringScreen() {
  return (
    <ScrollView overflow="scroll" space="$12">
      <Container marginVertical="$12">
        <HeroSection />
      </Container>

      <YStack backgroundColor="$background" paddingVertical="$12" theme="blue">
        <Container>
          <BenefitSection />
        </Container>
      </YStack>

      <Container space="$12">
        <FlowSection />
        <OfferingSection />
      </Container>

      <Theme inverse>
        <YStack
          backgroundColor="$background"
          paddingVertical="$12"
          theme="blue"
        >
          <Container>
            <MentorSection />
          </Container>
        </YStack>
      </Theme>

      <Container space="$12">
        <TestimonialSection />
        <PricingSection />
      </Container>
    </ScrollView>
  );
}
