import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const NewsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const newsItems = [
    { id: 1, title: "New Learning Center Opens", date: "March 15, 2025", image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80" },
    { id: 2, title: "Summer Camp Registration Now Open", date: "March 10, 2025", image: "https://images.unsplash.com/photo-1560785477-d43d2b34e0df?w=800&q=80" },
    { id: 3, title: "Volunteer Training Workshop Success", date: "March 5, 2025", image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&q=80" },
    { id: 4, title: "Partnership with Local Schools", date: "February 28, 2025", image: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=800&q=80" },
    { id: 5, title: "Annual Fundraising Gala Announced", date: "February 20, 2025", image: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&q=80" },
    { id: 6, title: "New Educational Materials Donated", date: "February 15, 2025", image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80" },
    { id: 7, title: "Community Outreach Program Launched", date: "February 10, 2025", image: "https://images.unsplash.com/photo-1560785477-d43d2b34e0df?w=800&q=80" },
    { id: 8, title: "Children's Art Exhibition Opening", date: "February 5, 2025", image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&q=80" },
    { id: 9, title: "Volunteer Appreciation Event", date: "January 30, 2025", image: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=800&q=80" },
  ];

  const itemsToShow = 3;
  const totalSlides = Math.ceil(newsItems.length / itemsToShow);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalSlides);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, totalSlides]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
    setIsAutoPlaying(false);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
    setIsAutoPlaying(false);
  };

  const visibleItems = newsItems.slice(
    currentIndex * itemsToShow,
    (currentIndex + 1) * itemsToShow
  );

  return (
    <section id="news" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Latest News</h2>
          <p className="text-lg text-muted-foreground">Stay updated with our recent activities and announcements</p>
        </div>

        <div className="relative">
          {/* Left Arrow */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-full bg-gradient-to-r from-muted/90 to-transparent flex items-center justify-start pl-2 hover:from-muted transition-all duration-300"
            aria-label="Previous"
          >
            <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center shadow-soft hover:shadow-hover hover:bg-primary-hover transition-all">
              <ChevronLeft className="w-6 h-6" />
            </div>
          </button>

          {/* News Cards */}
          <div className="overflow-hidden px-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {visibleItems.map((item) => (
                <Link
                  key={item.id}
                  to={`/news/${item.id}`}
                  className="group"
                >
                  <div className="bg-card rounded-[14px] overflow-hidden shadow-soft hover:shadow-hover transition-all duration-300 transform hover:-translate-y-1">
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6">
                      <div className="text-sm text-primary font-medium mb-2">{item.date}</div>
                      <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Right Arrow */}
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-full bg-gradient-to-l from-muted/90 to-transparent flex items-center justify-end pr-2 hover:from-muted transition-all duration-300"
            aria-label="Next"
          >
            <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center shadow-soft hover:shadow-hover hover:bg-primary-hover transition-all">
              <ChevronRight className="w-6 h-6" />
            </div>
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentIndex(index);
                setIsAutoPlaying(false);
              }}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex ? "bg-primary w-8" : "bg-muted-foreground/30"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsCarousel;
