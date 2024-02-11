import { Genre } from "moviedb-promise";

export function getGenresString(genres: Genre[]): string {
  let string = "";

  genres.forEach((genre) => {
    string = `${string},${genre.id}`;
  });

  return string;
}
