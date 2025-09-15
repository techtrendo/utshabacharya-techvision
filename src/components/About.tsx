import { Badge } from './ui/badge';
import { Card } from './ui/card';

const About = () => {
  const skills = [
    'Frontend Development',
    'WordPress Development', 
    'Leadership',
    'Entrepreneurship',
    'Project Management',
    'Tech Innovation',
    'Business Strategy',
    'Team Building'
  ];

  const values = [
    {
      title: 'Innovation',
      description: 'Constantly pushing boundaries to create cutting-edge solutions that solve real-world problems.'
    },
    {
      title: 'Excellence',
      description: 'Committed to delivering the highest quality in every project and interaction.'
    },
    {
      title: 'Impact',
      description: 'Focused on creating meaningful change in Nepal\'s technology landscape and beyond.'
    },
    {
      title: 'Collaboration',
      description: 'Believing that the best solutions come from diverse teams working together towards common goals.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-tech-navy mb-6">
            About <span className="bg-gradient-hero bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-3xl mx-auto">
            A passionate tech entrepreneur with a vision to transform Nepal's digital landscape
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Biography */}
          <div className="space-y-6">
            <div className="prose prose-lg max-w-none">
              <p className="font-body text-foreground leading-relaxed">
                I am Utshab Acharya, a dedicated tech entrepreneur and the Founder & CEO of 
                Tech Trendo Multipurpose Company. My journey in the technology sector has been 
                driven by a passion for innovation and a commitment to creating solutions that 
                make a meaningful impact.
              </p>
              
              <p className="font-body text-foreground leading-relaxed">
                My professional journey began as a WordPress Developer at Spell Innovation, where I 
                honed my technical skills and learned the fundamentals of web development. I then 
                advanced to a Frontend Developer role at Web Bank Nepal, where I gained valuable 
                experience in creating user-centric digital experiences.
              </p>
              
              <p className="font-body text-foreground leading-relaxed">
                Today, as the leader of Tech Trendo Multipurpose Company, I'm focused on building 
                innovative tech solutions that address the unique challenges faced by businesses 
                in Nepal and the broader region. My mission is to bridge the gap between cutting-edge 
                technology and practical business needs.
              </p>

              <p className="font-body text-foreground leading-relaxed">
                I believe that technology has the power to transform lives and create opportunities. 
                My goal is to leverage this power to drive economic growth, foster innovation, and 
                build a thriving tech ecosystem in Nepal.
              </p>
            </div>

            {/* Skills */}
            <div className="mt-8">
              <h3 className="font-heading text-2xl font-semibold text-tech-navy mb-4">
                Core Expertise
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <Badge 
                    key={skill} 
                    variant="secondary"
                    className="bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Values & Mission */}
          <div className="space-y-6">
            <h3 className="font-heading text-2xl font-semibold text-tech-navy mb-6">
              Values & Mission
            </h3>
            
            <div className="grid gap-4">
              {values.map((value, index) => (
                <Card key={index} className="p-6 hover:shadow-medium transition-all duration-300 border-l-4 border-l-primary">
                  <h4 className="font-heading text-lg font-semibold text-tech-navy mb-2">
                    {value.title}
                  </h4>
                  <p className="font-body text-muted-foreground text-sm leading-relaxed">
                    {value.description}
                  </p>
                </Card>
              ))}
            </div>

            <div className="mt-8 p-6 bg-gradient-accent rounded-xl shadow-soft">
              <h4 className="font-heading text-xl font-semibold text-white mb-3">
                My Mission
              </h4>
              <p className="font-body text-white/90 leading-relaxed">
                To create a thriving technology ecosystem in Nepal by developing innovative solutions, 
                fostering entrepreneurship, and empowering businesses to leverage cutting-edge technology 
                for sustainable growth and success.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;