import React from "react";
import { Container } from "@/components";
import { ScrollView } from "tamagui";
import { HeroSection } from "./HeroSection";
import { OfferingSection } from "./OfferingSection";
import { TestimonialSection } from "./TestimonialSection";
import { BenefitSection } from "./BenefitSection";
import { MentorSection } from "./MentorSection";
import { FlowSection } from "./FlowSection";
import { PricingSection } from "./PricingSection";

export function PrivateMentoringScreen() {
  return (
    <ScrollView overflow="scroll">
      <Container>
        <HeroSection />
        <OfferingSection />
        <BenefitSection />
        <FlowSection />
        <MentorSection />
        <TestimonialSection />
        <PricingSection />
      </Container>
    </ScrollView>
  );
}
