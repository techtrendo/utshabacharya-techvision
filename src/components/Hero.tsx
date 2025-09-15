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
      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" 
             style={{
               backgroundImage: `
                 linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
                 linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
               `,
               backgroundSize: '50px 50px',
               animation: 'grid-move 20s linear infinite'
             }}>
        </div>
      </div>

      {/* Tech Circuit Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 1200 800" fill="none">
          <defs>
            <pattern id="circuit" patternUnits="userSpaceOnUse" width="200" height="200">
              <path d="M50 50h20v20h20v20h20M150 50h-20v20h-20v20h-20M50 150h20v-20h20v-20h20M150 150h-20v-20h-20v-20h-20" 
                    stroke="hsl(var(--tech-blue))" strokeWidth="1" opacity="0.3"/>
              <circle cx="50" cy="50" r="3" fill="hsl(var(--tech-teal))" opacity="0.5"/>
              <circle cx="150" cy="150" r="3" fill="hsl(var(--primary))" opacity="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit)"/>
        </svg>
      </div>

      {/* Floating Geometric Shapes */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-tech-blue/20 rotate-45 animate-pulse" style={{animationDelay: '0s'}}></div>
        <div className="absolute top-1/3 right-1/3 w-6 h-6 border-2 border-tech-teal/30 rotate-12" style={{animation: 'spin 15s linear infinite'}}></div>
        <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-primary/30 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 right-1/4 w-8 h-1 bg-gradient-hero opacity-40" style={{animation: 'pulse 3s ease-in-out infinite'}}></div>
        <div className="absolute bottom-1/3 right-1/5 w-5 h-5 border border-tech-navy/20" style={{animation: 'bounce 4s ease-in-out infinite'}}></div>
      </div>

      {/* Dynamic Gradient Orbs */}
      <div className="absolute inset-0 bg-gradient-hero opacity-5"></div>
      <div className="absolute top-20 right-20 w-72 h-72 bg-tech-teal/10 rounded-full blur-3xl animate-pulse" style={{animationDuration: '4s'}}></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl" style={{animation: 'pulse 6s ease-in-out infinite'}}></div>
      
      {/* Tech Lines */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-0 w-1/3 h-px bg-gradient-to-r from-transparent via-tech-blue to-transparent"></div>
        <div className="absolute bottom-1/4 right-0 w-1/3 h-px bg-gradient-to-l from-transparent via-tech-teal to-transparent"></div>
        <div className="absolute left-1/4 top-0 w-px h-1/3 bg-gradient-to-b from-transparent via-primary to-transparent"></div>
        <div className="absolute right-1/4 bottom-0 w-px h-1/3 bg-gradient-to-t from-transparent via-tech-navy to-transparent"></div>
      </div>

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