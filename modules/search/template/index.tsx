"use client";

import { useEffect, useState } from "react";
import SearchControls from "../components/controls";
import SearchGrid from "../components/grid";
import useSearchState from "../hooks/useSearchState";
import { discoverAll } from "@/modules/tmdb/actions/discover";
import SearchPagination from "../components/pagination";

export default function SearchTemplate() {
  const [loading, setLoading] = useState<boolean>(false);
  const { results, setResults, setTotalPages, mediaType, page } =
    useSearchState();

  useEffect(() => {
    if (results.length) return;
    console.table([
      ["from", "initial-fetch"],
      ["mediaType", mediaType],
    ]);

    async function handleInitialDiscover() {
      const { results, total_pages } = await discoverAll(mediaType);

      if (!results || !total_pages) {
        setResults([]);
        setTotalPages(0);
        return;
      }

      setResults(results);
      setTotalPages(total_pages);
    }

    setLoading(true);
    handleInitialDiscover();
    setLoading(false);
  }, [results, setResults, mediaType, setTotalPages]);

  useEffect(() => {
    console.table([
      ["from", "on-page-change"],
      ["mediaType", mediaType],
    ]);

    async function onPageChange() {
      const { results, total_pages } = await discoverAll(mediaType, [], page);

      if (!results || !total_pages) {
        setResults([]);
        setTotalPages(0);
        return;
      }

      setResults(results);
      setTotalPages(total_pages);
    }

    setLoading(true);
    onPageChange();
    setLoading(false);
  }, [page, mediaType, setResults, setTotalPages]);

  return (
    <main className="min-h-screen">
      <SearchControls />
      <SearchGrid items={results} />
      <SearchPagination />
    </main>
  );
}
