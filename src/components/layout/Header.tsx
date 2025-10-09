import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Check if at very top (reveal zone)
      if (currentScrollY < 8) {
        setIsVisible(true);
      } else {
        // Show when scrolling up, hide when scrolling down
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
      label: "Welcome",
      dropdown: [
        { label: "Who We Are", href: "/#who-we-are" },
        { label: "News", href: "/#news" },
        { label: "Partners & Sponsors", href: "/#sponsors" },
        { label: "Donate", href: "/#donate" },
      ],
    },
    {
      label: "About Us",
      dropdown: [
        { label: "About", href: "/about" },
        { label: "Meet the Team", href: "/team" },
        { label: "Partners & Sponsors", href: "/partners" },
        { label: "Documents & Reports", href: "/documents" },
        { label: "Contact", href: "/contact" },
      ],
    },
    {
      label: "Projects",
      dropdown: [
        { label: "Current Projects", href: "/projects/current" },
        { label: "Past Projects", href: "/projects/past" },
      ],
    },
    { label: "News", href: "/news" },
    { label: "Donate", href: "/donate", highlight: true },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      } ${isScrolled ? "shadow-soft" : ""}`}
    >
      <nav className="gradient-primary text-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center font-bold text-primary text-xl">
                @2
              </div>
              <span className="font-bold text-lg hidden sm:inline">@2 inc</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navItems.map((item) =>
                item.dropdown ? (
                  <div
                    key={item.label}
                    className="relative group"
                    onMouseEnter={() => setActiveDropdown(item.label)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <button
                      className={`flex items-center gap-1 px-4 py-2 rounded-lg transition-all ${
                        activeDropdown === item.label ? "bg-white/10" : "hover:bg-white/10"
                      }`}
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
                    className={`px-4 py-2 rounded-lg transition-all ${
                      item.highlight
                        ? "bg-accent text-accent-foreground hover:bg-accent-hover font-semibold"
                        : "hover:bg-white/10"
                    }`}
                  >
                    {item.label}
                  </Link>
                )
              )}
              
              {/* Language Toggle */}
              <div className="ml-4 flex items-center gap-1 border-l border-white/30 pl-4">
                <button className="px-3 py-1 rounded hover:bg-white/10 transition-colors font-semibold">
                  EN
                </button>
                <span className="text-white/50">|</span>
                <Link to="/mk" className="px-3 py-1 rounded hover:bg-white/10 transition-colors opacity-70">
                  MK
                </Link>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
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
              <div className="flex items-center gap-2 px-4 pt-4 border-t border-white/30 mt-4">
                <button className="px-4 py-2 rounded-lg bg-white/10 font-semibold">EN</button>
                <Link to="/mk" className="px-4 py-2 rounded-lg hover:bg-white/10 opacity-70">
                  MK
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
