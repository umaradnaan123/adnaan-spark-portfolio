
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download, ExternalLink, Eye } from 'lucide-react';

export function ResumeSection() {
  return (
    <section id="resume" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Resume & Professional Profile
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-primary/60 mx-auto"></div>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Download my resume or view my professional profiles
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Resume Preview */}
          <Card className="bg-background/50 backdrop-blur-sm border-border/50">
            <CardContent className="p-8">
              <div className="text-center mb-6">
                <div className="w-20 h-24 bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <div className="text-3xl">📄</div>
                </div>
                <h3 className="text-xl font-semibold mb-2">Professional Resume</h3>
                <p className="text-muted-foreground text-sm">
                  Comprehensive overview of my skills, experience, and achievements
                </p>
              </div>
              
              <div className="space-y-3">
                <Button className="w-full hover:scale-105 transition-transform">
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume (PDF)
                </Button>
                <Button variant="outline" className="w-full hover:scale-105 transition-transform">
                  <Eye className="mr-2 h-4 w-4" />
                  Preview Resume
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Professional Profiles */}
          <Card className="bg-background/50 backdrop-blur-sm border-border/50">
            <CardContent className="p-8">
              <div className="text-center mb-6">
                <div className="w-20 h-24 bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <div className="text-3xl">🔗</div>
                </div>
                <h3 className="text-xl font-semibold mb-2">Professional Profiles</h3>
                <p className="text-muted-foreground text-sm">
                  Connect with me on professional platforms
                </p>
              </div>
              
              <div className="space-y-3">
                <Button variant="outline" className="w-full hover:scale-105 transition-transform">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  View LinkedIn Profile
                </Button>
                <Button variant="outline" className="w-full hover:scale-105 transition-transform">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  GitHub Portfolio
                </Button>
                <Button variant="outline" className="w-full hover:scale-105 transition-transform">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Kaggle Profile
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Resume Embedded Preview */}
        <Card className="mt-8 bg-background/50 backdrop-blur-sm border-border/50">
          <CardContent className="p-8">
            <h3 className="text-xl font-semibold text-center mb-6">Resume Preview</h3>
            <div className="bg-muted/50 rounded-lg p-8 min-h-[400px] flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">📄</div>
                <p className="text-muted-foreground">
                  Resume preview will be displayed here
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  Click "Preview Resume" or "Download Resume" to view the full document
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
