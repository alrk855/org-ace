import { Phone, Mail, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const TopStrip = () => {
  const socialLinks = [
    { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
    { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
    { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  ];

  return (
    <div className="bg-[hsl(var(--top-strip-bg))] text-white py-2 px-4 text-sm">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center gap-4">
          <a href="tel:+38970123456" className="flex items-center gap-2 hover:text-accent transition-colors">
            <Phone className="w-4 h-4" />
            <span className="hidden sm:inline">+389 70 123 456</span>
          </a>
          <a href="mailto:info@2inc.org" className="flex items-center gap-2 hover:text-accent transition-colors">
            <Mail className="w-4 h-4" />
            <span className="hidden sm:inline">info@2inc.org</span>
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
