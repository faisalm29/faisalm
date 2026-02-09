import { getCollection } from "astro:content";
import type { Movie, TMDBMovieCredits, TMDBMovieDetails } from "./tmdb.types";

const TMDB_API_KEY = import.meta.env.TMDB_API_KEY;

if (!TMDB_API_KEY) {
  throw new Error("TMDB_API_KEY environment variable is not set");
}

const getMovieDetails = async (tmdbId: string): Promise<TMDBMovieDetails> => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${tmdbId}?api_key=${TMDB_API_KEY}`,
  );

  if (!res.ok)
    throw new Error(`Failed to fetch movie details for tmdbId: ${tmdbId}`);

  const data: TMDBMovieDetails = await res.json();

  return data;
};

const getMovieCredits = async (tmdbId: string): Promise<TMDBMovieCredits> => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${tmdbId}/credits?api_key=${TMDB_API_KEY}`,
  );

  if (!res.ok)
    throw new Error(`Failed to fetch movie credits for tmdbId: ${tmdbId}`);

  const data: TMDBMovieCredits = await res.json();

  return data;
};

const getLocalMovieData = async (tmdbId: string) => {
  const data = (await getCollection("movieReviewPost")).find(
    (movie) => movie.data.tmdbId === tmdbId,
  );

  if (!data)
    throw new Error(
      `Failed to get movie local movie data for tmdbId: ${tmdbId}`,
    );

  return data;
};

export const getMovieById = async (tmdbId: string): Promise<Movie> => {
  const [movieDetails, movieCredits] = await Promise.all([
    getMovieDetails(tmdbId),
    getMovieCredits(tmdbId),
  ]);
  const movieLocalData = await getLocalMovieData(tmdbId);

  return {
    movie_details: movieDetails,
    movie_credits: movieCredits,
    movie_local_data: movieLocalData,
  };
};

export const getMovies = async (tmdbIds: string[]): Promise<Movie[]> => {
  return Promise.all(tmdbIds.map((tmdbId) => getMovieById(tmdbId)));
};
