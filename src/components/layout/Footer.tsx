import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";
import { toast } from "sonner";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast.error("Please enter your email address");
      return;
    }
    if (!consent) {
      toast.error("Please agree to receive our newsletter");
      return;
    }
    toast.success("Thank you for subscribing to our newsletter!");
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
              Building learning through play. Fostering creativity and development in children across our community.
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
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <div className="space-y-3 text-sm">
              <a href="tel:+38970123456" className="flex items-center gap-2 hover:text-accent transition-colors">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span>+389 70 123 456</span>
              </a>
              <a href="mailto:info@2inc.org" className="flex items-center gap-2 hover:text-accent transition-colors">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span>info@2inc.org</span>
              </a>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <span>123 Main Street<br />Skopje, North Macedonia</span>
              </div>
            </div>
          </div>

          {/* Column 3: Newsletter */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Newsletter</h3>
            <p className="text-sm text-white/80 mb-4">
              Stay updated with our latest news and projects.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="space-y-3">
              <Input
                type="email"
                placeholder="Your email address"
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
                  I agree to receive newsletters and updates from @2 inc
                </label>
              </div>
              <Button type="submit" className="w-full bg-accent text-accent-foreground hover:bg-accent-hover">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Footnote Bar */}
      <div className="bg-[hsl(var(--footer-footnote))] py-4 px-4">
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 text-sm">
          <p>© 2025 @2 inc — All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="tel:+38970123456" className="hover:text-accent transition-colors">
              +389 70 123 456
            </a>
            <a href="mailto:info@2inc.org" className="hover:text-accent transition-colors">
              info@2inc.org
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
