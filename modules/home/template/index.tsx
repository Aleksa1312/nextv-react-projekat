import { fetchTvTrending } from "@/modules/tmdb/actions/trending";
import HeroSlider from "../components/hero-slider";

export default async function HomeTemplate() {
  const results = await fetchTvTrending();

  return (
    <main className="min-h-screen overflow-x-hidden">
      <HeroSlider slides={results.splice(0, 10)} />
    </main>
  );
}
