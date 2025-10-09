import Layout from "@/components/layout/Layout";
import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Checkout = () => {
  return (
    <Layout>
      <section className="py-20 px-4 bg-background min-h-[60vh] flex items-center">
        <div className="container mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-trust-green/10 text-trust-green mb-8">
            <CheckCircle className="w-12 h-12" />
          </div>
          
          <h1 className="text-4xl font-bold mb-4">Thank You for Your Donation!</h1>
          <p className="text-xl text-muted-foreground mb-8">
            Your generous contribution will help us continue building learning through play for children in our
            community.
          </p>

          <div className="bg-card rounded-[14px] p-8 shadow-soft mb-8">
            <h2 className="text-2xl font-semibold mb-4">What Happens Next?</h2>
            <ul className="text-left space-y-3 text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="text-trust-green font-bold">1.</span>
                <span>You will receive a confirmation email with your donation receipt for tax purposes.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-trust-green font-bold">2.</span>
                <span>Our team will send you updates on how your contribution is making a difference.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-trust-green font-bold">3.</span>
                <span>You'll be added to our newsletter to stay connected with our mission and impact.</span>
              </li>
            </ul>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/">
              <Button size="lg" variant="outline" className="rounded-[14px]">
                Return Home
              </Button>
            </Link>
            <Link to="/news">
              <Button size="lg" className="bg-primary hover:bg-primary-hover rounded-[14px]">
                View Our Impact
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Checkout;
