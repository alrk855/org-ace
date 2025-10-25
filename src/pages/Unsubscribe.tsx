import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { toast } from "sonner";
import { useLanguage } from "@/contexts/LanguageContext";
import { Mail } from "lucide-react";

const Unsubscribe = () => {
  const { t } = useLanguage();
  const [email, setEmail] = useState("");

  const handleUnsubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      toast.error(t('unsubscribeError'));
      return;
    }
    toast.success(t('unsubscribeSuccess'));
    setEmail("");
  };

  return (
    <Layout>
      <section className="py-20 px-4 bg-background min-h-[60vh] flex items-center">
        <div className="container mx-auto max-w-2xl">
          <div className="bg-card rounded-[14px] p-8 md:p-12 shadow-soft">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-muted mb-6">
              <Mail className="w-8 h-8 text-muted-foreground" />
            </div>
            
            <h1 className="text-4xl font-bold mb-4">{t('unsubscribeTitle')}</h1>
            <p className="text-xl text-muted-foreground mb-8">
              {t('unsubscribeDesc')}
            </p>

            <form onSubmit={handleUnsubscribe} className="space-y-4">
              <div>
                <label htmlFor="unsubscribe-email" className="block text-sm font-medium mb-2">
                  {t('emailAddressLabel')}
                </label>
                <Input
                  id="unsubscribe-email"
                  type="email"
                  placeholder={t('emailPlaceholder')}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="text-base"
                />
              </div>
              <Button 
                type="submit" 
                className="w-full bg-primary hover:bg-primary-hover py-6 rounded-[14px]"
              >
                {t('unsubscribeButton')}
              </Button>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Unsubscribe;
