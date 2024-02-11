import BannerSlider from "@/modules/show-movie/components/banner-slider";
import { TvResult } from "moviedb-promise";

type TopRatedTvProps = {
  results: TvResult[];
};

export default function TopRatedTv({ results }: TopRatedTvProps) {
  return (
    <section className="mt-10 bg-gradient-to-b from-background via-red-500/5 to-background sm:my-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 px-5 py-5 sm:py-10">
        <h1 className="text-2xl font-bold md:text-3xl">Top Rated Shows</h1>
        <BannerSlider results={results} />
      </div>
    </section>
  );
}
