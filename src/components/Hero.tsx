import { Button } from './ui/button';
import { ArrowRight, Mail, Phone } from 'lucide-react';
import profileImage from '@/assets/utshab-profile.jpg';
import { useEffect, useState } from 'react';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-secondary/20 overflow-hidden"
      itemScope 
      itemType="https://schema.org/Person"
    >
      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 animate-grid-flow" 
             style={{
               backgroundImage: `
                 linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
                 linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
               `,
               backgroundSize: '50px 50px'
             }}>
        </div>
      </div>

      {/* Mouse-following gradient orb */}
      <div 
        className="absolute w-96 h-96 rounded-full blur-3xl opacity-20 pointer-events-none transition-all duration-300"
        style={{
          background: 'radial-gradient(circle, hsl(var(--tech-blue)) 0%, transparent 70%)',
          left: `${mousePosition.x - 192}px`,
          top: `${mousePosition.y - 192}px`,
        }}
      />

      {/* Tech Circuit Pattern with Animation */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full animate-pulse-slow" viewBox="0 0 1200 800" fill="none">
          <defs>
            <pattern id="circuit" patternUnits="userSpaceOnUse" width="200" height="200">
              <path d="M50 50h20v20h20v20h20M150 50h-20v20h-20v20h-20M50 150h20v-20h20v-20h20M150 150h-20v-20h-20v-20h-20" 
                    stroke="hsl(var(--tech-blue))" strokeWidth="1" opacity="0.3"/>
              <circle cx="50" cy="50" r="3" fill="hsl(var(--tech-teal))" opacity="0.5">
                <animate attributeName="opacity" values="0.3;0.8;0.3" dur="3s" repeatCount="indefinite"/>
              </circle>
              <circle cx="150" cy="150" r="3" fill="hsl(var(--primary))" opacity="0.5">
                <animate attributeName="opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite"/>
              </circle>
            </pattern>
            <linearGradient id="techGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(var(--tech-blue))" stopOpacity="0.3"/>
              <stop offset="100%" stopColor="hsl(var(--tech-teal))" stopOpacity="0.3"/>
            </linearGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit)"/>
        </svg>
      </div>

      {/* Floating Animated Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-tech-blue/30 rounded-full animate-float"
            style={{
              left: `${(i * 13) % 100}%`,
              top: `${(i * 17) % 100}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${4 + i}s`
            }}
          />
        ))}
      </div>

      {/* Floating Geometric Shapes with Enhanced Animation */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-tech-blue/20 rotate-45 animate-pulse-float" />
        <div className="absolute top-1/3 right-1/3 w-6 h-6 border-2 border-tech-teal/30 animate-spin-slow" />
        <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-primary/30 rounded-full animate-bounce-slow" />
        <div className="absolute top-1/2 right-1/4 w-8 h-1 bg-gradient-hero opacity-40 animate-pulse-slow" />
        <div className="absolute bottom-1/3 right-1/5 w-5 h-5 border border-tech-navy/20 animate-bounce-slow" style={{animationDelay: '1s'}} />
      </div>

      {/* Dynamic Gradient Orbs */}
      <div className="absolute inset-0 bg-gradient-hero opacity-5" />
      <div className="absolute top-20 right-20 w-72 h-72 bg-tech-teal/10 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-slower" />
      
      {/* Animated Tech Lines */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-0 w-1/3 h-px bg-gradient-to-r from-transparent via-tech-blue to-transparent animate-slide-right" />
        <div className="absolute bottom-1/4 right-0 w-1/3 h-px bg-gradient-to-l from-transparent via-tech-teal to-transparent animate-slide-left" />
        <div className="absolute left-1/4 top-0 w-px h-1/3 bg-gradient-to-b from-transparent via-primary to-transparent animate-slide-down" />
        <div className="absolute right-1/4 bottom-0 w-px h-1/3 bg-gradient-to-t from-transparent via-tech-navy to-transparent animate-slide-up" />
      </div>

      {/* Structured Data for SEO */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Utshab Acharya",
          "jobTitle": "Founder & CEO",
          "worksFor": {
            "@type": "Organization",
            "name": "Tech Trendo Multipurpose Company"
          },
          "email": "contact@utshabacharya.com.np",
          "telephone": "+977-9815602535",
          "address": {
            "@type": "PostalAddress",
            "addressRegion": "Koshi Province",
            "addressCountry": "Nepal"
          },
          "alumniOf": "Web Development",
          "knowsAbout": ["Web Development", "Frontend Development", "WordPress", "Tech Entrepreneurship"],
          "description": "Tech Entrepreneur creating innovative tech solutions for Nepal's future"
        })}
      </script>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-12 lg:gap-16 animate-fade-in">
          
          {/* Content */}
          <div className="flex-1 text-center lg:text-left space-y-4 sm:space-y-6">
            <h1 
              className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-slide-up"
              itemProp="name"
            >
              <span className="block text-foreground">Utshab</span>
              <span className="block bg-gradient-hero bg-clip-text text-transparent animate-gradient">
                Acharya
              </span>
            </h1>
            
            <div className="space-y-2">
              <p 
                className="font-body text-lg sm:text-xl md:text-2xl text-muted-foreground animate-slide-up"
                style={{animationDelay: '0.1s'}}
                itemProp="jobTitle"
              >
                Tech Entrepreneur | Founder & CEO
              </p>
              <p 
                className="font-body text-base sm:text-lg text-primary font-semibold animate-slide-up"
                style={{animationDelay: '0.2s'}}
                itemProp="worksFor"
              >
                Tech Trendo Multipurpose Company
              </p>
            </div>
            
            <p 
              className="font-body text-base sm:text-lg text-foreground/90 max-w-2xl mx-auto lg:mx-0 leading-relaxed animate-slide-up"
              style={{animationDelay: '0.3s'}}
              itemProp="description"
            >
              Creating innovative tech solutions for Nepal's future. Empowering businesses 
              through cutting-edge technology and visionary leadership.
            </p>

            {/* Contact Info */}
            <div 
              className="flex flex-col sm:flex-row gap-3 sm:gap-6 justify-center lg:justify-start animate-slide-up"
              style={{animationDelay: '0.4s'}}
            >
              <a 
                href="mailto:contact@utshabacharya.com.np"
                className="flex items-center gap-2 text-sm sm:text-base text-muted-foreground hover:text-primary transition-all duration-300 hover:translate-x-1"
                itemProp="email"
                aria-label="Email Utshab Acharya"
              >
                <Mail size={18} className="text-primary flex-shrink-0" />
                <span className="truncate">contact@utshabacharya.com.np</span>
              </a>
              <a 
                href="tel:+9779815602535"
                className="flex items-center gap-2 text-sm sm:text-base text-muted-foreground hover:text-primary transition-all duration-300 hover:translate-x-1"
                itemProp="telephone"
                aria-label="Call Utshab Acharya"
              >
                <Phone size={18} className="text-primary flex-shrink-0" />
                <span>+977 9815602535</span>
              </a>
            </div>

            {/* CTA Buttons */}
            <div 
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start animate-slide-up"
              style={{animationDelay: '0.5s'}}
            >
              <Button 
                onClick={() => scrollToSection('about')}
                className="bg-gradient-hero hover:shadow-medium hover:scale-105 transition-all duration-300 text-white w-full sm:w-auto"
                size="lg"
                aria-label="Learn more about Utshab Acharya"
              >
                Learn More About Me
                <ArrowRight size={20} className="ml-2" />
              </Button>
              <Button 
                onClick={() => scrollToSection('contact')}
                variant="outline"
                size="lg"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-white hover:scale-105 transition-all duration-300 w-full sm:w-auto"
                aria-label="Contact Utshab Acharya"
              >
                Get in Touch
              </Button>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex-shrink-0 animate-fade-in-scale" style={{animationDelay: '0.3s'}}>
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-hero rounded-2xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500 animate-pulse-slow" />
              <div className="absolute -inset-1 bg-gradient-hero rounded-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500 animate-spin-slow" />
              <img 
                src={profileImage}
                alt="Utshab Acharya - Tech Entrepreneur, Founder and CEO of Tech Trendo Multipurpose Company"
                className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 object-cover rounded-2xl shadow-strong border-4 border-background hover:scale-105 transition-transform duration-500"
                itemProp="image"
                loading="eager"
                width="384"
                height="384"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;