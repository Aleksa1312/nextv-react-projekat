import { getOriginalImage } from "@/modules/tmdb/utils/image";
import LoadingImage from "@/modules/ui/loading-image";
import { MovieResponse, ShowResponse } from "moviedb-promise";
import { notFound } from "next/navigation";
import { Separator } from "@/modules/ui/separator";
import Info from "../components/info";
import Overview from "../components/info/overview";
import Controls from "../components/controls";
import CommentsTemplate from "@/modules/comments/template";
import ShowMovieContextProvider from "@/modules/comments/components/context/provider";
import {
  getNameTitle,
  getShowMovieDate,
} from "@/modules/tmdb/utils/show-movie";

type DetailsTemplateProps = {
  showMovie: MovieResponse | ShowResponse | null;
};

export default function DetailsTemplate({ showMovie }: DetailsTemplateProps) {
  if (!showMovie) notFound();

  const { poster_path, vote_average, vote_count, overview } = showMovie;

  return (
    <ShowMovieContextProvider value={showMovie}>
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
                  {getNameTitle(showMovie)}
                </h1>
              </div>
              <Info
                releaseDate={getShowMovieDate(showMovie)}
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
    </ShowMovieContextProvider>
  );
}
