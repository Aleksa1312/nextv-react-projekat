import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/modules/ui/select";
import { Label } from "@/modules/ui/label";
import useSearchState from "../../hooks/useSearchState";

export default function SelectMediaType() {
  const { mediaType, setMediaType, setGenres } = useSearchState();

  function onValueChange(e: string) {
    if (e !== "movie" && e !== "tv") return;

    setMediaType(e);
    setGenres([]);
  }

  const isMovieSelected = mediaType === "movie";

  return (
    <div className="flex flex-col gap-2">
      <Label>Search for</Label>
      <Select onValueChange={(e) => onValueChange(e)}>
        <SelectTrigger className="w-[130px]">
          <SelectValue placeholder={isMovieSelected ? "Movies" : "TV"} />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="tv">TV</SelectItem>
            <SelectItem value="movie">Movies</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}
