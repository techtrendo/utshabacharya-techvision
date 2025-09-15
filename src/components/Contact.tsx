import { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { Mail, Phone, MapPin, Send, MessageCircle, Calendar } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    // Simulate form submission
    toast({
      title: "Message Sent Successfully!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email',
      value: 'contact@utshabacharya.com.np',
      link: 'mailto:contact@utshabacharya.com.np',
      description: 'Send me an email anytime'
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Phone',
      value: '+977 9815602535',
      link: 'tel:+9779815602535',
      description: 'Call or message on WhatsApp'
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Location',
      value: 'Koshi Province, Nepal',
      link: '#',
      description: 'Based in Nepal, serving globally'
    }
  ];

  const quickActions = [
    {
      icon: <MessageCircle className="w-5 h-5" />,
      title: 'Quick Chat',
      description: 'Let\'s discuss your project',
      action: () => window.open('mailto:contact@utshabacharya.com.np?subject=Quick Chat Request', '_blank')
    },
    {
      icon: <Calendar className="w-5 h-5" />,
      title: 'Schedule Meeting',
      description: 'Book a consultation call',
      action: () => window.open('mailto:contact@utshabacharya.com.np?subject=Meeting Request', '_blank')
    }
  ];

  return (
    <section id="contact" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-tech-navy mb-6">
            Get In <span className="bg-gradient-hero bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-3xl mx-auto">
            Ready to discuss your next project or explore collaboration opportunities? 
            I'd love to hear from you and learn about your vision.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h3 className="font-heading text-2xl font-semibold text-tech-navy mb-6">
                Let's Connect
              </h3>
              <p className="font-body text-muted-foreground mb-8 leading-relaxed">
                Whether you're looking to transform your business with technology, 
                need a development partner, or want to discuss innovative ideas, 
                I'm here to help turn your vision into reality.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <Card key={index} className="p-4 hover:shadow-medium transition-all duration-300 hover:border-l-4 hover:border-l-primary">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg text-primary">
                      {info.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-heading font-semibold text-tech-navy mb-1">
                        {info.title}
                      </h4>
                      <a 
                        href={info.link}
                        className="font-body text-primary hover:text-primary/80 font-medium transition-colors"
                      >
                        {info.value}
                      </a>
                      <p className="font-body text-xs text-muted-foreground mt-1">
                        {info.description}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Quick Actions */}
            <div className="space-y-3 mt-8">
              <h4 className="font-heading text-lg font-semibold text-tech-navy mb-4">
                Quick Actions
              </h4>
              {quickActions.map((action, index) => (
                <Button
                  key={index}
                  onClick={action.action}
                  variant="outline"
                  className="w-full justify-start gap-3 p-4 h-auto border-primary/20 hover:bg-primary hover:text-primary-foreground"
                >
                  <div className="p-2 bg-primary/10 rounded text-primary">
                    {action.icon}
                  </div>
                  <div className="text-left">
                    <div className="font-medium">{action.title}</div>
                    <div className="text-xs text-muted-foreground">{action.description}</div>
                  </div>
                </Button>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <Card className="p-8 shadow-medium">
              <CardHeader className="px-0 pt-0">
                <CardTitle className="font-heading text-2xl text-tech-navy">
                  Send a Message
                </CardTitle>
                <CardDescription className="font-body text-muted-foreground">
                  Fill out the form below and I'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent className="px-0 pb-0">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="font-body font-medium">
                        Name *
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        className="font-body"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="font-body font-medium">
                        Email *
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your.email@example.com"
                        className="font-body"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject" className="font-body font-medium">
                      Subject
                    </Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="What's this about?"
                      className="font-body"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="font-body font-medium">
                      Message *
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project or how I can help you..."
                      className="font-body min-h-32"
                      required
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-hero hover:shadow-medium transition-all duration-300"
                    size="lg"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <Card className="p-6 bg-gradient-accent text-white">
            <h3 className="font-heading text-xl font-semibold mb-3">
              Ready to Start Your Project?
            </h3>
            <p className="font-body text-white/90 mb-4">
              Let's discuss how we can bring your ideas to life with innovative technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => window.open('mailto:contact@utshabacharya.com.np?subject=Project Discussion', '_blank')}
                variant="secondary"
                className="bg-white/20 text-white hover:bg-white hover:text-primary border-white/30"
              >
                Start a Project
              </Button>
              <Button 
                onClick={() => window.open('tel:+9779815602535', '_blank')}
                variant="outline"
                className="border-white/30 text-white hover:bg-white hover:text-primary"
              >
                Call Now
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;