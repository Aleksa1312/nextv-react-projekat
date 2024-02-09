import { CommandItem } from "@/modules/ui/search-command";
import LoadingImage from "@/modules/ui/loading-image";
import Link from "next/link";

type SearchItemProps = {
  href: string;
  image: string;
  closeSearch: () => void;
  date: string | undefined;
  name: string | undefined;
};

export default function SearchItem({
  href,
  image,
  closeSearch,
  date,
  name,
}: SearchItemProps) {
  if (!image) return;

  return (
    <Link href={href} onClick={closeSearch}>
      <CommandItem className="cursor-pointer">
        <div className="flex flex-row gap-2">
          <LoadingImage
            src={image || ""}
            width={40}
            height={40}
            alt="poster"
            className="aspect-square h-12 w-12 rounded-[var(--radius)] object-cover"
          />
          <div className="flex flex-col">
            <p className="font-semibold">{name}</p>
            <p className="text-sm text-muted-foreground">{date}</p>
          </div>
        </div>
      </CommandItem>
    </Link>
  );
}
