import { MovieResult, TvResult } from "moviedb-promise";
import { tmdb } from "../../client";

export async function fetchTvPopular(): Promise<TvResult[]> {
  try {
    const { results } = await tmdb.tvPopular({ language: "en-US" });

    if (!results) return [];

    return results;
  } catch (error) {
    console.log(error);
  }

  return [];
}

export async function fetchMoviePopular(): Promise<MovieResult[]> {
  try {
    const { results } = await tmdb.moviePopular({
      language: "en-US",
      region: "US",
    });

    if (!results) return [];

    return results;
  } catch (error) {
    console.log(error);
  }

  return [];
}
