import { buttonVariants } from "@/modules/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-7xl justify-center p-5">
      <div className="flex h-fit flex-col items-center rounded-[var(--radius)] border bg-gradient-to-t from-primary/10 to-muted p-5 text-center dark:bg-gradient-to-b dark:from-primary/30 md:p-20">
        <h1 className="mb-2 text-7xl font-black md:text-8xl">404</h1>
        <h2 className="text-3xl font-bold">This page does not exist.</h2>
        <p className="text-muted-foreground">
          If you think this is a mistake please try again later.
        </p>
        <Link
          href="/"
          className={buttonVariants({ variant: "default", className: "mt-5" })}
        >
          Back to Home
        </Link>
      </div>
    </main>
  );
}
