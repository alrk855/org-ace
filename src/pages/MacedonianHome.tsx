import Layout from "@/components/layout/Layout";

const MacedonianHome = () => {
  return (
    <Layout>
      <section className="py-20 px-4 bg-background min-h-[60vh] flex items-center">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Добредојдовте на @2 inc
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Македонската верзија на веб-страницата е во развој.
          </p>
          <p className="text-lg text-muted-foreground">
            Macedonian version of the website is under development.
          </p>
          <div className="mt-12">
            <a
              href="/"
              className="inline-block px-8 py-3 bg-primary text-primary-foreground rounded-[14px] font-semibold hover:bg-primary-hover transition-colors"
            >
              Switch to English
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default MacedonianHome;
