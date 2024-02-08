import { cn } from "@/lib/utils";
import { StarIcon } from "lucide-react";
import { HTMLAttributes } from "react";

interface RatingProps extends HTMLAttributes<HTMLParagraphElement> {
  rating: number | undefined;
}

export default function Rating({
  rating = 0,
  className,
  ...rest
}: RatingProps) {
  const formattedRating = rating.toFixed(2);

  return (
    <p
      className={cn(
        "flex flex-row items-center gap-1 text-muted-foreground",
        className,
      )}
      {...rest}
    >
      <StarIcon className="h-4 w-4 text-yellow-500" />
      {formattedRating}
    </p>
  );
}
