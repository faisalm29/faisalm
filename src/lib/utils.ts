import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
// import { Movie } from "./tmdb.types";

type WithPublishedAt = {
  data: {
    publishedAt: string;
  };
};

type LatestPostWithPublishedAt = {
  publishedAt: string;
};

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

export const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString("en-US", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
};

export const getYear = (date: string) => {
  return new Date(date).getFullYear();
};

export const getCurrentDateTime = () => {
  return new Date();
};

export const sortPosts = <T extends WithPublishedAt>(posts: T[]): T[] => {
  return [...posts].sort(
    (a, b) =>
      new Date(b.data.publishedAt).valueOf() -
      new Date(a.data.publishedAt).valueOf(),
  );
};

export const sortLatestPosts = <T extends LatestPostWithPublishedAt>(
  posts: T[],
): T[] => {
  return [...posts].sort(
    (a, b) =>
      new Date(b.publishedAt).valueOf() - new Date(a.publishedAt).valueOf(),
  );
};

// export const sortMovies = (movies: Movie[]) => {
//   return [...movies].sort(
//     (a, b) =>
//       new Date(b.movie_local_data.publishedAt).valueOf() -
//       new Date(a.movie_local_data.publishedAt).valueOf(),
//   );
// };

export const convertMsToMinutes = (ms: number) => {
  const minutes = Math.floor(ms / 60_000);
  const seconds = Math.floor((ms % 60_000) / 1_000);

  return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
};

export const normalizeCategory = (category: string) => {
  if (category === "movies") return "movie reviews";
  return category;
};
