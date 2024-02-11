import useSearchState from "@/modules/search/hooks/useSearchState";
import {
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
} from "@/modules/ui/pagination";

export default function PaginationPreviousItems({
  page,
  max = 3,
}: {
  page: number;
  max?: number;
}) {
  const { setPage } = useSearchState();
  const looper = Array.from(Array(max));
  const requiresFirst = page - max >= 2;
  const requiresDots = page - max > 2;

  return (
    <>
      {requiresFirst && (
        <PaginationItem>
          <PaginationLink href="#" onClick={() => setPage(1)}>
            1
          </PaginationLink>
        </PaginationItem>
      )}
      {requiresDots && (
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
      )}
      {looper.map((_, id) => {
        const reversedId = looper.length - 1 - id;
        const pageNum = page - reversedId - 1;

        if (pageNum <= 0) return;

        return (
          <PaginationItem key={id}>
            <PaginationLink href="#" onClick={() => setPage(pageNum)}>
              {pageNum}
            </PaginationLink>
          </PaginationItem>
        );
      })}
    </>
  );
}
