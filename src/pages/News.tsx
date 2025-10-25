import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const News = () => {
  const { t } = useLanguage();
  const newsArticles = [
    {
      id: 1,
      title: "New Learning Center Opens in Downtown Skopje",
      excerpt: "We're thrilled to announce the opening of our newest learning center, equipped with state-of-the-art facilities for play-based education.",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80",
      date: "March 15, 2025",
      category: "Announcements",
    },
    {
      id: 2,
      title: "Summer Camp Registration Now Open",
      excerpt: "Registration is now open for our 2025 summer camp program. Limited spots available!",
      image: "https://images.unsplash.com/photo-1560785477-d43d2b34e0df?w=800&q=80",
      date: "March 10, 2025",
      category: "Programs",
    },
    {
      id: 3,
      title: "Volunteer Training Workshop Success",
      excerpt: "Over 30 new volunteers completed our comprehensive training program and are ready to make a difference.",
      image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&q=80",
      date: "March 5, 2025",
      category: "Events",
    },
    {
      id: 4,
      title: "Partnership with Local Schools Announced",
      excerpt: "We've established partnerships with five local schools to bring our programs to even more children.",
      image: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=800&q=80",
      date: "February 28, 2025",
      category: "Partnerships",
    },
    {
      id: 5,
      title: "Annual Fundraising Gala Announced",
      excerpt: "Save the date for our annual gala event celebrating a year of impact and growth.",
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&q=80",
      date: "February 20, 2025",
      category: "Events",
    },
    {
      id: 6,
      title: "New Educational Materials Donated",
      excerpt: "Thanks to generous donors, we've received a shipment of new books and learning materials.",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80",
      date: "February 15, 2025",
      category: "News",
    },
  ];

  return (
    <Layout>
      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{t('newsPageTitle')}</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t('stayUpdated')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsArticles.map((article) => (
              <Link
                key={article.id}
                to={`/news/${article.id}`}
                className="group"
              >
                <article className="bg-card rounded-[14px] overflow-hidden shadow-soft hover:shadow-hover transition-all duration-300 h-full flex flex-col">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">
                        {article.category}
                      </span>
                      <span className="text-sm text-muted-foreground">{article.date}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-muted-foreground flex-1">{article.excerpt}</p>
                    <div className="mt-4 text-primary font-medium group-hover:underline">
                      {t('readMore')} →
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default News;
