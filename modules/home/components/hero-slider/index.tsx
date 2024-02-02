"use client";

import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "@/modules/ui/carousel";
import HeroSlide from "./slide";
import { TvResult } from "moviedb-promise";
import { getTvHref } from "@/modules/tmdb/utils/href";

type HeroSliderProps = {
  results: TvResult[] | undefined;
};

export default function HeroSlider({ results }: HeroSliderProps) {
  if (!results) return <></>;

  return (
    <Carousel>
      <CarouselContent className="ml-0 h-full w-full">
        {results.map(({ name, backdrop_path, id }, idx) => (
          <HeroSlide
            name={name}
            image={backdrop_path}
            href={getTvHref(id)}
            key={idx}
          />
        ))}
      </CarouselContent>
      <CarouselNext className="!pointer-events-auto absolute bottom-0 right-2 top-0 z-10 m-auto hidden translate-y-0 bg-background sm:flex" />
      <CarouselPrevious className="!pointer-events-auto absolute bottom-0 left-2 top-0 z-10 m-auto hidden translate-y-0 bg-background sm:flex" />
    </Carousel>
  );
}
