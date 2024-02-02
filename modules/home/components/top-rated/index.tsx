import BannerSlider from "@/modules/tv/components/banner-slider";
import { TvResult } from "moviedb-promise";

type TopRatedProps = {
  results: TvResult[];
};

export default function TopRated({ results }: TopRatedProps) {
  return (
    <section className="mx-auto flex max-w-7xl flex-col gap-5 px-5 py-10">
      <h1 className="text-2xl font-bold md:text-3xl">Top Rated Shows</h1>
      <BannerSlider results={results} />
    </section>
  );
}
