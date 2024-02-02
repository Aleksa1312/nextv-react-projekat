import { fetchTvTrending } from "@/modules/tmdb/actions/trending";
import HeroSlider from "../components/hero-slider";
import { fetchTvPopular } from "@/modules/tmdb/actions/popular";
import TopRated from "../components/top-rated";
import { fetchTvTopRated } from "@/modules/tmdb/actions/top-rated";

export default async function HomeTemplate() {
  const trending = await fetchTvTrending();
  const topRated = await fetchTvTopRated();

  return (
    <main className="min-h-screen overflow-x-hidden">
      <HeroSlider results={trending.splice(0, 10)} />
      <TopRated results={topRated} />
    </main>
  );
}
