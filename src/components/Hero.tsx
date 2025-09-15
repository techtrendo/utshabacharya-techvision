import { Button } from './ui/button';
import { ArrowRight, Mail, Phone } from 'lucide-react';
import profileImage from '@/assets/utshab-profile.jpg';

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-secondary/30 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-hero opacity-5"></div>
      <div className="absolute top-20 right-20 w-72 h-72 bg-tech-teal/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          
          {/* Content */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold text-tech-navy mb-6">
              <span className="block">Utshab</span>
              <span className="block bg-gradient-hero bg-clip-text text-transparent">
                Acharya
              </span>
            </h1>
            
            <p className="font-body text-xl md:text-2xl text-muted-foreground mb-4">
              Tech Entrepreneur | Founder & CEO
            </p>
            <p className="font-body text-lg text-primary font-semibold mb-8">
              Tech Trendo Multipurpose Company
            </p>
            
            <p className="font-body text-lg text-foreground mb-10 max-w-2xl">
              Creating innovative tech solutions for Nepal's future. Empowering businesses 
              through cutting-edge technology and visionary leadership.
            </p>

            {/* Contact Info */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10 justify-center lg:justify-start">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Mail size={20} className="text-primary" />
                <a 
                  href="mailto:contact@utshabacharya.com.np"
                  className="hover:text-primary transition-colors"
                >
                  contact@utshabacharya.com.np
                </a>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Phone size={20} className="text-primary" />
                <a 
                  href="tel:+9779815602535"
                  className="hover:text-primary transition-colors"
                >
                  +977 9815602535
                </a>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                onClick={() => scrollToSection('about')}
                className="bg-gradient-hero hover:shadow-medium transition-all duration-300"
                size="lg"
              >
                Learn More About Me
                <ArrowRight size={20} className="ml-2" />
              </Button>
              <Button 
                onClick={() => scrollToSection('contact')}
                variant="outline"
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                Get in Touch
              </Button>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex-shrink-0">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-hero rounded-2xl blur-2xl opacity-30 transform rotate-6"></div>
              <img 
                src={profileImage}
                alt="Utshab Acharya - Tech Entrepreneur"
                className="relative w-80 h-80 lg:w-96 lg:h-96 object-cover rounded-2xl shadow-strong border-4 border-background"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;