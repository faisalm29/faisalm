import React from "react";

type StackItemProps = Omit<React.ComponentProps<"a">, "href" | "children"> & {
  href: string;
  children: React.ReactNode;
};

const StackItem = ({ href, children, ...props }: StackItemProps) => {
  return (
    <a
      {...props}
      href={href}
      target="_blank"
      className="hover:bg-accent/50 focus-visible:border-ring focus-visible:ring-ring/50 border-border flex rounded-md border px-1.5 py-1 text-sm transition-colors duration-300 ease-in-out outline-none focus-visible:ring-[3px]"
    >
      {children}
    </a>
  );
};

export { StackItem };
