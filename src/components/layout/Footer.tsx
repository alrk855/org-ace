import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";
import { toast } from "sonner";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast.error(t('emailLabel'));
      return;
    }
    if (!consent) {
      toast.error(t('consentText'));
      return;
    }
    toast.success(t('subscribe'));
    setEmail("");
    setConsent(false);
  };

  const socialLinks = [
    { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
    { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
    { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  ];

  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Column 1: Logo & Socials */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center font-bold text-primary text-xl">
                @2
              </div>
              <span className="font-bold text-lg">@2 inc</span>
            </div>
            <p className="text-sm text-white/80 mb-4">
              {t('footerAbout')}
            </p>
            <div className="flex items-center gap-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full border border-white/30 flex items-center justify-center transition-all duration-300 hover:bg-accent hover:border-accent hover:text-accent-foreground group"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4">{t('contactUs')}</h3>
            <div className="space-y-3 text-sm">
              <a href={`tel:${t('phone').replace(/\s/g, '')}`} className="flex items-center gap-2 hover:text-accent transition-colors">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span>{t('phone')}</span>
              </a>
              <a href={`mailto:${t('email')}`} className="flex items-center gap-2 hover:text-accent transition-colors">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span>{t('email')}</span>
              </a>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <span>{t('address')}</span>
              </div>
            </div>
          </div>

          {/* Column 3: Newsletter */}
          <div>
            <h3 className="font-semibold text-lg mb-4">{t('newsletter')}</h3>
            <p className="text-sm text-white/80 mb-4">
              {t('newsletterDesc')}
            </p>
            <form onSubmit={handleNewsletterSubmit} className="space-y-3">
              <Input
                type="email"
                placeholder={t('emailPlaceholder')}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white/10 border-white/30 text-white placeholder:text-white/50"
              />
              <div className="flex items-start gap-2">
                <Checkbox
                  id="newsletter-consent"
                  checked={consent}
                  onCheckedChange={(checked) => setConsent(checked as boolean)}
                  className="mt-1"
                />
                <label htmlFor="newsletter-consent" className="text-xs text-white/70 cursor-pointer">
                  {t('consentText')}
                </label>
              </div>
              <Button type="submit" className="w-full bg-accent text-accent-foreground hover:bg-accent-hover">
                {t('subscribe')}
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Footnote Bar */}
      <div className="bg-[hsl(var(--footer-footnote))] py-4 px-4">
        <div className="container mx-auto text-center text-sm">
          <p>© 2025 @2 inc — {t('allRightsReserved')}.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
