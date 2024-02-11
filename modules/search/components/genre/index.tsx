"use client";

import { getMovieGenres, getTvGenres } from "@/modules/tmdb/actions/genre";
import { Popover, PopoverTrigger, PopoverContent } from "@/modules/ui/popover";
import { Genre } from "moviedb-promise";
import { useEffect, useState } from "react";
import useSearchState from "../../hooks/useSearchState";
import { Button } from "@/modules/ui/button";
import { Label } from "@/modules/ui/label";
import GenreCheckbox from "./checkbox";

export default function IncludeGenres() {
  const { mediaType, genres, setGenres } = useSearchState();

  const [movieGenres, setMovieGenres] = useState<Genre[]>([]);
  const [tvGenres, setTvGenres] = useState<Genre[]>([]);

  const isMovieSelected = mediaType === "movie";

  const selectedGenres = isMovieSelected ? movieGenres : tvGenres;

  useEffect(() => {
    if (tvGenres.length && movieGenres.length) return;

    async function fetchTvGenres() {
      const tvGenres = await getTvGenres();

      setTvGenres(tvGenres);
    }

    async function fetchMovieGenres() {
      const movieGenres = await getMovieGenres();

      setMovieGenres(movieGenres);
    }

    if (mediaType === "tv" && !tvGenres.length) fetchTvGenres();
    if (mediaType === "movie" && !movieGenres.length) fetchMovieGenres();
  }, [mediaType, tvGenres, movieGenres]);

  return (
    <div className="flex flex-col gap-2">
      <Label>Included Genres</Label>
      <Popover>
        <PopoverTrigger asChild>
          <Button variant={"outline"}>
            {`Include Genres (${genres.length})`}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="flex w-fit flex-col gap-5">
          {selectedGenres.map((genre, idx) => (
            <GenreCheckbox key={idx} genre={genre} />
          ))}
        </PopoverContent>
      </Popover>
    </div>
  );
}
