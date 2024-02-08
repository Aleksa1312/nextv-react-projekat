import { getOriginalImage } from "@/modules/tmdb/utils/image";
import LoadingImage from "@/modules/ui/loading-image";
import { notFound } from "next/navigation";
import { Separator } from "@/modules/ui/separator";
import Info from "../../components/info";
import Overview from "../../components/info/overview";
import Controls from "../../components/controls/tv";
import ShowContextProvider from "../../components/context/provider/tv";
import CommentsTemplate from "../../components/comments/tv/template";
import { ShowResponse } from "moviedb-promise";

type TvDetailsTemplateProps = {
  tv: ShowResponse | null;
};

export default function tvDetailsTemplate({ tv }: TvDetailsTemplateProps) {
  if (!tv) notFound();

  const {
    name,
    poster_path,
    overview,
    vote_average,
    first_air_date,
    vote_count,
  } = tv;

  return (
    <ShowContextProvider value={tv}>
      <main className="min-h-screen w-full">
        <section className="mx-auto flex w-full max-w-7xl flex-col p-5">
          <div className="flex flex-col gap-2 md:flex-row md:gap-5">
            <LoadingImage
              src={getOriginalImage(poster_path)}
              width={480}
              height={576}
              alt="tv poster"
              className="mx-auto w-full max-w-sm rounded-[var(--radius)] object-contain md:m-0"
            />
            <div className="mt-5 flex w-fit flex-col justify-start gap-2 md:mt-0 md:max-w-xl">
              <div>
                <h1 className="text-2xl font-semibold md:text-3xl md:font-bold">
                  {name}
                </h1>
              </div>
              <Info
                releaseDate={first_air_date}
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
    </ShowContextProvider>
  );
}
