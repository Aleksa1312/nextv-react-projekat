import useSearchState from "@/modules/search/hooks/useSearchState";
import { Checkbox } from "@/modules/ui/checkbox";
import { Label } from "@/modules/ui/label";
import { CheckedState } from "@radix-ui/react-checkbox";
import { Genre } from "moviedb-promise";

type GenreCheckboxProps = {
  genre: Genre;
};

export default function GenreCheckbox({ genre }: GenreCheckboxProps) {
  const { genres, addGenre, removeGenre, isGenreIncluded } = useSearchState();

  function onCheckedChange(e: CheckedState, genre: Genre) {
    const checked = e.valueOf();

    console.log(genre);

    if (checked) addGenre(genre);
    else removeGenre(genre);
  }

  const { name, id } = genre;

  if (!name || !id) return <></>;

  return (
    <div className="flex flex-row gap-2">
      <Checkbox
        id={String(id)}
        onCheckedChange={(e) => onCheckedChange(e, genre)}
        checked={isGenreIncluded(genre)}
      />
      <Label htmlFor={String(id)}>{name}</Label>
    </div>
  );
}
