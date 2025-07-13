
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const achievements = [
  {
    icon: '🏆',
    title: 'Patent Filed',
    description: 'Gearbox Machine Shop Optimization',
    details: 'Innovative approach to industrial efficiency using predictive analytics',
    date: '2024',
    category: 'Innovation',
  },
  {
    icon: '📊',
    title: 'IEEE Paper Presentation',
    description: 'ICLTECAT 2025',
    details: 'Presented research on machine learning applications in industrial optimization',
    date: '2025',
    category: 'Research',
  },
  {
    icon: '📈',
    title: 'Kaggle Global Rank',
    description: 'Top 607 in Datasets',
    details: 'Recognized for quality data contributions to the global data science community',
    date: '2024',
    category: 'Data Science',
  },
  {
    icon: '🎓',
    title: 'IBM Certification',
    description: 'Data Science Tools',
    details: 'Certified in professional data science tools and methodologies',
    date: '2024',
    category: 'Certification',
  },
];

export function AchievementsSection() {
  return (
    <section id="achievements" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Achievements & Recognition
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-primary/60 mx-auto"></div>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Milestones that showcase my commitment to excellence and innovation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => (
            <Card 
              key={achievement.title}
              className="group bg-background/50 backdrop-blur-sm border-border/50 hover:scale-105 transition-all duration-300 hover:shadow-xl"
              style={{
                animationDelay: `${index * 0.1}s`,
              }}
            >
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="text-4xl">{achievement.icon}</div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
                        {achievement.title}
                      </h3>
                      <Badge variant="outline" className="text-xs">
                        {achievement.date}
                      </Badge>
                    </div>
                    
                    <h4 className="font-medium text-primary mb-2">
                      {achievement.description}
                    </h4>
                    
                    <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                      {achievement.details}
                    </p>
                    
                    <Badge className="bg-primary/10 text-primary">
                      {achievement.category}
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
