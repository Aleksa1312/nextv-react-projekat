import { MovieResponse, ShowResponse } from "moviedb-promise";
import { createContext } from "react";

export const ShowMovieContext = createContext<
  MovieResponse | ShowResponse | null
>(null);
