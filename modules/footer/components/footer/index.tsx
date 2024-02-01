import Logo from "@/modules/header/components/logo";

export default function Footer() {
  return (
    <footer className="relative w-full border-t bg-background py-10">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 px-5 sm:grid-cols-2 xl:grid-cols-4">
        <div>
          <Logo />
          <p className="px-4 text-sm text-muted-foreground">
            NEXTV is an online platform to discover new movies and TV shows and
            keep track of what you have already watched.
          </p>
        </div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </footer>
  );
}
