"use client";

import { ReactNode } from "react";
import { ShowResponse } from "moviedb-promise";
import { ShowContext } from "../../tv";

export default function ShowContextProvider({
  value,
  children,
}: {
  children: ReactNode;
  value: ShowResponse;
}) {
  return <ShowContext.Provider value={value}>{children}</ShowContext.Provider>;
}
