import React from "react";

const PageContainer = ({
  children,
  ...props
}: React.ComponentProps<"main">) => {
  return (
    <main {...props} className="flex flex-col space-y-12">
      {children}
    </main>
  );
};

export { PageContainer };
