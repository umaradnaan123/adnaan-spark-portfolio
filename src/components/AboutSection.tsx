
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Github, Linkedin, ExternalLink } from 'lucide-react';

export function AboutSection() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-primary/60 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <Card className="bg-background/50 backdrop-blur-sm border-border/50">
              <CardContent className="p-8">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Aspiring Data Scientist passionate about Python, Machine Learning, and Data Analytics. 
                  I blend technical expertise with creative design to build impactful solutions. 
                  Currently pursuing B.Tech in CSE (AI & DS) from Vel Tech, Chennai.
                </p>
                
                <p className="text-lg text-muted-foreground leading-relaxed mt-4">
                  My journey in technology is driven by curiosity and the desire to solve real-world 
                  problems through data-driven insights and innovative web solutions.
                </p>
              </CardContent>
            </Card>
            
            <div className="flex flex-wrap gap-4">
              <Button variant="outline" className="hover:scale-105 transition-transform">
                <Linkedin className="mr-2 h-4 w-4" />
                LinkedIn
              </Button>
              <Button variant="outline" className="hover:scale-105 transition-transform">
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </Button>
              <Button variant="outline" className="hover:scale-105 transition-transform">
                <ExternalLink className="mr-2 h-4 w-4" />
                Portfolio GitHub
              </Button>
            </div>
          </div>
          
          <div className="flex justify-center">
            <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20 p-8">
              <CardContent className="p-0">
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                      🎓
                    </div>
                    <div>
                      <h3 className="font-semibold">Education</h3>
                      <p className="text-sm text-muted-foreground">B.Tech CSE (AI & DS)</p>
                      <p className="text-sm text-muted-foreground">Vel Tech, Chennai</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                      📍
                    </div>
                    <div>
                      <h3 className="font-semibold">Location</h3>
                      <p className="text-sm text-muted-foreground">Chennai, India</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                      💼
                    </div>
                    <div>
                      <h3 className="font-semibold">Focus</h3>
                      <p className="text-sm text-muted-foreground">Data Science & Web Dev</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
