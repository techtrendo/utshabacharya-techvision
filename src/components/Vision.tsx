import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Target, Lightbulb, Users, Globe, TrendingUp, Heart } from 'lucide-react';

const Vision = () => {
  const visionItems = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Digital Nepal Initiative',
      description: 'Transforming Nepal into a digitally empowered nation where technology bridges gaps and creates opportunities for all citizens.',
      timeline: '5-10 years'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Tech Ecosystem Building',
      description: 'Creating a thriving technology ecosystem that nurtures startups, supports innovation, and attracts global investment to Nepal.',
      timeline: '3-7 years'
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Business Innovation Hub',
      description: 'Establishing Tech Trendo as the leading technology partner for businesses seeking digital transformation and growth.',
      timeline: '2-5 years'
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: 'AI & Emerging Tech',
      description: 'Pioneering the adoption of artificial intelligence and emerging technologies to solve local challenges and create global opportunities.',
      timeline: '1-3 years'
    }
  ];

  const goals = [
    {
      category: 'Short-term (1-2 years)',
      items: [
        'Expand Tech Trendo team to 25+ professionals',
        'Launch AI-powered business solutions platform',
        'Establish partnerships with 100+ local businesses',
        'Open satellite offices in major Nepalese cities'
      ]
    },
    {
      category: 'Medium-term (3-5 years)',
      items: [
        'Create Nepal Tech Innovation Center',
        'Launch startup incubation program',
        'Develop proprietary SaaS products for regional markets',
        'Establish international partnerships and collaborations'
      ]
    },
    {
      category: 'Long-term (5+ years)',
      items: [
        'Position Nepal as a regional tech hub',
        'Create 1000+ direct and indirect tech jobs',
        'Launch Tech Trendo Foundation for digital literacy',
        'Expand operations to South Asian markets'
      ]
    }
  ];

  const socialImpact = [
    {
      icon: <Heart className="w-6 h-6" />,
      title: 'Digital Literacy Programs',
      description: 'Free training programs for underserved communities to bridge the digital divide.'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Youth Mentorship',
      description: 'Mentoring young entrepreneurs and developers to build the next generation of tech leaders.'
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: 'Sustainable Technology',
      description: 'Promoting environmentally conscious technology practices and solutions.'
    }
  ];

  return (
    <section id="vision" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-tech-navy mb-6">
            Vision & <span className="bg-gradient-hero bg-clip-text text-transparent">Goals</span>
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-3xl mx-auto">
            Building a technology-driven future for Nepal and beyond, creating opportunities and driving innovation
          </p>
        </div>

        {/* Vision Statement */}
        <div className="mb-16">
          <Card className="p-8 bg-gradient-accent text-white shadow-strong">
            <div className="text-center">
              <Target className="w-12 h-12 mx-auto mb-4 text-white" />
              <h3 className="font-heading text-2xl md:text-3xl font-bold mb-4">
                Our Vision for the Future
              </h3>
              <p className="font-body text-lg leading-relaxed max-w-4xl mx-auto">
                To create a technology ecosystem where innovation thrives, businesses prosper, and 
                every individual has access to digital opportunities. We envision Nepal as a regional 
                technology hub that showcases how emerging markets can leverage technology for 
                sustainable development and global competitiveness.
              </p>
            </div>
          </Card>
        </div>

        {/* Strategic Vision Areas */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {visionItems.map((item, index) => (
            <Card key={index} className="group hover:shadow-medium transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-xl text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                    {item.icon}
                  </div>
                  <div>
                    <CardTitle className="font-heading text-xl text-tech-navy group-hover:text-primary transition-colors">
                      {item.title}
                    </CardTitle>
                    <Badge variant="outline" className="mt-2 text-xs">
                      {item.timeline}
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="font-body text-muted-foreground leading-relaxed">
                  {item.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Goals Timeline */}
        <div className="mb-16">
          <h3 className="font-heading text-3xl font-semibold text-tech-navy text-center mb-12">
            Strategic Roadmap
          </h3>
          <div className="grid lg:grid-cols-3 gap-8">
            {goals.map((goalSet, index) => (
              <Card key={index} className="p-6 hover:shadow-medium transition-all duration-300">
                <h4 className="font-heading text-lg font-semibold text-primary mb-4">
                  {goalSet.category}
                </h4>
                <ul className="space-y-3">
                  {goalSet.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-2 font-body text-sm text-muted-foreground">
                      <span className="text-primary mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>

        {/* Social Impact */}
        <div>
          <h3 className="font-heading text-3xl font-semibold text-tech-navy text-center mb-12">
            Social Impact & Community
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {socialImpact.map((impact, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-soft transition-all duration-300 border-l-4 border-l-warm-orange/30 hover:border-l-warm-orange">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-warm-orange/10 rounded-full text-warm-orange">
                    {impact.icon}
                  </div>
                </div>
                <h4 className="font-heading text-lg font-semibold text-tech-navy mb-3">
                  {impact.title}
                </h4>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  {impact.description}
                </p>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Card className="p-8 bg-gradient-warm shadow-strong">
            <h3 className="font-heading text-2xl font-bold text-white mb-4">
              Join the Journey
            </h3>
            <p className="font-body text-white/90 mb-6 max-w-2xl mx-auto">
              Together, we can build a technology-driven future that creates opportunities, 
              solves problems, and makes a lasting positive impact on our communities.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Vision;