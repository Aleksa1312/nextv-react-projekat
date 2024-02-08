import { getOriginalImage } from "@/modules/tmdb/utils/image";
import LoadingImage from "@/modules/ui/loading-image";
import { MovieResponse } from "moviedb-promise";
import { notFound } from "next/navigation";
import { Separator } from "@/modules/ui/separator";
import Info from "../../components/info";
import Overview from "../../components/info/overview";
import Controls from "../../components/controls/movie";
import MovieContextProvider from "../../components/context/provider/movie";
import CommentsTemplate from "../../components/comments/movie/template";

type MovieDetailsTemplateProps = {
  movie: MovieResponse | null;
};

export default function MovieDetailsTemplate({
  movie,
}: MovieDetailsTemplateProps) {
  if (!movie) notFound();

  const {
    title,
    poster_path,
    overview,
    vote_average,
    release_date,
    vote_count,
  } = movie;

  return (
    <MovieContextProvider value={movie}>
      <main className="min-h-screen w-full">
        <section className="mx-auto flex w-full max-w-7xl flex-col p-5">
          <div className="flex flex-col gap-2 md:flex-row md:gap-5">
            <LoadingImage
              src={getOriginalImage(poster_path)}
              width={480}
              height={576}
              alt="movie poster"
              className="mx-auto w-full max-w-sm rounded-[var(--radius)] object-contain md:m-0"
            />
            <div className="mt-5 flex w-fit flex-col justify-start gap-2 md:mt-0 md:max-w-xl">
              <div>
                <h1 className="text-2xl font-semibold md:text-3xl md:font-bold">
                  {title}
                </h1>
              </div>
              <Info
                releaseDate={release_date}
                voteRating={vote_average}
                voteCount={vote_count}
              />
              <Separator />
              <Overview overview={overview} />
              <Controls />
            </div>
          </div>
        </section>
        <section className="mx-auto flex w-full max-w-7xl flex-col p-5">
          <CommentsTemplate />
        </section>
      </main>
    </MovieContextProvider>
  );
}
