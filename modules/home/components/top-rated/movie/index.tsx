import BannerSlider from "@/modules/show-movie/components/banner-slider";
import { MovieResult } from "moviedb-promise";

type TopRatedMoviesProps = {
  results: MovieResult[];
};

export default function TopRatedMovies({ results }: TopRatedMoviesProps) {
  return (
    <section className="bg-gradient-to-b from-background via-blue-500/5 to-background sm:my-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 px-5 py-5 sm:py-10">
        <h1 className="text-2xl font-bold md:text-3xl">Top Rated Movies</h1>
        <BannerSlider results={results} />
      </div>
    </section>
  );
}
