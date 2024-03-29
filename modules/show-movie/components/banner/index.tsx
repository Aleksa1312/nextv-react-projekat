"use client";

import { cn } from "@/lib/utils";
import { StarIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type BannerProps = {
  nameTitle: string | undefined;
  rating: number | undefined;
  image: string | undefined;
  href: string | undefined;
  date: string | undefined;
};

export default function Banner({
  nameTitle,
  rating,
  href,
  image,
  date,
}: BannerProps) {
  const [loading, setLoading] = useState<boolean>(true);

  function onLoad() {
    setLoading(false);
  }

  if (!nameTitle || !image || !href) return;

  return (
    <Link
      href={href}
      className={cn("group flex h-fit w-full flex-col", {
        "h-0": loading,
      })}
    >
      <div className="relative h-full w-full overflow-hidden rounded-[--radius]">
        <Image
          src={image}
          width={320}
          height={740}
          alt="banner image"
          className="h-full w-full brightness-75 duration-200 group-hover:scale-105 group-hover:brightness-90"
          onLoad={onLoad}
        />
        <p className="absolute bottom-0 right-0 flex flex-row gap-2 p-5 text-white">
          <StarIcon className="text-transparent" fill="yellow" />
          {rating?.toFixed(2) || 0}
        </p>
      </div>
      <h1 className="mt-2 text-xl font-bold">{nameTitle}</h1>
      <p className="text-sm text-muted-foreground">{date}</p>
    </Link>
  );
}
