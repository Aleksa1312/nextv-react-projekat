"use client";

import useShowMovie from "@/modules/comments/components/context/hooks/useShowMovie";
import { isMovieResponse } from "@/modules/tmdb/utils/type";
import { Badge } from "@/modules/ui/badge";

export default function MediaTypeBadge() {
  const showMovie = useShowMovie();

  const isMovie = isMovieResponse(showMovie);

  return <Badge>{isMovie ? "Movie" : "TV"}</Badge>;
}
