import "./css/Main.css";
import "./css/Massage.css";

import Home from "./Main/Home";
import About from "./Main/About";
import Qualifications from "./Main/Qualifications";
import Skills from "./Main/Skills";
import Projects from "./Main/Projects";
import Contacts from "./Main/Contacts";
import Footer from "./footer";

import ScrollReveal from "./ScrollReveal";


const Main = () => {

  return (
    <main>

      {/* HERO — instantly visible */}
      <Home />


      {/* ABOUT — comes from left */}
      <ScrollReveal direction="left">
        <About />
      </ScrollReveal>


      {/* QUALIFICATIONS — comes from right */}
      <ScrollReveal direction="right">
        <Qualifications />
      </ScrollReveal>


      {/* SKILLS — rises upward */}
      <ScrollReveal direction="up">
        <Skills />
      </ScrollReveal>


      {/* PROJECTS — rises upward with slight delay */}
      <ScrollReveal
        direction="up"
        delay={0.05}
      >
        <Projects />
      </ScrollReveal>


      {/* CONTACT — cinematic upward reveal */}
      <ScrollReveal
        direction="up"
        delay={0.1}
      >
        <Contacts />
      </ScrollReveal>


      <Footer />

    </main>
  );
};


export default Main;