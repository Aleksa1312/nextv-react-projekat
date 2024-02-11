"use server";

import { Genre } from "moviedb-promise";
import { tmdb } from "../../client";

export async function getTvGenres(): Promise<Genre[]> {
  try {
    const { genres } = await tmdb.genreTvList();

    if (!genres) return [];

    return genres;
  } catch (error) {
    console.log(error);
  }

  return [];
}

export async function getMovieGenres(): Promise<Genre[]> {
  try {
    const { genres } = await tmdb.genreMovieList();

    if (!genres) return [];

    return genres;
  } catch (error) {
    console.log(error);
  }

  return [];
}
