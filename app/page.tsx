import { Poppins, Montserrat } from "next/font/google";
import Main from "@/components/Main";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export default function Home() {
  return (
    <div className={montserrat.className}>
      <Navbar />
      <Main />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}
