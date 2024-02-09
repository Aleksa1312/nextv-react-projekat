import {
  MovieResponse,
  MovieResult,
  PersonResult,
  ShowResponse,
  TvResult,
} from "moviedb-promise";

export function isTvResult(object: any): object is TvResult {
  return object.media_type === "tv" || object.name;
}

export function isMovieResult(object: any): object is MovieResult {
  return object.media_type === "movie" || object.title;
}

export function isPersonResult(object: any): object is PersonResult {
  return object.media_type === "person";
}

export function isShowResponse(object: any): object is ShowResponse {
  return object.media_type === "tv" || object.name;
}

export function isMovieResponse(object: any): object is MovieResponse {
  return object.media_type === "movie" || object.title;
}
