import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CreditCard, Smartphone, Wallet, Heart } from "lucide-react";
import { toast } from "sonner";
import { useLanguage } from "@/contexts/LanguageContext";

const Donate = () => {
  const { t } = useLanguage();
  const [amount, setAmount] = useState<number | null>(50);
  const [customAmount, setCustomAmount] = useState("");
  const [frequency, setFrequency] = useState<"once" | "monthly">("once");
  const [paymentMethod, setPaymentMethod] = useState<"card" | "paypal" | "bank">("card");

  const presetAmounts = [25, 50, 100, 250];

  const handleDonate = () => {
    const finalAmount = amount || parseInt(customAmount);
    if (!finalAmount || finalAmount <= 0) {
      toast.error(t('unsubscribeError'));
      return;
    }
    
    toast.success(t('proceedToPayment'));
    
    setTimeout(() => {
      window.location.href = "/checkout";
    }, 1500);
  };

  const paymentMethods = [
    { id: "card", icon: CreditCard, label: t('creditCard'), description: t('visaMastercard') },
    { id: "paypal", icon: Wallet, label: t('paypal'), description: t('paypalAccount') },
    { id: "bank", icon: Smartphone, label: t('bankTransfer'), description: t('directTransfer') },
  ];

  return (
    <Layout>
      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left: Payment Configuration */}
            <div>
              <h1 className="text-4xl font-bold mb-6">{t('makeADonation')}</h1>
              
              {/* Frequency Selection */}
              <div className="mb-8">
                <label className="text-sm font-medium mb-3 block">{t('donationFrequency')}</label>
                <div className="grid grid-cols-2 gap-4">
                  <button
                    onClick={() => setFrequency("once")}
                    className={`p-4 rounded-[14px] border-2 transition-all ${
                      frequency === "once"
                        ? "border-primary bg-primary/5"
                        : "border-border hover:border-primary/50"
                    }`}
                  >
                    <div className="font-semibold">{t('oneTime')}</div>
                    <div className="text-sm text-muted-foreground">{t('singleDonation')}</div>
                  </button>
                  <button
                    onClick={() => setFrequency("monthly")}
                    className={`p-4 rounded-[14px] border-2 transition-all ${
                      frequency === "monthly"
                        ? "border-primary bg-primary/5"
                        : "border-border hover:border-primary/50"
                    }`}
                  >
                    <div className="font-semibold">{t('monthly')}</div>
                    <div className="text-sm text-muted-foreground">{t('recurringSupport')}</div>
                  </button>
                </div>
              </div>

              {/* Amount Selection */}
              <div className="mb-8">
                <label className="text-sm font-medium mb-3 block">{t('selectAmount')}</label>
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
                    placeholder={t('customAmountPlaceholder')}
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
                <label className="text-sm font-medium mb-3 block">{t('paymentMethod')}</label>
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
                {t('proceedToPayment')}
              </Button>
            </div>

            {/* Right: Impact Message */}
            <div className="lg:pl-8">
              <Card className="p-8 bg-gradient-to-br from-primary/5 to-secondary/5 border-0 shadow-soft sticky top-24">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-6">
                  <Heart className="w-8 h-8" />
                </div>
                
                <h2 className="text-2xl font-bold mb-4">{t('whyDonate')}</h2>
                
                <div className="space-y-4 mb-6">
                  <div>
                    <div className="font-semibold text-primary mb-1">$25 {t('provides')}</div>
                    <p className="text-muted-foreground">{t('learningMaterials')}</p>
                  </div>
                  
                  <div>
                    <div className="font-semibold text-secondary mb-1">$50 {t('supports')}</div>
                    <p className="text-muted-foreground">{t('weeklyWorkshop')}</p>
                  </div>
                  
                  <div>
                    <div className="font-semibold text-primary mb-1">$100 {t('funds')}</div>
                    <p className="text-muted-foreground">{t('educationalEquipment')}</p>
                  </div>
                  
                  <div>
                    <div className="font-semibold text-secondary mb-1">$250 {t('enables')}</div>
                    <p className="text-muted-foreground">{t('fullMonthProgram')}</p>
                  </div>
                </div>

                <div className="border-t pt-6">
                  <p className="text-sm text-muted-foreground mb-4">
                    {t('taxDeductible')}
                  </p>
                  <p className="text-sm font-medium">
                    {t('thankYouBelieving')}
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
