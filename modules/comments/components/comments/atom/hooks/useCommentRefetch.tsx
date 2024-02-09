"use client";

import { useSetAtom } from "jotai";
import { refetchAtom } from "..";

export default function useCommentRefetch() {
  const setRefetch = useSetAtom(refetchAtom);

  function refetch() {
    setRefetch((prev) => !prev);
  }

  return { refetch };
}
