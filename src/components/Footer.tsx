import { Button } from './ui/button';
import { Separator } from './ui/separator';
import { Mail, Phone, MapPin, ExternalLink, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Quick Links',
      links: [
        { label: 'About', href: '#about' },
        { label: 'Work & Projects', href: '#work' },
        { label: 'Career Journey', href: '#career' },
        { label: 'Vision & Goals', href: '#vision' },
        { label: 'Contact', href: '#contact' }
      ]
    },
    {
      title: 'Services',
      links: [
        { label: 'Web Development', href: '#work' },
        { label: 'Mobile App Development', href: '#work' },
        { label: 'Digital Transformation', href: '#work' },
        { label: 'Tech Consulting', href: '#work' },
        { label: 'Business Solutions', href: '#work' }
      ]
    },
    {
      title: 'Connect',
      links: [
        { label: 'LinkedIn', href: '#', external: true },
        { label: 'GitHub', href: '#', external: true },
        { label: 'Twitter', href: '#', external: true },
        { label: 'Facebook', href: '#', external: true },
        { label: 'Instagram', href: '#', external: true }
      ]
    }
  ];

  const scrollToSection = (id: string) => {
    if (id.startsWith('#')) {
      const element = document.getElementById(id.substring(1));
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-tech-navy text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1 space-y-6">
            <div>
              <h3 className="font-heading text-2xl font-bold mb-3">
                Utshab Acharya
              </h3>
              <p className="font-body text-white/80 leading-relaxed">
                Tech Entrepreneur & Founder of Tech Trendo Multipurpose Company. 
                Creating innovative solutions for Nepal's digital future.
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <Mail className="w-4 h-4 text-tech-teal" />
                <a 
                  href="mailto:contact@utshabacharya.com.np"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  contact@utshabacharya.com.np
                </a>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Phone className="w-4 h-4 text-tech-teal" />
                <a 
                  href="tel:+9779815602535"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  +977 9815602535
                </a>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <MapPin className="w-4 h-4 text-tech-teal" />
                <span className="text-white/80">Koshi Province, Nepal</span>
              </div>
            </div>
          </div>

          {/* Links Sections */}
          {footerSections.map((section) => (
            <div key={section.title} className="space-y-4">
              <h4 className="font-heading text-lg font-semibold text-white">
                {section.title}
              </h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    {link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-body text-sm text-white/70 hover:text-white transition-colors flex items-center gap-1 group"
                      >
                        {link.label}
                        <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </a>
                    ) : (
                      <button
                        onClick={() => scrollToSection(link.href)}
                        className="font-body text-sm text-white/70 hover:text-white transition-colors text-left"
                      >
                        {link.label}
                      </button>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter/CTA Section */}
        <div className="mt-12 p-6 bg-white/5 rounded-xl border border-white/10">
          <div className="text-center">
            <h4 className="font-heading text-xl font-semibold mb-3">
              Ready to Build Something Amazing?
            </h4>
            <p className="font-body text-white/80 mb-6 max-w-2xl mx-auto">
              Let's connect and discuss how we can turn your ideas into innovative tech solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => scrollToSection('#contact')}
                className="bg-tech-teal hover:bg-tech-teal/80 text-white"
              >
                Start a Project
              </Button>
              <Button 
                onClick={() => window.open('mailto:contact@utshabacharya.com.np', '_blank')}
                variant="outline"
                className="border-white/30 text-white hover:bg-white hover:text-tech-navy"
              >
                Send Email
              </Button>
            </div>
          </div>
        </div>
      </div>

      <Separator className="bg-white/10" />

      {/* Bottom Footer */}
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2 text-sm text-white/70">
            <span>© {currentYear} Utshab Acharya. All rights reserved.</span>
            <Heart className="w-4 h-4 text-red-400" />
            <span>Made with passion in Nepal</span>
          </div>
          
          <div className="flex items-center gap-6 text-sm">
            <button className="text-white/70 hover:text-white transition-colors">
              Privacy Policy
            </button>
            <button className="text-white/70 hover:text-white transition-colors">
              Terms of Service
            </button>
            <button 
              onClick={() => scrollToSection('#hero')}
              className="text-white/70 hover:text-white transition-colors"
            >
              Back to Top
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;