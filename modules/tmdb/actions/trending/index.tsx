import { MovieResult, PersonResult, TvResult } from "moviedb-promise";
import { tmdb } from "../../client";
import { isTvResult, isMovieResult, isPersonResult } from "../../utils/type";

export async function fetchTvTrending(): Promise<TvResult[]> {
  try {
    const { results } = await tmdb.trending({
      time_window: "day",
      media_type: "tv",
      language: "en-US",
    });

    if (!results) {
      return [];
    }

    var tvResults: TvResult[] = [];

    results.forEach((result) => {
      if (isTvResult(result)) {
        tvResults.push(result);
      }
    });

    return tvResults;
  } catch (error) {
    console.log(error);
  }

  return [];
}

export async function fetchMovieTrending(): Promise<MovieResult[]> {
  try {
    const { results } = await tmdb.trending({
      time_window: "day",
      media_type: "movie",
      language: "en-US",
    });

    if (!results) {
      return [];
    }

    var movieResults: MovieResult[] = [];

    results.forEach((result) => {
      if (isMovieResult(result)) {
        movieResults.push(result);
      }
    });

    return movieResults;
  } catch (error) {
    console.log(error);
  }

  return [];
}

export async function fetchPersonTrending(): Promise<PersonResult[]> {
  try {
    const { results } = await tmdb.trending({
      time_window: "day",
      media_type: "person",
      language: "en-US",
    });

    if (!results) {
      return [];
    }

    var personResults: PersonResult[] = [];

    results.forEach((result) => {
      if (isPersonResult(result)) {
        personResults.push(result);
      }
    });

    return personResults;
  } catch (error) {
    console.log(error);
  }

  return [];
}
