import Layout from "@/components/layout/Layout";
import { useLanguage } from "@/contexts/LanguageContext";

const ProjectsCurrent = () => {
  const { t } = useLanguage();
  const projects = [
    {
      title: "Creative Learning Lab",
      description: "An innovative space where children explore science, art, and technology through hands-on activities and experiments.",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80",
      status: "Active",
      participants: 45,
    },
    {
      title: "Outdoor Adventure Program",
      description: "Nature-based learning experiences that promote environmental awareness and physical development through outdoor play.",
      image: "https://images.unsplash.com/photo-1560785477-d43d2b34e0df?w=800&q=80",
      status: "Active",
      participants: 32,
    },
    {
      title: "Digital Literacy Initiative",
      description: "Teaching children essential digital skills and online safety through engaging, age-appropriate activities.",
      image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&q=80",
      status: "Active",
      participants: 28,
    },
    {
      title: "Community Library Project",
      description: "Building reading skills and fostering a love for literature through our mobile library and reading clubs.",
      image: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=800&q=80",
      status: "Active",
      participants: 56,
    },
  ];

  return (
    <Layout>
      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{t('currentProjectsTitle')}</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t('exploreInitiatives')}
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
                  <div className="flex items-center gap-3 mb-3">
                    <span className="inline-block px-3 py-1 bg-trust-green/10 text-trust-green rounded-full text-sm font-medium">
                      {t('active')}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      {project.participants} {t('participants')}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ProjectsCurrent;
