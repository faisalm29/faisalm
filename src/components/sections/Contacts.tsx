import { SectionContainer } from "@/components/containers";
import { ContactItem } from "@/components/ContactItem";
import { Mail } from "lucide-react";
import { Github } from "@/components/icon";

const contacts = [
  {
    name: "Email",
    url: "mailto:author@mfaisal.xyz",
    icon: <Mail />,
  },
  {
    name: "GitHub",
    url: "https://github.com/faisalm29",
    icon: (
      <Github className="fill-muted-foreground group-hover:fill-foreground transition-all duration-300 ease-in-out" />
    ),
  },
];

const Contacts = () => {
  return (
    <SectionContainer>
      <h2>Connect with Me</h2>
      <ul className="flex items-center justify-between gap-2">
        {contacts.map((contact) => (
          <li key={contact.url} className="w-full">
            <ContactItem href={contact.url}>
              {contact.name} {contact.icon}
            </ContactItem>
          </li>
        ))}
      </ul>
    </SectionContainer>
  );
};

export { Contacts };
