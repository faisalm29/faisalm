import React from "react";

type Contact = Omit<React.ComponentProps<"a">, "children"> & {
  href: string;
  children: React.ReactNode;
};

const ContactItem = ({ href, children, ...props }: Contact) => {
  return (
    <a
      {...props}
      href={href}
      target="_blank"
      className="border-border group block rounded-md border p-2"
    >
      <div className="bg-muted/50 text-muted-foreground group-hover:bg-muted group-hover:text-foreground group flex items-center justify-between rounded-sm p-2 transition-all duration-300 ease-in-out">
        {children}
      </div>
    </a>
  );
};

export { ContactItem };
