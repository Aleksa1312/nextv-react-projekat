import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/modules/ui/carousel";
import { TvResult } from "moviedb-promise";
import Banner from "../banner";
import { getTvHref } from "@/modules/tmdb/utils/href";
import { getOriginalImage } from "@/modules/tmdb/utils/image";

type BannerSliderProps = {
  results: TvResult[] | undefined;
};

export default function BannerSlider({ results }: BannerSliderProps) {
  if (!results) return;

  return (
    <Carousel opts={{ dragFree: true }}>
      <CarouselContent>
        {results.map(
          ({ name, id, first_air_date, poster_path, vote_average }, idx) => {
            if (!name || !poster_path || !id) return;

            return (
              <CarouselItem
                key={idx}
                className="basis-3/5 sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5"
              >
                <Banner
                  name={name}
                  href={getTvHref(id)}
                  image={getOriginalImage(poster_path)}
                  rating={vote_average}
                  date={first_air_date}
                />
              </CarouselItem>
            );
          },
        )}
      </CarouselContent>
      <CarouselNext />
      <CarouselPrevious />
    </Carousel>
  );
}
