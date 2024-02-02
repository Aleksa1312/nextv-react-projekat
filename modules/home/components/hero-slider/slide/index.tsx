import { getOriginalImage } from "@/modules/tmdb/utils/image";
import { buttonVariants } from "@/modules/ui/button";
import { CarouselItem } from "@/modules/ui/carousel";
import Image from "next/image";
import Link from "next/link";

export type HeroSlideProps = {
  title: string | undefined;
  image: string | undefined;
  href: string | undefined;
};

export default function HeroSlide({ title, image, href }: HeroSlideProps) {
  if (!title || !image || !href) return;

  return (
    <CarouselItem className="relative h-full max-h-[600px] w-full pl-0">
      <Image
        src={getOriginalImage(image)}
        width={1920}
        height={1080}
        alt="show image"
        className="h-fit w-full object-contain object-bottom brightness-75"
      />
      <div className="sm: absolute bottom-0 left-0 max-w-xl p-5 text-white sm:p-10 sm:pb-16">
        <h1 className="text-xl font-bold sm:text-3xl lg:text-4xl">{title}</h1>
        <Link
          href={href}
          className={buttonVariants({
            variant: "default",
            className: "mt-5 bg-white !text-black hover:bg-white",
          })}
        >
          Details
        </Link>
      </div>
    </CarouselItem>
  );
}
