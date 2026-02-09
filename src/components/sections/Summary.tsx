import React from "react";
import { CustomLink } from "@/components/CustomLink";

const Summary = ({ ...props }: React.ComponentProps<"section">) => {
  return (
    <section {...props}>
      <p className="text-muted-foreground">
        I created this blog as a record and to implement the learning that I
        have gone through on web development. My journey in learning web
        development and what I am adding to this blog can be found in the{" "}
        <CustomLink variant="secondary" href="/programming">
          programming
        </CustomLink>{" "}
        section. The rest can be found in the{" "}
        <CustomLink variant="secondary" href="/general">
          general
        </CustomLink>{" "}
        and{" "}
        <CustomLink variant="secondary" href="/movies">
          movies
        </CustomLink>{" "}
        section for what interests me.
      </p>
    </section>
  );
};

export { Summary };
