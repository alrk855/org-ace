import { useEffect, useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const Hero = () => {
  const { t } = useLanguage();
  const [displayText, setDisplayText] = useState("");
  const fullText = t('heroTitle');
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 80);
    
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden -mt-[88px] bg-gradient-to-br from-[hsl(252,39%,45%)] via-[hsl(217,49%,50%)] to-[hsl(180,100%,85%)]">
      {/* Animated background blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[hsl(252,39%,55%)]/30 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-[hsl(217,49%,60%)]/30 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-[hsl(180,100%,75%)]/20 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
      </div>
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/10 to-background/20"></div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white text-balance">
          {displayText}
          <span className="inline-block w-1 h-12 md:h-16 lg:h-20 bg-accent ml-2 animate-blink align-middle"></span>
        </h1>
      </div>
    </section>
  );
};

export default Hero;
