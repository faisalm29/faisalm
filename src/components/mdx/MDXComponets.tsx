import React from "react";
import { Hash } from "@/components/icons/Hash";

type AnchorLinkProps = Omit<React.ComponentProps<"a">, "href"> & {
  href: string;
};

export const MDXComponents = {
  hr: (props: React.ComponentProps<"hr">) => (
    <div className="my-10 flex w-full items-center" {...props}>
      <div
        className="bg-border h-px flex-1"
        style={{
          maskImage:
            "linear-gradient(90deg, transparent, black 8%, black 92%, transparent)",
          WebkitMaskImage:
            "linear-gradient(90deg, transparent, black 8%, black 92%, transparent)",
        }}
      />
    </div>
  ),
  h2: ({ ...props }: React.ComponentProps<"h2">) => {
    return <h2 {...props} className="group relative scroll-m-5"></h2>;
  },
  h3: ({ ...props }: React.ComponentProps<"h3">) => {
    return <h3 {...props} className="group relative scroll-m-5"></h3>;
  },
  h4: ({ ...props }: React.ComponentProps<"h4">) => {
    return <h4 {...props} className="group relative scroll-m-5"></h4>;
  },
  table: (props: React.ComponentProps<"table">) => (
    <div className="border-border my-6 overflow-hidden rounded-xl border">
      <div className="w-full overflow-x-auto">
        <table
          className="m-0! w-full min-w-full border-separate border-spacing-0"
          {...props}
        />
      </div>
    </div>
  ),
  a: ({ ...props }: AnchorLinkProps) => {
    if (props.href.startsWith("#")) {
      return (
        <a
          {...props}
          href={props.href}
          className="absolute top-0 right-0 bottom-0 -left-3 mt-auto mb-auto hidden w-fit -translate-x-1/2 flex-col items-center justify-center opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100 md:flex"
        >
          <Hash className="text-foreground" size={16} />
        </a>
      );
    }
    return (
      <a
        {...props}
        target={props.href.startsWith("https") ? "_blank" : "_self"}
        className="text-muted-foreground decoration-foreground/30 hover:decoration-muted-foreground hover:text-foreground inline-block underline underline-offset-3 transition-all duration-300 ease-in-out"
      />
    );
  },
};
