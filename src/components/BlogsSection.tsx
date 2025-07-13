
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, BookOpen } from 'lucide-react';

const blogs = [
  {
    title: "🌍 Discover a New Way to Plan Trips with Journey Trip (Android App)",
    url: "https://journeytripplan.blogspot.com/",
    description: "Explore how modern technology is revolutionizing travel planning with innovative Android applications.",
    category: "Technology & Travel"
  },
  {
    title: "❌ Top 10 Cover Letter Mistakes to Avoid in 2025 (And How to Fix Them)",
    url: "https://adnaanaddu.blogspot.com/",
    description: "Essential career advice to help job seekers create compelling cover letters that stand out.",
    category: "Career Development"
  },
  {
    title: "How to Become a Data Scientist in 2025: A Complete Guide for Freshers",
    url: "https://adnaanfaiz.blogspot.com/",
    description: "A comprehensive roadmap for aspiring data scientists entering the field in 2025.",
    category: "Data Science"
  }
];

export function BlogsSection() {
  return (
    <section id="blogs" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Featured Blogs
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-primary/60 mx-auto"></div>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Sharing insights on technology, career development, and data science through thoughtful articles.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <Card key={index} className="bg-background/50 backdrop-blur-sm border-border/50 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 hover:scale-105 group">
              <CardHeader>
                <div className="flex items-center space-x-2 mb-2">
                  <BookOpen className="h-5 w-5 text-primary" />
                  <span className="text-xs text-muted-foreground font-medium">{blog.category}</span>
                </div>
                <CardTitle className="text-lg leading-tight group-hover:text-primary transition-colors">
                  {blog.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
                  {blog.description}
                </p>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full hover:scale-105 transition-transform"
                  asChild
                >
                  <a href={blog.url} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Read Article
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
