import { HeroSection } from '@/app/components/landing/HeroSection';
import { MemberSection } from '@/app/components/landing/MemberSection';
import { OnlineGuide } from '@/app/components/landing/OnlineGuide';
import { SpeciesSection } from '@/app/components/landing/SpeciesSection';
import { DiscoverBirds } from '@/app/components/landing/DiscoverBirds';
import { BooksPublications } from '@/app/components/landing/BooksPublications';
import { BuboApp } from '@/app/components/landing/BuboApp';
import { ForumTestimonials } from '@/app/components/landing/ForumTestimonials';
import { SupportSection } from '@/app/components/landing/SupportSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <MemberSection />
      <OnlineGuide />
      <SpeciesSection />
      <DiscoverBirds />
      <BooksPublications />
      <BuboApp />
      <ForumTestimonials />
      <SupportSection />
    </>
  );
}
