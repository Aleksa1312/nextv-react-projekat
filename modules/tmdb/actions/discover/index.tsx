"use server";

import {
  DiscoverMovieResponse,
  DiscoverTvResponse,
  Genre,
} from "moviedb-promise";
import { tmdb } from "../../client";
import { getGenresString } from "../../utils/genre";

const defaultTvResponse: DiscoverTvResponse = {
  page: 0,
  results: [],
  total_pages: 0,
  total_results: 0,
};

const defaultMoviesResponse: DiscoverMovieResponse = {
  page: 0,
  results: [],
  total_pages: 0,
  total_results: 0,
};

export async function discoverMovies(
  genres: Genre[] = [],
  page: number = 1,
): Promise<DiscoverMovieResponse> {
  try {
    const result = await tmdb.discoverMovie({
      with_genres: getGenresString(genres),
      page,
    });

    if (!result) return defaultMoviesResponse;

    return result;
  } catch (error) {
    console.log(error);
  }

  return defaultMoviesResponse;
}

export async function discoverShows(
  genres: Genre[] = [],
  page: number = 1,
): Promise<DiscoverTvResponse> {
  try {
    const result = await tmdb.discoverTv({
      with_genres: getGenresString(genres),
      page,
    });

    if (!result) return defaultTvResponse;

    return result;
  } catch (error) {
    console.log(error);
  }

  return defaultTvResponse;
}

export async function discoverAll(
  mediaType: "tv" | "movie",
  genres: Genre[] = [],
  page: number = 1,
) {
  if (mediaType === "tv") {
    const result = await discoverShows(genres, page);

    return result;
  } else {
    const result = await discoverMovies(genres, page);

    return result;
  }
}
