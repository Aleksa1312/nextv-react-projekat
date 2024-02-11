import { MovieResult, TvResult } from "moviedb-promise";

export type ShowMovie = TvResult | MovieResult;

export type ShowMovieResults = TvResult[] | MovieResult[];
