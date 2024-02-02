export function getTvHref(id: number | undefined) {
  if (!id) return "/";

  return `/tv/${id}`;
}

export function getMovieHref(id: number | undefined) {
  if (!id) return "/";

  return `/movie/${id}`;
}
