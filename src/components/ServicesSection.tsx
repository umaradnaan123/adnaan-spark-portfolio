
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const services = [
  {
    icon: '💻',
    title: 'Web Development',
    description: 'Modern, responsive websites and web applications using React, Node.js, and latest technologies.',
    features: ['Responsive Design', 'Full-Stack Development', 'API Integration', 'Performance Optimization'],
  },
  {
    icon: '🎨',
    title: 'Graphic/Illustrator Design',
    description: 'Creative visual designs for digital and print media, from logos to complete brand identities.',
    features: ['Logo Design', 'Brand Identity', 'Digital Illustrations', 'Print Materials'],
  },
  {
    icon: '📄',
    title: 'Resume & LinkedIn Services',
    description: 'Professional resume writing and LinkedIn profile optimization to boost your career prospects.',
    features: ['ATS-Optimized Resumes', 'LinkedIn Optimization', 'Cover Letters', 'Career Consultation'],
  },
  {
    icon: '🧠',
    title: 'Data Science & ML Projects',
    description: 'End-to-end data science solutions from data collection to model deployment and insights.',
    features: ['Predictive Modeling', 'Data Visualization', 'Statistical Analysis', 'ML Model Deployment'],
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Services I Offer
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-primary/60 mx-auto"></div>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Comprehensive solutions tailored to your needs in technology and design
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card 
              key={service.title}
              className="group bg-background/50 backdrop-blur-sm border-border/50 hover:scale-105 transition-all duration-300 hover:shadow-xl"
              style={{
                animationDelay: `${index * 0.1}s`,
              }}
            >
              <CardHeader className="text-center">
                <div className="text-5xl mb-4">{service.icon}</div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {service.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent>
                <p className="text-muted-foreground mb-6 text-center leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm">
                      <span className="text-primary mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Button className="w-full hover:scale-105 transition-transform">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
