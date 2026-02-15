import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import type { Movie } from "./tmdb.types";
import type { LatestPost } from "@/components/LatestPostItem";
import { getCollection } from "astro:content";
import { getMovies } from "./tmdb";

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

export const sortMovies = (movies: Movie[]) => {
  return [...movies].sort(
    (a, b) =>
      new Date(b.movie_local_data.data.publishedAt).valueOf() -
      new Date(a.movie_local_data.data.publishedAt).valueOf(),
  );
};

export const convertMsToMinutes = (ms: number) => {
  const minutes = Math.floor(ms / 60_000);
  const seconds = Math.floor((ms % 60_000) / 1_000);

  return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
};

export const normalizeCategory = (category: string) => {
  if (category === "movies") return "movie reviews";
  return category;
};

export const getLatestPosts = async (): Promise<LatestPost[]> => {
  const movieTmdbIds = (await getCollection("movieReviewPost")).map(
    (movie) => movie.data.tmdbId,
  );
  let movies: Awaited<ReturnType<typeof getMovies>> = [];

  try {
    movies = await getMovies(movieTmdbIds);
  } catch (e) {
    console.error("Failed to fetch movies from TMDB", e);
  }

  const generalPosts = (await getCollection("generalPost")).map((post) => ({
    id: post.id,
    title: post.data.title,
    category: post.data.category,
    publishedAt: post.data.publishedAt,
  }));

  const programmingPosts = (await getCollection("programmingPost")).map(
    (post) => ({
      id: post.id,
      title: post.data.title,
      category: post.data.category,
      publishedAt: post.data.publishedAt,
    }),
  );

  const movieReviewPosts = movies.map((post) => ({
    id: post.movie_local_data.id,
    title: post.movie_details.title,
    category: post.movie_local_data.data.category,
    publishedAt: post.movie_local_data.data.publishedAt,
  }));

  const LatestPost = [
    ...generalPosts,
    ...programmingPosts,
    ...movieReviewPosts,
  ];

  return LatestPost;
};
