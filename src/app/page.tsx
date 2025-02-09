import Collection from "@/components/collection";
import { HeroSection } from "@/components/hero";
import { SelectedWork } from "@/components/selectedWork";
import { StorySection } from "@/components/storySection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <StorySection/>
      <SelectedWork/>
      <Collection/>
    </>
  );
}
