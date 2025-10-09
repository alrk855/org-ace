import { useLanguage } from "@/contexts/LanguageContext";

const SponsorsMarquee = () => {
  const { t } = useLanguage();
  
  const sponsors = [
    { name: "Sponsor 1", logo: "S1" },
    { name: "Sponsor 2", logo: "S2" },
    { name: "Sponsor 3", logo: "S3" },
    { name: "Sponsor 4", logo: "S4" },
    { name: "Sponsor 5", logo: "S5" },
    { name: "Sponsor 6", logo: "S6" },
  ];

  const allSponsors = [...sponsors, ...sponsors];

  return (
    <section id="sponsors" className="py-16 px-4 bg-background overflow-hidden">
      <div className="container mx-auto max-w-7xl mb-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('sponsorsTitle')}</h2>
          <p className="text-lg text-muted-foreground">
            Thank you to our valued partners who make our mission possible
          </p>
        </div>
      </div>

      <div className="relative">
        <div className="flex gap-8 animate-marquee hover:[animation-play-state:paused]">
          {allSponsors.map((sponsor, index) => (
            <a
              key={`${sponsor.name}-${index}`}
              href={`/partners#${sponsor.name.toLowerCase().replace(/\s+/g, '-')}`}
              className="flex-shrink-0 w-48 h-32 bg-card rounded-[14px] shadow-soft hover:shadow-hover transition-all duration-300 flex items-center justify-center group"
            >
              <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-2xl group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                {sponsor.logo}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SponsorsMarquee;
