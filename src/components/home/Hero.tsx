import { useEffect, useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const Hero = () => {
  const { t } = useLanguage();
  const [displayText, setDisplayText] = useState("");
  const fullText = t('heroTitle');
  
  useEffect(() => {
    setDisplayText("");
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
  }, [fullText]);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden -mt-[96px] bg-gradient-to-br from-purple-900 via-indigo-800 to-cyan-500">
      {/* Animated background blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-purple-600/40 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-[450px] h-[450px] bg-pink-500/30 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-[520px] h-[520px] bg-cyan-400/25 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
        <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-yellow-300/20 rounded-full blur-3xl animate-blob animation-delay-3000"></div>
      </div>
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/20 to-background/30"></div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white text-balance">
          {displayText}
        </h1>
      </div>
    </section>
  );
};

export default Hero;
