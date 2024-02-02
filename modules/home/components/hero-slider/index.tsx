"use client";

import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "@/modules/ui/carousel";
import HeroSlide from "./slide";
import { TvResult } from "moviedb-promise";
import { getShowHref } from "@/modules/tmdb/utils/href";

type HeroSliderProps = {
  slides: TvResult[] | undefined;
};

export default function HeroSlider({ slides }: HeroSliderProps) {
  if (!slides) return <></>;

  return (
    <Carousel>
      <CarouselContent className="ml-0 h-full w-full">
        {slides.map((slide, id) => (
          <HeroSlide
            title={slide.name}
            image={slide.backdrop_path}
            href={getShowHref(slide.id)}
            key={id}
          />
        ))}
      </CarouselContent>
      <CarouselNext className="!pointer-events-auto absolute bottom-0 right-2 top-0 z-10 m-auto hidden translate-y-0 bg-background sm:flex" />
      <CarouselPrevious className="!pointer-events-auto absolute bottom-0 left-2 top-0 z-10 m-auto hidden translate-y-0 bg-background sm:flex" />
    </Carousel>
  );
}
