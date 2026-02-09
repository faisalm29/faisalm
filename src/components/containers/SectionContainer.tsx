import React from "react";

const SectionContainer = ({
  children,
  ...props
}: React.ComponentProps<"section">) => {
  return (
    <section {...props} className="flex flex-col space-y-4">
      {children}
    </section>
  );
};

export { SectionContainer };
