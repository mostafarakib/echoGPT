// src/app/(marketing)/page.tsx
import { LandingNav } from "@/components/landing/LandingNav";
import { LandingHero } from "@/components/landing/LandingHero";
import { LandingFeatures } from "@/components/landing/LandingFeatures";
import { LandingModels } from "@/components/landing/LandingModels";
import { LandingWhyChoose } from "@/components/landing/LandingWhyChoose";
import { LandingPricing } from "@/components/landing/LandingPricing";
import { LandingTestimonials } from "@/components/landing/LandingTestimonials";
import { LandingFaq } from "@/components/landing/LandingFaq";
import { LandingFooter } from "@/components/landing/LandingFooter";
import { LandingCta } from "@/components/landing/LandingCta";

export default function LandingPage() {
  return (
    <>
      <LandingNav />
      <LandingHero />
      <LandingFeatures />
      <LandingModels />
      <LandingWhyChoose />
      <LandingPricing />
      <LandingTestimonials />
      <LandingFaq />
      <LandingCta />
      <LandingFooter />
    </>
  );
}
