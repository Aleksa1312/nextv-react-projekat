import { MovieDb } from "moviedb-promise";

const TMDB_KEY = process.env.TMDB_KEY;

if (!TMDB_KEY)
  throw new Error(
    "TMDB_KEY is undefined. Please specify TMDB_KEY in environment variables.",
  );

export const tmdb = new MovieDb(TMDB_KEY);
