import { MovieResult, PersonResult, TvResult } from "moviedb-promise";

export function isTvResult(object: any): object is TvResult {
  return object.media_type === "tv";
}

export function isMovieResult(object: any): object is MovieResult {
  return object.media_type === "movie";
}

export function isPersonResult(object: any): object is PersonResult {
  return object.media_type === "person";
}
