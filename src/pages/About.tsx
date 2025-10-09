import Layout from "@/components/layout/Layout";
import { Target, Eye, Heart } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description: "To foster creativity, learning, and development in children through innovative play-based educational programs that inspire lifelong curiosity and growth.",
    },
    {
      icon: Eye,
      title: "Our Vision",
      description: "A world where every child has access to quality educational experiences that nurture their natural creativity and love for learning through play.",
    },
    {
      icon: Heart,
      title: "Our Values",
      description: "We believe in inclusivity, creativity, collaboration, and the transformative power of play in child development and education.",
    },
  ];

  return (
    <Layout>
      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About @2 inc</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Building learning through play since 2015. We are a dedicated team of educators, volunteers, and
              community members committed to making a positive impact in children's lives.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-card rounded-[14px] p-8 shadow-soft hover:shadow-hover transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-6">
                  <value.icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-muted/30 rounded-[14px] p-8 md:p-12">
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground mb-4">
                @2 inc was founded in 2015 by a group of passionate educators who recognized the transformative
                power of play in child development. What started as a small after-school program has grown into
                a comprehensive organization serving hundreds of children across our community.
              </p>
              <p className="text-muted-foreground mb-4">
                Over the years, we've developed innovative programs that combine education with play, creating
                engaging learning experiences that help children develop critical thinking, creativity, and
                social skills. Our approach is grounded in research and best practices in early childhood
                education.
              </p>
              <p className="text-muted-foreground">
                Today, we work with schools, community centers, and families to provide high-quality educational
                programs that make learning fun and accessible to all children, regardless of their background.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
