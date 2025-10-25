import { Phone, Mail, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const TopStrip = () => {
  const { t } = useLanguage();
  
  const socialLinks = [
    { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
    { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
    { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  ];

  return (
    <div className="bg-[hsl(var(--top-strip-bg))] text-white py-2.5 px-4 text-sm fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center gap-4">
          <a href={`tel:${t('phone').replace(/\s/g, '')}`} className="flex items-center gap-2 hover:text-accent transition-colors">
            <Phone className="w-4 h-4" />
            <span className="hidden sm:inline">{t('phone')}</span>
          </a>
          <a href={`mailto:${t('email')}`} className="flex items-center gap-2 hover:text-accent transition-colors">
            <Mail className="w-4 h-4" />
            <span className="hidden sm:inline">{t('email')}</span>
          </a>
        </div>
        
        <div className="flex items-center gap-2">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center transition-all duration-300 hover:bg-accent/20 hover:border-accent group"
              aria-label={social.label}
            >
              <social.icon className="w-4 h-4 transition-colors group-hover:text-accent" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopStrip;
