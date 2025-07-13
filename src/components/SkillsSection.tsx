
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const skillCategories = [
  {
    title: 'Programming Languages',
    icon: '💻',
    skills: ['Python', 'SQL', 'JavaScript', 'HTML', 'CSS'],
  },
  {
    title: 'Data Science Tools',
    icon: '📊',
    skills: ['Power BI', 'Pandas', 'NumPy', 'Matplotlib', 'Scikit-Learn'],
  },
  {
    title: 'Development Tools',
    icon: '🛠️',
    skills: ['Git', 'Streamlit', 'React', 'Node.js', 'VS Code'],
  },
  {
    title: 'Soft Skills',
    icon: '🎯',
    skills: ['Time Management', 'Communication', 'Problem Solving', 'Leadership', 'Team Work'],
  },
];

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Skills & Expertise
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-primary/60 mx-auto"></div>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            A comprehensive toolkit spanning data science, web development, and essential soft skills
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <Card 
              key={category.title} 
              className="bg-background/50 backdrop-blur-sm border-border/50 hover:scale-105 transition-all duration-300 hover:shadow-lg"
              style={{
                animationDelay: `${index * 0.1}s`,
              }}
            >
              <CardContent className="p-6">
                <div className="text-center mb-4">
                  <div className="text-4xl mb-2">{category.icon}</div>
                  <h3 className="font-semibold text-lg">{category.title}</h3>
                </div>
                
                <div className="flex flex-wrap gap-2 justify-center">
                  {category.skills.map((skill) => (
                    <Badge 
                      key={skill} 
                      variant="secondary" 
                      className="hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
