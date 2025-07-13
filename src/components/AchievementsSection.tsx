
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Trophy, Award, Star, ExternalLink } from 'lucide-react';

export function AchievementsSection() {
  const achievements = [
    {
      icon: <Award className="h-8 w-8" />,
      title: "Patent Filed",
      description: "Gearbox Machine Shop Optimization",
      color: "from-yellow-500/20 to-orange-500/20",
      iconColor: "text-yellow-500"
    },
    {
      icon: <Trophy className="h-8 w-8" />,
      title: "IEEE Paper Presentation",
      description: "Presented at ICLTECAT 2025",
      color: "from-blue-500/20 to-purple-500/20",
      iconColor: "text-blue-500"
    },
    {
      icon: <Star className="h-8 w-8" />,
      title: "Kaggle Global Rank",
      description: "Top Datasets Contributor",
      color: "from-green-500/20 to-teal-500/20",
      iconColor: "text-green-500",
      link: "https://www.kaggle.com/umeradnaan"
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "IBM Certified",
      description: "Data Science Tools Certification",
      color: "from-purple-500/20 to-pink-500/20",
      iconColor: "text-purple-500"
    }
  ];

  return (
    <section id="achievements" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Achievements & Recognition
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-primary/60 mx-auto"></div>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Milestones and recognitions that showcase my dedication to excellence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {achievements.map((achievement, index) => (
            <Card key={index} className="group bg-background/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 hover:scale-105">
              <CardContent className="p-6 text-center">
                <div className={`w-20 h-20 bg-gradient-to-br ${achievement.color} rounded-full mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <div className={achievement.iconColor}>
                    {achievement.icon}
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-2">{achievement.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{achievement.description}</p>
                {achievement.link && (
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full"
                    onClick={() => window.open(achievement.link, '_blank')}
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View Profile
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Timeline Alternative View */}
        <div className="mt-16">
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary/50 to-transparent"></div>
            <div className="space-y-12">
              {achievements.map((achievement, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} gap-8`}>
                  <div className="flex-1">
                    <Card className="bg-background/50 backdrop-blur-sm border-border/50">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-4">
                          <div className={`w-12 h-12 bg-gradient-to-br ${achievement.color} rounded-full flex items-center justify-center`}>
                            <div className={`${achievement.iconColor} scale-75`}>
                              {achievement.icon}
                            </div>
                          </div>
                          <div className="flex-1">
                            <h3 className="font-semibold mb-1">{achievement.title}</h3>
                            <p className="text-muted-foreground text-sm">{achievement.description}</p>
                          </div>
                          {achievement.link && (
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => window.open(achievement.link, '_blank')}
                            >
                              <ExternalLink className="h-4 w-4" />
                            </Button>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg"></div>
                  <div className="flex-1"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
