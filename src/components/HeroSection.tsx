
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Download, Mail } from 'lucide-react';

export function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left animate-fade-in">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              👋 Hello, I'm Adnaan
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Aspiring{' '}
              <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
                Data Scientist
              </span>
              <br />
              <span className="text-muted-foreground text-3xl sm:text-4xl lg:text-5xl">
                Web Developer
              </span>
            </h1>
            
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
              Passionate about Python, Machine Learning, and Data Analytics. 
              I blend technical expertise with creative design to build impactful solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="hover:scale-105 transition-transform">
                <Download className="mr-2 h-4 w-4" />
                Resume
              </Button>
              <Button variant="outline" size="lg" className="hover:scale-105 transition-transform" asChild>
                <a href="https://github.com/umaradnaan123" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </a>
              </Button>
              <Button variant="outline" size="lg" className="hover:scale-105 transition-transform" asChild>
                <a href="mailto:adnaanaddu1929@gmail.com">
                  <Mail className="mr-2 h-4 w-4" />
                  Contact
                </a>
              </Button>
            </div>
            
            <div className="flex justify-center lg:justify-start space-x-6 mt-8">
              <a href="https://linkedin.com/in/mohammed-umar-adnaan-faiz/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="https://github.com/umaradnaan123" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Github className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          {/* Right Content - Avatar/Animation */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 rounded-full bg-gradient-to-br from-primary/20 via-primary/10 to-transparent animate-pulse"></div>
              <div className="absolute inset-4 rounded-full bg-gradient-to-br from-primary/30 to-primary/10 backdrop-blur-sm border border-primary/20 flex items-center justify-center">
                <div className="text-6xl">👨‍💻</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
