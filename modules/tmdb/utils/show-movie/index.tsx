import { MovieResponse, ShowResponse } from "moviedb-promise";
import { isMovieResponse } from "../type";

export function getNameTitle(
  showMovie: MovieResponse | ShowResponse | null,
): string {
  if (!showMovie) return "";

  const isMovie = isMovieResponse(showMovie);

  return (isMovie ? showMovie.title : showMovie.name) || "";
}

export function getShowMovieDate(
  showMovie: MovieResponse | ShowResponse | null,
): string {
  if (!showMovie) return "";

  const isMovie = isMovieResponse(showMovie);

  return (isMovie ? showMovie.release_date : showMovie.first_air_date) || "";
}
