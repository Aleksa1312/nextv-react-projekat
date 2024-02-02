import { MovieResult, TvResult } from "moviedb-promise";
import { tmdb } from "../../client";

export async function fetchTvTopRated(): Promise<TvResult[]> {
  try {
    const { results } = await tmdb.tvTopRated({ language: "en-US" });

    if (!results) return [];

    return results;
  } catch (error) {
    console.log(error);
  }

  return [];
}

export async function fetchMovieTopRated(): Promise<MovieResult[]> {
  try {
    const { results } = await tmdb.movieTopRated({
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
