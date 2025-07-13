
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: '🛳️ Titanic Survival Prediction',
    description: 'Machine learning model to predict passenger survival using Python, Pandas, and Scikit-Learn with 82% accuracy.',
    tech: ['Python', 'Pandas', 'Scikit-Learn', 'Matplotlib'],
    github: '#',
    demo: '#',
  },
  {
    title: '📦 Farmers App (No Middleman E-Com)',
    description: 'Direct farmer-to-consumer e-commerce platform eliminating middlemen, built with modern web technologies.',
    tech: ['React', 'Node.js', 'MongoDB', 'Stripe API'],
    github: '#',
    demo: '#',
  },
  {
    title: '🛰️ Remote Sensing Satellite Image Analysis',
    description: 'Advanced image processing and analysis system for satellite imagery using computer vision techniques.',
    tech: ['Python', 'OpenCV', 'TensorFlow', 'GDAL'],
    github: '#',
    demo: '#',
  },
  {
    title: '🛠️ Gearbox Efficiency using Data Analytics',
    description: 'Patent-pending machine shop optimization system using predictive analytics for improved efficiency.',
    tech: ['Python', 'Power BI', 'Statistical Analysis', 'IoT'],
    github: '#',
    demo: '#',
    featured: true,
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-primary/60 mx-auto"></div>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            A showcase of my latest work in data science, machine learning, and web development
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.title}
              className={`group bg-background/50 backdrop-blur-sm border-border/50 hover:scale-105 transition-all duration-300 hover:shadow-xl ${
                project.featured ? 'ring-2 ring-primary/20' : ''
              }`}
              style={{
                animationDelay: `${index * 0.1}s`,
              }}
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                  {project.featured && (
                    <Badge className="bg-primary/10 text-primary">
                      ⭐ Featured
                    </Badge>
                  )}
                </div>
              </CardHeader>
              
              <CardContent>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <Button variant="outline" size="sm" className="hover:scale-105 transition-transform">
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </Button>
                  <Button size="sm" className="hover:scale-105 transition-transform">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
