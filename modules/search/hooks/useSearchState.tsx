import { useAtom } from "jotai";
import {
  genresAtom,
  mediaTypeAtom,
  pageAtom,
  queryAtom,
  resultsAtom,
  totalPagesAtom,
} from "../atom";
import { Genre } from "moviedb-promise";

export default function useSearchState() {
  const [query, setQuery] = useAtom(queryAtom);
  const [mediaType, setMediaType] = useAtom(mediaTypeAtom);
  const [genres, setGenres] = useAtom(genresAtom);
  const [results, setResults] = useAtom(resultsAtom);
  const [page, setPage] = useAtom(pageAtom);
  const [totalPages, setTotalPages] = useAtom(totalPagesAtom);

  function removeGenre(genre: Genre) {
    setGenres((prev) => prev.filter((item) => item.id !== genre.id));
  }

  function addGenre(genre: Genre) {
    setGenres((prev) => [...prev, genre]);
  }

  function isGenreIncluded(genre: Genre) {
    return genres.includes(genre);
  }

  function nextPage() {
    setPage((prev) => prev + 1);
  }

  function prevPage() {
    setPage((prev) => prev - 1);
  }

  return {
    query,
    setQuery,
    mediaType,
    setMediaType,
    genres,
    setGenres,
    removeGenre,
    addGenre,
    isGenreIncluded,
    results,
    setResults,
    page,
    setPage,
    nextPage,
    prevPage,
    totalPages,
    setTotalPages,
  };
}
