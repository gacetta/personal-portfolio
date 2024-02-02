import styles from "./page.module.css";
import { NavBar } from "./components/NavBar/NavBar";
import { Hero } from "./components/Hero/Hero";
import { About } from "./components/About/About";
import { Resume } from "./components/Resume/Resume";
import { Projects } from "./components/Projects/Projects";
import { Contact } from "./components/Contact/Contact";
import { Footer } from "./components/Footer";
import { TransparentNavBarBg } from "./components/NavBar/TransparentNavBarBg";

export default function Home() {
  return (
    <main>
      <TransparentNavBarBg />
      <NavBar />
      <Hero />
      <About />
      <Resume />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
