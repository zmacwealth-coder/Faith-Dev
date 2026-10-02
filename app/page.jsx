import Header from './components/Header';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import Services from './components/Services';
import Stack from './components/Stack';
import Projects from './components/Projects';
import Standards from './components/Standards';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Marquee />
        <Services />
        <Stack />
        <Projects />
        <Standards />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
