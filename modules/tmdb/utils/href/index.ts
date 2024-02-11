import { ShowMovie } from "@/modules/show-movie/types";
import { isMovieResult, isTvResult } from "../type";

export function getTvHref(id: number | undefined) {
  if (!id) return "/";

  return `/details/tv/${id}`;
}

export function getMovieHref(id: number | undefined) {
  if (!id) return "/";

  return `/details/movie/${id}`;
}

export function getShowMovieHref(item: ShowMovie) {
  if (isMovieResult(item)) return getMovieHref(item.id);
  if (isTvResult(item)) return getTvHref(item.id);

  return undefined;
}
