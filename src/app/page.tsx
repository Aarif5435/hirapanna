import Collection from "@/components/collection";
import Footer from "@/components/footer";
import { HeroSection } from "@/components/hero";
import { Navbar } from "@/components/navbar";
import { SelectedWork } from "@/components/selectedWork";
import { StorySection } from "@/components/storySection";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <StorySection/>
      <SelectedWork/>
      <Collection/>
      <Footer/>
    </>
  );
}
