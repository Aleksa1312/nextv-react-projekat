"use client";

import { ReactNode } from "react";
import { MovieResponse } from "moviedb-promise";
import { MovieContext } from "../../movie";

export default function MovieContextProvider({
  value,
  children,
}: {
  children: ReactNode;
  value: MovieResponse;
}) {
  return (
    <MovieContext.Provider value={value}>{children}</MovieContext.Provider>
  );
}
