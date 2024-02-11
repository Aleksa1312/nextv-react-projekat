import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/modules/ui/carousel";
import Banner from "../banner";
import { getTvHref } from "@/modules/tmdb/utils/href";
import { getOriginalImage } from "@/modules/tmdb/utils/image";
import { ShowMovie } from "../../types";
import {
  getNameTitle,
  getShowMovieDate,
} from "@/modules/tmdb/utils/show-movie";

type BannerSliderProps = {
  results: ShowMovie[] | undefined;
};

export default function BannerSlider({ results }: BannerSliderProps) {
  if (!results) return;

  return (
    <Carousel opts={{ dragFree: true }}>
      <CarouselContent>
        {results.map((showMovie, idx) => {
          const nameTitle = getNameTitle(showMovie);
          const date = getShowMovieDate(showMovie);

          const { poster_path, id, vote_average } = showMovie;

          if (!nameTitle || !poster_path || !id) return;

          return (
            <CarouselItem
              key={idx}
              className="basis-3/5 sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5"
            >
              <Banner
                nameTitle={nameTitle}
                href={getTvHref(id)}
                image={getOriginalImage(poster_path)}
                rating={vote_average}
                date={date}
              />
            </CarouselItem>
          );
        })}
      </CarouselContent>
      <CarouselNext />
      <CarouselPrevious />
    </Carousel>
  );
}
