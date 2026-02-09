import { SectionContainer } from "@/components/containers";
import { CustomLink } from "@/components/CustomLink";

const Profile = () => {
  return (
    <SectionContainer>
      <div>
        <h2>Faisal M</h2>
        <p className="text-muted-foreground">
          I'm Faisal, an ordinary person with an interest in writing and web
          development. I created this blog as a record and to implement the
          learning that I have gone through on web development. My journey in
          learning web development and what I am adding to this blog can be
          found in the{" "}
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
          section for what interests me. This blog is open source. Source code
          can be found{" "}
          <CustomLink
            variant="secondary"
            href="https://github.com/faisalm29/faisalm"
          >
            here
          </CustomLink>
          .
        </p>
      </div>
    </SectionContainer>
  );
};

export { Profile };
