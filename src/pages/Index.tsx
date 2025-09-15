import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Work from '../components/Work';
import Career from '../components/Career';
import Vision from '../components/Vision';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <About />
      <Work />
      <Career />
      <Vision />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
