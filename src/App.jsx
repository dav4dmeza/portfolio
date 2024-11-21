import AboutMe from "@/components/AboutMe";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Project from "@/components/Project";
import Skill from "@/components/Skill";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Experience />
        <Project />
        <AboutMe />
        <Skill />
      </main>
      <Footer />
    </>
  );
}
