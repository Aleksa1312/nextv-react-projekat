import { fetchTvTrending } from "@/modules/tmdb/actions/trending";
import {
  fetchMovieTopRated,
  fetchTvTopRated,
} from "@/modules/tmdb/actions/top-rated";
import HeroSlider from "../components/hero-slider";
import TopRatedTv from "../components/top-rated/tv";
import TopRatedMovies from "../components/top-rated/movie";

export default async function HomeTemplate() {
  const trending = await fetchTvTrending();
  const topRatedTv = await fetchTvTopRated();
  const topRatedMovies = await fetchMovieTopRated();

  return (
    <main className="min-h-screen overflow-x-hidden">
      <HeroSlider results={trending.splice(0, 10)} />
      <TopRatedTv results={topRatedTv} />
      <TopRatedMovies results={topRatedMovies} />
    </main>
  );
}
