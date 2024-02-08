import MovieDetailsTemplate from "@/modules/details/template/movie";
import TvDetailsTemplate from "@/modules/details/template/tv";
import {
  fetchMovieDetailsById,
  fetchTvDetailsById,
} from "@/modules/tmdb/actions/details";
import { notFound } from "next/navigation";

type DetailsProps = {
  params: {
    media_type: string;
    id: string;
  };
};

export default async function Details({ params }: DetailsProps) {
  const { media_type, id } = params;

  if ((media_type !== "tv" && media_type !== "movie") || !id) return notFound();

  if (media_type === "tv") {
    const tv = await fetchTvDetailsById(id);

    return <TvDetailsTemplate tv={tv} />;
  }

  if (media_type === "movie") {
    const movie = await fetchMovieDetailsById(id);

    return <MovieDetailsTemplate movie={movie} />;
  }

  return <></>;
}
