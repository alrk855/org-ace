import Layout from "@/components/layout/Layout";
import { FileText, Download } from "lucide-react";

const Documents = () => {
  const documents = [
    {
      title: "Organization Statute",
      description: "Our founding document outlining organizational structure and governance",
      filename: "statute.pdf",
      size: "1.2 MB",
    },
    {
      title: "Annual Report 2024",
      description: "Comprehensive overview of our activities, impact, and financial statements for 2024",
      filename: "annual-report-2024.pdf",
      size: "3.5 MB",
    },
    {
      title: "Privacy Policy",
      description: "How we collect, use, and protect personal information",
      filename: "privacy-policy.pdf",
      size: "450 KB",
    },
    {
      title: "Financial Transparency Report",
      description: "Detailed breakdown of funding sources and expenditures",
      filename: "financial-report-2024.pdf",
      size: "2.1 MB",
    },
    {
      title: "Code of Conduct",
      description: "Guidelines and expectations for staff, volunteers, and partners",
      filename: "code-of-conduct.pdf",
      size: "680 KB",
    },
    {
      title: "Volunteer Handbook",
      description: "Comprehensive guide for volunteers including policies and procedures",
      filename: "volunteer-handbook.pdf",
      size: "1.8 MB",
    },
  ];

  return (
    <Layout>
      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Documents & Reports</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Access our organizational documents, annual reports, and policy materials. We believe in transparency
              and accountability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {documents.map((doc, index) => (
              <div
                key={index}
                className="bg-card rounded-[14px] p-6 shadow-soft hover:shadow-hover transition-all duration-300 group"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                    <FileText className="w-6 h-6" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                      {doc.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-3">{doc.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">{doc.size}</span>
                      <button className="flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-lg hover:bg-primary hover:text-primary-foreground transition-all text-sm font-medium">
                        <Download className="w-4 h-4" />
                        Download
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-muted/30 rounded-[14px] p-8 text-center">
            <p className="text-muted-foreground">
              Need a document that's not listed here? Contact us at{" "}
              <a href="mailto:info@2inc.org" className="text-primary hover:underline font-medium">
                info@2inc.org
              </a>
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Documents;
