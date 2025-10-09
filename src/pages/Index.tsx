import Layout from "@/components/layout/Layout";
import Hero from "@/components/home/Hero";
import WhoWeAre from "@/components/home/WhoWeAre";
import NewsCarousel from "@/components/home/NewsCarousel";
import SponsorsMarquee from "@/components/home/SponsorsMarquee";
import DonateSection from "@/components/home/DonateSection";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <WhoWeAre />
      <NewsCarousel />
      <SponsorsMarquee />
      <DonateSection />
    </Layout>
  );
};

export default Index;
