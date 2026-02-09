import React, { type AnchorHTMLAttributes } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const anchorLinkVariants = cva(
  "underline underline-offset-3 transition-all ease-in-out duration-300 inline-block",
  {
    variants: {
      variant: {
        primary:
          "text-foreground decoration-foreground/30 hover:decoration-muted-foreground",
        secondary:
          "text-muted-foreground decoration-foreground/30 hover:decoration-muted-foreground hover:text-foreground",
        muted:
          "text-foreground/30 hover:decoration-muted-foreground hover:text-muted-foreground",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  },
);

type AnchorProps = AnchorHTMLAttributes<HTMLAnchorElement>;

type InternalLinkProps = React.ComponentProps<"a"> & {
  href: string;
  children: React.ReactNode;
} & Omit<AnchorProps, "href"> &
  VariantProps<typeof anchorLinkVariants>;

type ExternalLinkProps = AnchorProps &
  VariantProps<typeof anchorLinkVariants> & {
    href: string;
  };

type CustomLinkProps = InternalLinkProps | ExternalLinkProps;

const isExternalLink = (href: string) =>
  href.startsWith("http") ||
  href.startsWith("mailto:") ||
  href.startsWith("tel:");

const CustomLink = ({
  href,
  children,
  className,
  variant = "primary",
  ...props
}: CustomLinkProps) => {
  if (isExternalLink(href)) {
    return (
      <a
        {...props}
        href={href}
        target={props.target ?? "_blank"}
        rel={props.rel ?? "noopener noreferrer"}
        className={cn(anchorLinkVariants({ variant, className }))}
      >
        {children}
      </a>
    );
  }
  return (
    <a
      {...props}
      href={href}
      className={cn(anchorLinkVariants({ variant, className }))}
    >
      {children}
    </a>
  );
};

export { CustomLink };
