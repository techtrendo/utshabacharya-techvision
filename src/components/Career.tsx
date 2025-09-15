import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Calendar, Award, Briefcase, GraduationCap } from 'lucide-react';

const Career = () => {
  const milestones = [
    {
      year: '2024',
      title: 'Founder & CEO',
      company: 'Tech Trendo Multipurpose Company',
      description: 'Founded Tech Trendo to provide comprehensive technology solutions for businesses across Nepal. Leading a team focused on innovation and digital transformation.',
      type: 'leadership',
      achievements: ['Founded startup', 'Team building', 'Strategic planning']
    },
    {
      year: '2022-2023',
      title: 'Frontend Developer',
      company: 'Web Bank Nepal',
      description: 'Developed user-centric web applications and improved user experience for banking and financial services. Specialized in responsive design and modern frontend frameworks.',
      type: 'development',
      achievements: ['Frontend expertise', 'UX/UI improvement', 'Banking solutions']
    },
    {
      year: '2020-2022',
      title: 'WordPress Developer',
      company: 'Spell Innovation',
      description: 'Started professional journey in web development, creating custom WordPress solutions and learning the foundations of modern web development practices.',
      type: 'development',
      achievements: ['WordPress mastery', 'Web development', 'Client solutions']
    },
    {
      year: '2019-2020',
      title: 'Tech Education & Learning',
      company: 'Self-Directed Learning',
      description: 'Intensive self-study period focusing on modern web technologies, programming languages, and business fundamentals to prepare for a career in tech.',
      type: 'education',
      achievements: ['Self-learning', 'Skill development', 'Tech foundation']
    }
  ];

  const certifications = [
    'Frontend Web Development Certification',
    'WordPress Professional Certification',
    'Business Leadership Training',
    'Digital Marketing Fundamentals',
    'Project Management Essentials',
    'Entrepreneurship Development Program'
  ];

  const getIcon = (type: string) => {
    switch (type) {
      case 'leadership':
        return <Award className="w-6 h-6" />;
      case 'development':
        return <Briefcase className="w-6 h-6" />;
      case 'education':
        return <GraduationCap className="w-6 h-6" />;
      default:
        return <Calendar className="w-6 h-6" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'leadership':
        return 'bg-warm-orange/10 text-warm-orange border-warm-orange/20';
      case 'development':
        return 'bg-primary/10 text-primary border-primary/20';
      case 'education':
        return 'bg-tech-teal/10 text-tech-teal border-tech-teal/20';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <section id="career" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-tech-navy mb-6">
            Career <span className="bg-gradient-hero bg-clip-text text-transparent">Journey</span>
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-3xl mx-auto">
            A progressive path from developer to entrepreneur, driven by passion for technology and innovation
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Timeline */}
          <div className="lg:col-span-2">
            <h3 className="font-heading text-2xl font-semibold text-tech-navy mb-8">
              Professional Timeline
            </h3>
            
            <div className="space-y-6">
              {milestones.map((milestone, index) => (
                <Card key={index} className="hover:shadow-medium transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className={`p-3 rounded-lg ${getTypeColor(milestone.type)}`}>
                        {getIcon(milestone.type)}
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                          <CardTitle className="font-heading text-xl text-tech-navy">
                            {milestone.title}
                          </CardTitle>
                          <Badge variant="outline" className="text-xs w-fit">
                            {milestone.year}
                          </Badge>
                        </div>
                        <p className="font-body font-semibold text-primary mb-2">
                          {milestone.company}
                        </p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="font-body text-muted-foreground mb-4 leading-relaxed">
                      {milestone.description}
                    </CardDescription>
                    <div className="flex flex-wrap gap-2">
                      {milestone.achievements.map((achievement) => (
                        <Badge 
                          key={achievement} 
                          variant="secondary"
                          className="text-xs bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                        >
                          {achievement}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Achievements & Certifications */}
          <div className="space-y-8">
            <Card className="p-6 bg-gradient-accent text-white">
              <h3 className="font-heading text-xl font-semibold mb-4 flex items-center gap-2">
                <Award className="w-6 h-6" />
                Key Achievements
              </h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-white/60">•</span>
                  <span>Founded and scaled Tech Trendo from concept to operational startup</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-white/60">•</span>
                  <span>Developed 50+ websites and web applications across various industries</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-white/60">•</span>
                  <span>Led digital transformation projects for local businesses</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-white/60">•</span>
                  <span>Built and mentored development teams</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-white/60">•</span>
                  <span>Contributed to Nepal's growing tech ecosystem</span>
                </li>
              </ul>
            </Card>

            <Card className="p-6">
              <h3 className="font-heading text-xl font-semibold text-tech-navy mb-4 flex items-center gap-2">
                <GraduationCap className="w-6 h-6 text-primary" />
                Certifications & Learning
              </h3>
              <div className="space-y-2">
                {certifications.map((cert, index) => (
                  <div key={index} className="text-sm font-body text-muted-foreground p-2 rounded border-l-2 border-l-primary/20 bg-primary/5 hover:bg-primary/10 transition-colors">
                    {cert}
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-6 border-2 border-primary/20">
              <h3 className="font-heading text-lg font-semibold text-tech-navy mb-3">
                Current Focus
              </h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                Leading Tech Trendo's growth while staying hands-on with emerging technologies. 
                Focus areas include AI integration, cloud solutions, and sustainable tech practices 
                for Nepalese businesses.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Career;