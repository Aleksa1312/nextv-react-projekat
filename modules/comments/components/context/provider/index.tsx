"use client";

import { ReactNode } from "react";
import { MovieResponse, ShowResponse } from "moviedb-promise";
import { ShowMovieContext } from "..";

export default function ShowShowMovieContextProvider({
  value,
  children,
}: {
  children: ReactNode;
  value: ShowResponse | MovieResponse;
}) {
  return (
    <ShowMovieContext.Provider value={value}>
      {children}
    </ShowMovieContext.Provider>
  );
}
