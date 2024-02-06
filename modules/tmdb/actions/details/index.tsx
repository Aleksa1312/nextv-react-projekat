import { MovieResponse, ShowResponse } from "moviedb-promise";
import { tmdb } from "../../client";

export async function fetchTvDetailsById(
  id: string,
): Promise<ShowResponse | null> {
  try {
    const tv = await tmdb.tvInfo({ id: id });

    if (!tv) return null;

    return tv;
  } catch (error) {
    console.log(error);
  }

  return null;
}

export async function fetchMovieDetailsById(
  id: string,
): Promise<MovieResponse | null> {
  try {
    const movie = await tmdb.movieInfo({
      id: id,
    });

    if (!movie) return null;

    return movie;
  } catch (error) {
    console.log(error);
  }

  return null;
}
