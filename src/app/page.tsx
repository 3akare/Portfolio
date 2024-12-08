import HeroSection from "@/app/components/HeroSection";
import Projects from "@/app/components/Projects";
import Experience from "@/app/components/Experience";
import About from "@/app/components/About";
import Banner from "@/app/components/Banner";

export default function Home() {
  return (
    <>
        <HeroSection/>
        <Projects/>
        <About/>
        <Experience/>
        <Banner/>
    </>
  );
}
