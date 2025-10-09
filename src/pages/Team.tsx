import Layout from "@/components/layout/Layout";
import { Mail, Linkedin } from "lucide-react";

const Team = () => {
  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "Executive Director",
      bio: "Passionate about education and child development with 15 years of experience in NGO management.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
      email: "sarah@2inc.org",
      linkedin: "#",
    },
    {
      name: "Michael Chen",
      role: "Program Director",
      bio: "Expert in curriculum development and play-based learning methodologies.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
      email: "michael@2inc.org",
      linkedin: "#",
    },
    {
      name: "Elena Petrova",
      role: "Community Outreach Manager",
      bio: "Dedicated to building partnerships and expanding our reach in the community.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80",
      email: "elena@2inc.org",
      linkedin: "#",
    },
    {
      name: "David Martinez",
      role: "Volunteer Coordinator",
      bio: "Organizing and training volunteers to maximize their impact on children's lives.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80",
      email: "david@2inc.org",
      linkedin: "#",
    },
    {
      name: "Amara Okafor",
      role: "Educational Consultant",
      bio: "Specialist in early childhood education and developmental psychology.",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&q=80",
      email: "amara@2inc.org",
      linkedin: "#",
    },
    {
      name: "James Wilson",
      role: "Operations Manager",
      bio: "Ensuring smooth operations and resource management for all our programs.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
      email: "james@2inc.org",
      linkedin: "#",
    },
  ];

  return (
    <Layout>
      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Meet Our Team</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our dedicated team of professionals works tirelessly to create meaningful learning experiences for
              children in our community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-card rounded-[14px] overflow-hidden shadow-soft hover:shadow-hover transition-all duration-300 group"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <div className="text-primary font-medium mb-3">{member.role}</div>
                  <p className="text-muted-foreground text-sm mb-4">{member.bio}</p>
                  <div className="flex items-center gap-3">
                    <a
                      href={`mailto:${member.email}`}
                      className="w-9 h-9 rounded-full bg-primary/10 text-primary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all"
                      aria-label={`Email ${member.name}`}
                    >
                      <Mail className="w-4 h-4" />
                    </a>
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 rounded-full bg-primary/10 text-primary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all"
                      aria-label={`${member.name}'s LinkedIn`}
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Team;
