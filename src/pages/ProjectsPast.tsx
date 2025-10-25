import Layout from "@/components/layout/Layout";
import { CheckCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const ProjectsPast = () => {
  const { t } = useLanguage();
  const projects = [
    {
      title: "Summer Arts Festival 2024",
      description: "A month-long program celebrating creativity through visual arts, music, and performance, reaching over 200 children.",
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&q=80",
      duration: "June - July 2024",
      impact: "200+ children participated",
    },
    {
      title: "Winter Reading Challenge 2023",
      description: "Encouraging reading habits during winter break with rewards and recognition for young readers.",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80",
      duration: "December 2023 - January 2024",
      impact: "150 books read collectively",
    },
    {
      title: "STEM Discovery Week 2023",
      description: "Five days of hands-on science, technology, engineering, and math activities for elementary school children.",
      image: "https://images.unsplash.com/photo-1560785477-d43d2b34e0df?w=800&q=80",
      duration: "October 2023",
      impact: "8 schools participated",
    },
    {
      title: "Community Garden Project",
      description: "Teaching children about sustainability and healthy eating through a shared community garden space.",
      image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&q=80",
      duration: "April - September 2023",
      impact: "500kg of vegetables grown",
    },
  ];

  return (
    <Layout>
      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{t('pastProjectsTitle')}</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t('lookBackProjects')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-card rounded-[14px] overflow-hidden shadow-soft hover:shadow-hover transition-all duration-300 group"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span className="text-sm text-muted-foreground">{project.duration}</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                    {project.impact}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ProjectsPast;
