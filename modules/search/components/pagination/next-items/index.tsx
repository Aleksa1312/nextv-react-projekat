import useSearchState from "@/modules/search/hooks/useSearchState";
import {
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
} from "@/modules/ui/pagination";

export default function PaginationNext({
  page,
  totalPages,
  max = 3,
}: {
  page: number;
  totalPages: number;
  max?: number;
}) {
  const { setPage } = useSearchState();
  const looper = Array.from(Array(max));
  const requiresLast = page + max + 1 < totalPages;

  return (
    <>
      {looper.map((_, id) => {
        const pageNum = page + id + 1;

        if (pageNum > totalPages) return;

        return (
          <PaginationItem key={id}>
            <PaginationLink href="#" onClick={() => setPage(pageNum)}>
              {pageNum}
            </PaginationLink>
          </PaginationItem>
        );
      })}
      {requiresLast && (
        <>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" onClick={() => setPage(totalPages)}>
              {totalPages}
            </PaginationLink>
          </PaginationItem>
        </>
      )}
    </>
  );
}
