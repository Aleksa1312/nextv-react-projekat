"use client";

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandList,
} from "@/modules/ui/search-command";
import { ChangeEvent, useCallback, useEffect, useRef, useState } from "react";
import { MovieResult, TvResult } from "moviedb-promise";
import { searchMovies, searchTvShows } from "@/modules/tmdb/actions/search";
import { Input } from "@/modules/ui/input";
import { getMovieHref, getTvHref } from "@/modules/tmdb/utils/href";
import { getBackdropImage } from "@/modules/tmdb/utils/image";
import SearchItem from "./item";
import { Skeleton } from "@/modules/ui/skeleton";

export function Search() {
  const [open, setOpen] = useState<boolean>(false);
  const [hover, setHover] = useState<boolean>(false);
  const [search, setSearch] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const [showResults, setShowResults] = useState<TvResult[]>([]);
  const [movieResults, setMovieResults] = useState<MovieResult[]>([]);

  const searchTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  function onSearchChange(e: ChangeEvent<HTMLInputElement>) {
    setSearch(e.target.value);
  }

  function onMouseEnter() {
    setHover(true);
  }

  function onMouseLeave() {
    setHover(false);
  }

  const openSearch = useCallback(() => {
    setOpen(true);
  }, []);

  const closeSearch = useCallback(() => {
    setOpen(false);
  }, []);

  useEffect(() => {
    function handleCloseSearch() {
      if (!hover) setOpen(false);
    }

    window.addEventListener("mousedown", handleCloseSearch);

    return () => window.removeEventListener("mousedown", handleCloseSearch);
  }, [hover]);

  useEffect(() => {
    if (search === "") return;

    if (searchTimeoutRef.current) {
      clearTimeout(searchTimeoutRef.current);
    }

    searchTimeoutRef.current = setTimeout(async () => {
      setLoading(true);
      setShowResults(await searchTvShows(search));
      setMovieResults(await searchMovies(search));
      setLoading(false);
    }, 250);

    return () => {
      if (searchTimeoutRef.current) clearTimeout(searchTimeoutRef.current);
    };
  }, [search]);

  return (
    <Command className="rounded-[var(--radius)]">
      <Input
        onFocus={openSearch}
        placeholder="Search for shows or movies..."
        value={search}
        onChange={(e: ChangeEvent<HTMLInputElement>) => onSearchChange(e)}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      />
      {open && (
        <CommandList
          className="fixed left-0 right-0 top-20 mx-auto min-h-10 w-[calc(100vw-1.25rem)] animate-fade-down border animate-duration-75 sm:absolute sm:w-full"
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          {loading && <Skeleton className="h-full w-full" />}
          {showResults.length ? (
            <CommandGroup heading="Shows">
              {showResults
                .slice(0, 5)
                .map(({ name, first_air_date, poster_path, id }, idx) => (
                  <SearchItem
                    name={name}
                    date={first_air_date}
                    image={getBackdropImage(poster_path, "w300")}
                    closeSearch={closeSearch}
                    href={getTvHref(id)}
                    key={idx}
                  />
                ))}
            </CommandGroup>
          ) : null}
          {movieResults.length ? (
            <CommandGroup heading="Movies">
              {movieResults
                .slice(0, 5)
                .map(({ title, release_date, poster_path, id }, idx) => (
                  <SearchItem
                    name={title}
                    date={release_date}
                    image={getBackdropImage(poster_path, "w300")}
                    closeSearch={closeSearch}
                    href={getMovieHref(id)}
                    key={idx}
                  />
                ))}
            </CommandGroup>
          ) : null}
        </CommandList>
      )}
    </Command>
  );
}
