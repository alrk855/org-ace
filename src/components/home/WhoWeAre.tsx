import { Users, Heart, Target } from "lucide-react";

const WhoWeAre = () => {
  const stats = [
    { icon: Users, value: "500+", label: "Children Reached" },
    { icon: Heart, value: "25+", label: "Active Volunteers" },
    { icon: Target, value: "15", label: "Ongoing Projects" },
  ];

  return (
    <section id="who-we-are" className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Who We Are</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            @2 inc is a non-governmental organization dedicated to fostering creativity, learning, and development
            in children through innovative play-based educational programs. We believe that play is fundamental to
            healthy child development and lifelong learning.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-card rounded-[14px] p-8 shadow-soft hover:shadow-hover transition-all duration-300 text-center group"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                <stat.icon className="w-8 h-8" />
              </div>
              <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
