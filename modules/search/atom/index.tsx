import { ShowMovie } from "@/modules/show-movie/types";
import { atom } from "jotai";
import { Genre } from "moviedb-promise";

const queryAtom = atom<string>("");
const mediaTypeAtom = atom<"tv" | "movie">("tv");
const genresAtom = atom<Genre[]>([]);

const resultsAtom = atom<ShowMovie[]>([]);
const pageAtom = atom<number>(1);
const totalPagesAtom = atom<number>(0);

export {
  queryAtom,
  mediaTypeAtom,
  genresAtom,
  resultsAtom,
  pageAtom,
  totalPagesAtom,
};
