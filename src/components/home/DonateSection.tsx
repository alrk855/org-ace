import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const DonateSection = () => {
  const { t } = useLanguage();
  
  return (
    <section id="donate" className="py-20 px-4 gradient-primary text-white">
      <div className="container mx-auto max-w-4xl text-center">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/20 mb-6">
          <Heart className="w-10 h-10 text-white" />
        </div>
        
        <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('donateSectionTitle')}</h2>
        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          {t('donateSectionDesc')}
        </p>
        
        <Link to="/donate">
          <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent-hover font-semibold text-lg px-8 py-6 rounded-[14px] shadow-hover">
            {t('donateButton')}
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default DonateSection;
