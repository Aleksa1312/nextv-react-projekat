import { Button, ButtonProps } from "@/modules/ui/button";
import useSearchState from "../../hooks/useSearchState";
import { discoverAll } from "@/modules/tmdb/actions/discover";

interface SubmitButtonProps extends ButtonProps {}

export default function SubmitButton({ ...rest }: SubmitButtonProps) {
  const { genres, mediaType, setResults, setTotalPages, setPage } =
    useSearchState();

  async function onSubmit() {
    console.table([
      ["from", "submit"],
      ["mediaType", mediaType],
    ]);
    const { results, total_pages } = await discoverAll(mediaType, genres, 1);

    if (!results || !total_pages) {
      setResults([]);
      setTotalPages(0);
      return;
    }

    setResults(results);
    setTotalPages(total_pages);
    setPage(1);
  }

  return (
    <Button onClick={onSubmit} {...rest}>
      Search
    </Button>
  );
}
