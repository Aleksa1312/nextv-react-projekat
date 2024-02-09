import DetailsTemplate from "@/modules/details/template";
import { fetchDetailsById } from "@/modules/tmdb/actions/details";
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

  const showMovie = await fetchDetailsById(id, media_type);

  if (!showMovie) return notFound();

  return <DetailsTemplate showMovie={showMovie} />;
}
