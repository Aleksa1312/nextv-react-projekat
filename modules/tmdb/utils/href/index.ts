export function getTvHref(id: number | undefined) {
  if (!id) return "/";

  return `details/tv/${id}`;
}

export function getMovieHref(id: number | undefined) {
  if (!id) return "/";

  return `details/movie/${id}`;
}
