import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CreditCard, Smartphone, Wallet, Heart } from "lucide-react";
import { toast } from "sonner";

const Donate = () => {
  const [amount, setAmount] = useState<number | null>(50);
  const [customAmount, setCustomAmount] = useState("");
  const [frequency, setFrequency] = useState<"once" | "monthly">("once");
  const [paymentMethod, setPaymentMethod] = useState<"card" | "paypal" | "bank">("card");

  const presetAmounts = [25, 50, 100, 250];

  const handleDonate = () => {
    const finalAmount = amount || parseInt(customAmount);
    if (!finalAmount || finalAmount <= 0) {
      toast.error("Please select or enter a valid amount");
      return;
    }
    
    // In a real implementation, this would redirect to payment gateway
    toast.success(`Redirecting to payment gateway for ${frequency === "monthly" ? "monthly" : "one-time"} donation of $${finalAmount}`);
    
    // Simulate redirect to checkout
    setTimeout(() => {
      window.location.href = "/checkout";
    }, 1500);
  };

  const paymentMethods = [
    { id: "card", icon: CreditCard, label: "Credit/Debit Card", description: "Visa, Mastercard" },
    { id: "paypal", icon: Wallet, label: "PayPal", description: "PayPal account" },
    { id: "bank", icon: Smartphone, label: "Bank Transfer", description: "Direct transfer" },
  ];

  return (
    <Layout>
      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left: Payment Configuration */}
            <div>
              <h1 className="text-4xl font-bold mb-6">Make a Donation</h1>
              
              {/* Frequency Selection */}
              <div className="mb-8">
                <label className="text-sm font-medium mb-3 block">Donation Frequency</label>
                <div className="grid grid-cols-2 gap-4">
                  <button
                    onClick={() => setFrequency("once")}
                    className={`p-4 rounded-[14px] border-2 transition-all ${
                      frequency === "once"
                        ? "border-primary bg-primary/5"
                        : "border-border hover:border-primary/50"
                    }`}
                  >
                    <div className="font-semibold">One-time</div>
                    <div className="text-sm text-muted-foreground">Single donation</div>
                  </button>
                  <button
                    onClick={() => setFrequency("monthly")}
                    className={`p-4 rounded-[14px] border-2 transition-all ${
                      frequency === "monthly"
                        ? "border-primary bg-primary/5"
                        : "border-border hover:border-primary/50"
                    }`}
                  >
                    <div className="font-semibold">Monthly</div>
                    <div className="text-sm text-muted-foreground">Recurring support</div>
                  </button>
                </div>
              </div>

              {/* Amount Selection */}
              <div className="mb-8">
                <label className="text-sm font-medium mb-3 block">Select Amount</label>
                <div className="grid grid-cols-4 gap-3 mb-4">
                  {presetAmounts.map((preset) => (
                    <button
                      key={preset}
                      onClick={() => {
                        setAmount(preset);
                        setCustomAmount("");
                      }}
                      className={`p-4 rounded-[14px] border-2 font-semibold transition-all ${
                        amount === preset
                          ? "border-primary bg-primary text-primary-foreground"
                          : "border-border hover:border-primary/50"
                      }`}
                    >
                      ${preset}
                    </button>
                  ))}
                </div>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground">$</span>
                  <input
                    type="number"
                    placeholder="Custom amount"
                    value={customAmount}
                    onChange={(e) => {
                      setCustomAmount(e.target.value);
                      setAmount(null);
                    }}
                    className="w-full pl-8 pr-4 py-3 rounded-[14px] border-2 border-border focus:border-primary outline-none transition-colors"
                  />
                </div>
              </div>

              {/* Payment Method Selection */}
              <div className="mb-8">
                <label className="text-sm font-medium mb-3 block">Payment Method</label>
                <div className="space-y-3">
                  {paymentMethods.map((method) => (
                    <button
                      key={method.id}
                      onClick={() => setPaymentMethod(method.id as any)}
                      className={`w-full p-4 rounded-[14px] border-2 transition-all flex items-center gap-4 ${
                        paymentMethod === method.id
                          ? "border-primary bg-primary/5"
                          : "border-border hover:border-primary/50"
                      }`}
                    >
                      <div
                        className={`w-12 h-12 rounded-full flex items-center justify-center ${
                          paymentMethod === method.id ? "bg-primary text-white" : "bg-muted"
                        }`}
                      >
                        <method.icon className="w-6 h-6" />
                      </div>
                      <div className="text-left flex-1">
                        <div className="font-semibold">{method.label}</div>
                        <div className="text-sm text-muted-foreground">{method.description}</div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              <Button
                onClick={handleDonate}
                size="lg"
                className="w-full bg-primary hover:bg-primary-hover text-primary-foreground font-semibold py-6 rounded-[14px]"
              >
                Proceed to Payment
              </Button>
            </div>

            {/* Right: Impact Message */}
            <div className="lg:pl-8">
              <Card className="p-8 bg-gradient-to-br from-primary/5 to-secondary/5 border-0 shadow-soft sticky top-24">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-6">
                  <Heart className="w-8 h-8" />
                </div>
                
                <h2 className="text-2xl font-bold mb-4">Why Your Donation Matters</h2>
                
                <div className="space-y-4 mb-6">
                  <div>
                    <div className="font-semibold text-primary mb-1">$25 provides</div>
                    <p className="text-muted-foreground">Learning materials for one child for a month</p>
                  </div>
                  
                  <div>
                    <div className="font-semibold text-secondary mb-1">$50 supports</div>
                    <p className="text-muted-foreground">A weekly workshop for a group of children</p>
                  </div>
                  
                  <div>
                    <div className="font-semibold text-primary mb-1">$100 funds</div>
                    <p className="text-muted-foreground">Educational equipment for our learning center</p>
                  </div>
                  
                  <div>
                    <div className="font-semibold text-secondary mb-1">$250 enables</div>
                    <p className="text-muted-foreground">A full month of programs for multiple children</p>
                  </div>
                </div>

                <div className="border-t pt-6">
                  <p className="text-sm text-muted-foreground mb-4">
                    Your contribution is tax-deductible and 100% goes directly to supporting our educational
                    programs and the children we serve.
                  </p>
                  <p className="text-sm font-medium">
                    Thank you for believing in the power of play-based learning!
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Donate;
