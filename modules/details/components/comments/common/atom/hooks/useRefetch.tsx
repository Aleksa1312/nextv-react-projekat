"use client";

import { useSetAtom } from "jotai";
import { refetchAtom } from "../refetch";

export default function useRefetch() {
  const setRefetch = useSetAtom(refetchAtom);

  function refetch() {
    setRefetch((prev) => !prev);
  }

  return { refetch };
}
