import { MovieResponse, ShowResponse } from "moviedb-promise";
import { tmdb } from "../../client";

export async function fetchDetailsById(
  id: string,
  media_type: "tv" | "movie",
): Promise<ShowResponse | MovieResponse | null> {
  try {
    if (media_type === "tv") return await fetchTvDetailsById(id);
    if (media_type === "movie") return await fetchMovieDetailsById(id);
  } catch (error) {
    console.log(error);
  }
  return null;
}

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
