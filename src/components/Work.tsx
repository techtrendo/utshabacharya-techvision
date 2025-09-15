import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { ExternalLink, Code2, Smartphone, Globe, Database } from 'lucide-react';
import techWorkspace from '@/assets/tech-workspace.jpg';

const Work = () => {
  const projects = [
    {
      title: 'Tech Trendo Platform',
      description: 'Comprehensive multipurpose technology platform offering various business solutions including web development, digital marketing, and tech consulting services.',
      technologies: ['React', 'Node.js', 'MongoDB', 'AWS'],
      icon: <Globe className="w-6 h-6" />,
      category: 'Platform Development'
    },
    {
      title: 'Business Automation Suite',
      description: 'Custom automation solutions helping local businesses streamline their operations and improve efficiency through technology integration.',
      technologies: ['Python', 'JavaScript', 'PostgreSQL', 'Docker'],
      icon: <Code2 className="w-6 h-6" />,
      category: 'Enterprise Solutions'
    },
    {
      title: 'Mobile-First Applications',
      description: 'Responsive web applications and mobile solutions designed specifically for the Nepalese market, focusing on accessibility and performance.',
      technologies: ['React Native', 'Flutter', 'Firebase', 'TypeScript'],
      icon: <Smartphone className="w-6 h-6" />,
      category: 'Mobile Development'
    },
    {
      title: 'Data Analytics Dashboard',
      description: 'Advanced analytics platform helping businesses make data-driven decisions with real-time insights and comprehensive reporting.',
      technologies: ['Vue.js', 'D3.js', 'Python', 'Redis'],
      icon: <Database className="w-6 h-6" />,
      category: 'Data Solutions'
    }
  ];

  const services = [
    'Custom Web Development',
    'Mobile App Development', 
    'Digital Transformation',
    'Tech Consulting',
    'Business Automation',
    'Cloud Solutions',
    'Data Analytics',
    'UI/UX Design'
  ];

  return (
    <section id="work" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-tech-navy mb-6">
            Work & <span className="bg-gradient-hero bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-3xl mx-auto">
            Transforming ideas into innovative tech solutions that drive business growth and create lasting impact
          </p>
        </div>

        {/* Featured Image */}
        <div className="mb-16">
          <div className="relative rounded-2xl overflow-hidden shadow-strong">
            <img 
              src={techWorkspace}
              alt="Tech Trendo Workspace - Modern technology development environment"
              className="w-full h-64 md:h-80 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-hero/20"></div>
            <div className="absolute bottom-6 left-6 text-white">
              <h3 className="font-heading text-2xl font-bold mb-2">Tech Trendo Workspace</h3>
              <p className="font-body text-white/90">Where innovation meets execution</p>
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-medium transition-all duration-300 hover:-translate-y-1 border-l-4 border-l-primary/30 hover:border-l-primary"
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg text-primary">
                      {project.icon}
                    </div>
                    <div>
                      <CardTitle className="font-heading text-xl text-tech-navy group-hover:text-primary transition-colors">
                        {project.title}
                      </CardTitle>
                      <Badge variant="secondary" className="mt-1 text-xs">
                        {project.category}
                      </Badge>
                    </div>
                  </div>
                  <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="font-body text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </CardDescription>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge 
                      key={tech} 
                      variant="outline"
                      className="border-primary/20 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Services */}
        <div className="text-center">
          <h3 className="font-heading text-2xl md:text-3xl font-semibold text-tech-navy mb-8">
            Services We Offer
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {services.map((service) => (
              <Card key={service} className="p-4 hover:shadow-soft transition-all duration-300 hover:bg-primary/5">
                <p className="font-body font-medium text-foreground text-center">
                  {service}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;