import DockBar from "./_components/DockBar";
import Navbar from "./_components/Navbar";
import Hero from "./_components/Hero";
import Projects from "./_components/Projects";
import About from "./_components/About";
import Contact from "./_components/Contact";

export default function Home() {
  return (
   <>
    <Navbar />
    <Hero/>
    <About/>
    <Projects/>
    {/* <Skills/> */}
    <Contact/>
    <DockBar/>
   </>
  );
}
