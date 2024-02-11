export function getTvHref(id: number | undefined) {
  if (!id) return "/";

  return `/details/tv/${id}`;
}

export function getMovieHref(id: number | undefined) {
  if (!id) return "/";

  return `/details/movie/${id}`;
}

export function getShowMovieHref(
  id: number | undefined,
  media_type: "tv" | "movie",
) {
  if (media_type === "tv") return getTvHref(id);
  return getMovieHref(id);
}
