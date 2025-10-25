import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, ChevronUp } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import logo from "@/assets/logo.png";

const Header = () => {
  const { language, setLanguage, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [dropdownTimeout, setDropdownTimeout] = useState<NodeJS.Timeout | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY < 8) {
        setIsVisible(true);
      } else {
        setIsVisible(currentScrollY < lastScrollY);
      }
      
      setIsScrolled(currentScrollY > 20);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const navItems = [
    {
      label: t('welcome'),
      dropdown: [
        { label: t('whoWeAre'), href: "/#who-we-are" },
        { label: t('news'), href: "/#news" },
        { label: t('partnersSponsors'), href: "/#sponsors" },
        { label: t('donate'), href: "/#donate" },
      ],
    },
    {
      label: t('about'),
      dropdown: [
        { label: t('aboutUs'), href: "/about" },
        { label: t('meetTeam'), href: "/team" },
        { label: t('partnersSponsors'), href: "/partners" },
        { label: t('documents'), href: "/documents" },
        { label: t('contact'), href: "/contact" },
      ],
    },
    {
      label: t('projects'),
      dropdown: [
        { label: t('currentProjects'), href: "/projects/current" },
        { label: t('pastProjects'), href: "/projects/past" },
      ],
    },
    { label: t('news'), href: "/news" },
    { label: t('donate'), href: "/donate", highlight: true },
  ];

  return (
    <header
      className={`fixed top-[42px] left-0 right-0 z-40 transition-all duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      } ${isScrolled ? "shadow-soft" : ""}`}
      style={{ background: 'linear-gradient(135deg, #201f43 0%, #3a3870 100%)' }}
    >
      <nav className="text-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-28">
            <Link to="/" className="flex items-center gap-4 group">
              <div className="w-16 h-16 rounded-full overflow-hidden bg-white flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                <img src={logo} alt="COGNITA Logo" className="w-full h-full object-cover scale-[1.4]" />
              </div>
              <span 
                className="font-bold text-3xl hidden sm:inline transition-all duration-300"
                style={{ 
                  color: '#d1e1ea',
                  fontFamily: language === 'mk' ? "'Lobster', cursive" : "'Knewave', cursive"
                }}
              >
                {language === 'mk' ? 'КОГНИТА' : 'COGNITA'}
              </span>
            </Link>

            <div className="hidden lg:flex items-center gap-1">
              {navItems.map((item) =>
                item.dropdown ? (
                  <div
                    key={item.label}
                    className="relative group"
                    onMouseEnter={() => {
                      if (dropdownTimeout) clearTimeout(dropdownTimeout);
                      setActiveDropdown(item.label);
                    }}
                    onMouseLeave={() => {
                      const timeout = setTimeout(() => setActiveDropdown(null), 300);
                      setDropdownTimeout(timeout);
                    }}
                  >
                    <button
                      className={`flex items-center gap-1 px-4 py-2 rounded-lg transition-all font-bold ${
                        activeDropdown === item.label ? "bg-white/10" : "hover:bg-white/10"
                      }`}
                      style={{ fontFamily: "'Poppins', sans-serif" }}
                    >
                      {item.label}
                      {activeDropdown === item.label ? (
                        <ChevronUp className="w-4 h-4" />
                      ) : (
                        <ChevronDown className="w-4 h-4" />
                      )}
                    </button>
                    <div
                      className={`absolute top-full left-0 mt-2 bg-white text-foreground rounded-lg shadow-hover min-w-[220px] overflow-hidden transition-all ${
                        activeDropdown === item.label
                          ? "opacity-100 translate-y-0 animate-slide-down"
                          : "opacity-0 -translate-y-2 pointer-events-none"
                      }`}
                    >
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.href}
                          to={subItem.href}
                          className="block px-4 py-3 hover:bg-accent/10 transition-colors"
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    key={item.label}
                    to={item.href!}
                    className={`px-4 py-2 rounded-lg transition-all font-bold ${
                      item.highlight
                        ? "bg-accent text-accent-foreground hover:bg-accent-hover"
                        : "hover:bg-white/10"
                    }`}
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  >
                    {item.label}
                  </Link>
                )
              )}
              
              <div className="ml-4 flex items-center border-l border-white/30 pl-4">
                <div className="relative flex items-center gap-0 rounded-lg border border-white/30 bg-white/5 backdrop-blur-sm overflow-hidden p-1">
                  <div 
                    className="absolute inset-y-1 w-[calc(50%-4px)] bg-white/20 rounded-md transition-all duration-500 ease-out"
                    style={{ 
                      left: language === 'en' ? '4px' : 'calc(50% + 0px)',
                    }}
                  />
                  <button 
                    className={`relative z-10 px-4 py-1.5 rounded-md transition-all duration-300 ${
                      language === 'en' 
                        ? 'font-semibold text-white' 
                        : 'text-white/70 hover:text-white/90'
                    }`}
                    onClick={() => setLanguage('en')}
                  >
                    EN
                  </button>
                  <button 
                    className={`relative z-10 px-4 py-1.5 rounded-md transition-all duration-300 ${
                      language === 'mk' 
                        ? 'font-semibold text-white' 
                        : 'text-white/70 hover:text-white/90'
                    }`}
                    onClick={() => setLanguage('mk')}
                  >
                    MK
                  </button>
                </div>
              </div>
            </div>

            <button
              className="lg:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {mobileMenuOpen && (
            <div className="lg:hidden pb-4 animate-slide-down">
              {navItems.map((item) =>
                item.dropdown ? (
                  <details key={item.label} className="group">
                    <summary className="flex items-center justify-between px-4 py-3 cursor-pointer hover:bg-white/10 rounded-lg">
                      <span>{item.label}</span>
                      <ChevronDown className="w-4 h-4 group-open:rotate-180 transition-transform" />
                    </summary>
                    <div className="pl-6">
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.href}
                          to={subItem.href}
                          className="block px-4 py-2 hover:bg-white/10 rounded-lg"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  </details>
                ) : (
                  <Link
                    key={item.label}
                    to={item.href!}
                    className={`block px-4 py-3 rounded-lg ${
                      item.highlight ? "bg-accent text-accent-foreground font-semibold my-2" : "hover:bg-white/10"
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                )
              )}
              <div className="flex items-center justify-center px-4 pt-4 border-t border-white/30 mt-4">
                <div className="relative flex items-center gap-0 rounded-lg border border-white/30 bg-white/5 backdrop-blur-sm overflow-hidden p-1">
                  <div 
                    className="absolute inset-y-1 w-[calc(50%-4px)] bg-white/20 rounded-md transition-all duration-500 ease-out"
                    style={{ 
                      left: language === 'en' ? '4px' : 'calc(50% + 0px)',
                    }}
                  />
                  <button 
                    className={`relative z-10 px-6 py-2 rounded-md transition-all duration-300 ${
                      language === 'en' 
                        ? 'font-semibold text-white' 
                        : 'text-white/70'
                    }`}
                    onClick={() => setLanguage('en')}
                  >
                    EN
                  </button>
                  <button 
                    className={`relative z-10 px-6 py-2 rounded-md transition-all duration-300 ${
                      language === 'mk' 
                        ? 'font-semibold text-white' 
                        : 'text-white/70'
                    }`}
                    onClick={() => setLanguage('mk')}
                  >
                    MK
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
