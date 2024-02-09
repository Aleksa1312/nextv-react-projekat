"use server";

import { MovieResult, TvResult } from "moviedb-promise";
import { tmdb } from "../../client";

export async function searchTvShows(s: string): Promise<TvResult[]> {
  try {
    const { results } = await tmdb.searchTv({ query: s });

    if (!results) return [];

    return results;
  } catch (error) {
    console.log(error);
  }

  return [];
}

export async function searchMovies(s: string): Promise<MovieResult[]> {
  try {
    const { results } = await tmdb.searchMovie({ query: s });

    if (!results) return [];

    return results;
  } catch (error) {
    console.log(error);
  }

  return [];
}
