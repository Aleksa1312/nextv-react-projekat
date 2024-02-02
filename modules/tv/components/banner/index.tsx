import { StarIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type BannerProps = {
  name: string | undefined;
  rating: number | undefined;
  image: string | undefined;
  href: string | undefined;
  date: string | undefined;
};

export default function Banner({
  name,
  rating,
  href,
  image,
  date,
}: BannerProps) {
  if (!name || !image || !href) return;

  return (
    <Link href={href} className="group flex h-fit w-full max-w-xs flex-col">
      <div className="relative h-fit w-fit overflow-hidden rounded-[--radius]">
        <Image
          src={image}
          width={320}
          height={740}
          alt="banner image"
          className="brightness-75 duration-200 group-hover:scale-105 group-hover:brightness-90"
        />
        <p className="absolute bottom-0 right-0 flex flex-row gap-2 p-5 text-white">
          <StarIcon className="text-transparent" fill="yellow" />
          {rating?.toFixed(2) || 0}
        </p>
      </div>
      <h1 className="mt-2 text-xl font-bold">{name}</h1>
      <p className="text-sm text-muted-foreground">{date}</p>
    </Link>
  );
}
