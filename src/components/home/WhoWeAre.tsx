import { Users, Heart, Target } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useEffect, useState } from "react";

const WhoWeAre = () => {
  const { t } = useLanguage();
  
  const stats = [
    { icon: Target, value: parseInt(t('projectsCount')), label: t('projectsLabel') },
    { icon: Users, value: parseInt(t('childrenCount')), label: t('childrenLabel') },
    { icon: Heart, value: parseInt(t('volunteersCount')), label: t('volunteersLabel') },
  ];

  const [animatedValues, setAnimatedValues] = useState(stats.map(() => 0));

  useEffect(() => {
    setAnimatedValues(stats.map(() => 0));
    const duration = 2000; // 2 seconds
    const steps = 60;
    const interval = duration / steps;

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      setAnimatedValues(stats.map(stat => 
        Math.floor((stat.value * currentStep) / steps)
      ));

      if (currentStep >= steps) {
        clearInterval(timer);
        setAnimatedValues(stats.map(stat => stat.value));
      }
    }, interval);

    return () => clearInterval(timer);
  }, [t('projectsCount'), t('childrenCount'), t('volunteersCount')]);

  return (
    <section id="who-we-are" className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('whoWeAreTitle')}</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {t('whoWeAreDesc')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-card rounded-[14px] p-8 shadow-soft hover:shadow-hover transition-all duration-300 text-center group"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                <stat.icon className="w-8 h-8" />
              </div>
              <div className="text-4xl font-bold text-primary mb-2">{animatedValues[index]}</div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
