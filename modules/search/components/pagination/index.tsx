"use client";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/modules/ui/pagination";
import useSearchState from "../../hooks/useSearchState";
import PaginationPreviousItems from "./previous-items";
import PaginationNextItems from "./next-items";

export default function SearchPagination() {
  const { page, nextPage, prevPage, totalPages } = useSearchState();

  return (
    <Pagination className="p-5">
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href="#" onClick={prevPage} />
        </PaginationItem>

        <PaginationPreviousItems page={page} max={2} />

        <PaginationItem>
          <PaginationLink href="#" isActive>
            {page}
          </PaginationLink>
        </PaginationItem>

        <PaginationNextItems page={page} totalPages={totalPages} max={2} />

        <PaginationItem>
          <PaginationNext href="#" onClick={nextPage} />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
