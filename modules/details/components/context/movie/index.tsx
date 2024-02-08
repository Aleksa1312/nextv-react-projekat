import { MovieResponse } from "moviedb-promise";
import { createContext } from "react";

export const MovieContext = createContext<MovieResponse | null>(null);
