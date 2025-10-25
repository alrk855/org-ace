import Layout from "@/components/layout/Layout";
import { useLanguage } from "@/contexts/LanguageContext";

const Partners = () => {
  const { t } = useLanguage();
  const partners = [
    { id: "sponsor-1", name: "Sponsor 1", description: "Supporting education initiatives since 2018", logo: "S1" },
    { id: "sponsor-2", name: "Sponsor 2", description: "Partner in community development programs", logo: "S2" },
    { id: "sponsor-3", name: "Sponsor 3", description: "Funding learning materials and resources", logo: "S3" },
    { id: "sponsor-4", name: "Sponsor 4", description: "Technology partner providing digital tools", logo: "S4" },
    { id: "sponsor-5", name: "Sponsor 5", description: "Supporting volunteer training programs", logo: "S5" },
    { id: "sponsor-6", name: "Sponsor 6", description: "Sponsor of annual community events", logo: "S6" },
  ];

  return (
    <Layout>
      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{t('partnersTitle')}</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t('partnersGrateful')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {partners.map((partner) => (
              <div
                key={partner.id}
                id={partner.id}
                className="bg-card rounded-[14px] p-8 shadow-soft hover:shadow-hover transition-all duration-300 scroll-mt-32"
              >
                <div className="flex items-center justify-center w-32 h-32 rounded-full bg-primary/10 text-primary font-bold text-4xl mx-auto mb-6">
                  {partner.logo}
                </div>
                <h3 className="text-2xl font-bold text-center mb-3">{partner.name}</h3>
                <p className="text-muted-foreground text-center">{partner.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-muted/30 rounded-[14px] p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">{t('becomePartner')}</h2>
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
              {t('becomePartnerDesc')}
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-3 bg-primary text-primary-foreground rounded-[14px] font-semibold hover:bg-primary-hover transition-colors"
            >
              {t('getInTouch')}
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Partners;
