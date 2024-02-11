import Banner from "@/modules/show-movie/components/banner";
import { ShowMovie } from "@/modules/show-movie/types";
import { getShowMovieHref, getTvHref } from "@/modules/tmdb/utils/href";
import { getOriginalImage } from "@/modules/tmdb/utils/image";
import {
  getNameTitle,
  getShowMovieDate,
} from "@/modules/tmdb/utils/show-movie";

type SearchGridProps = {
  items: ShowMovie[];
};

export default function SearchGrid({ items = [] }: SearchGridProps) {
  return (
    <section className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-5 p-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {items.map((item, id) => (
        <Banner
          nameTitle={getNameTitle(item)}
          date={getShowMovieDate(item)}
          href={getShowMovieHref(item)}
          image={getOriginalImage(item.backdrop_path)}
          rating={item.vote_average}
          key={id}
        />
      ))}
    </section>
  );
}
