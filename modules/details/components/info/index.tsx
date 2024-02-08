import { toCompact } from "@/lib/format/number";
import Rating from "./rating";

type InfoProps = {
  releaseDate: string | undefined;
  voteRating: number | undefined;
  voteCount: number | undefined;
};

export default function Info({
  releaseDate,
  voteCount,
  voteRating,
}: InfoProps) {
  return (
    <div className="flex w-fit flex-row items-center gap-5 text-sm text-muted-foreground">
      <p>{releaseDate}</p>
      <Rating rating={voteRating} />
      <p>{toCompact(voteCount)} Votes</p>
    </div>
  );
}
