import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/modules/ui/carousel";
import { MovieResult } from "moviedb-promise";
import Banner from "../banner";
import { getMovieHref, getTvHref } from "@/modules/tmdb/utils/href";
import { getOriginalImage } from "@/modules/tmdb/utils/image";

type BannerSliderProps = {
  results: MovieResult[] | undefined;
};

export default function BannerSlider({ results }: BannerSliderProps) {
  if (!results) return;

  return (
    <Carousel opts={{ dragFree: true }}>
      <CarouselContent>
        {results.map(
          ({ title, id, poster_path, vote_average, release_date }, idx) => {
            if (!title || !poster_path || !id) return;

            return (
              <CarouselItem
                key={idx}
                className="basis-3/5 sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5"
              >
                <Banner
                  title={title}
                  href={getMovieHref(id)}
                  image={getOriginalImage(poster_path)}
                  rating={vote_average}
                  date={release_date}
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
