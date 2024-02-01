import { cn } from "@/lib/utils";
import { buttonVariants } from "@/modules/ui/button";
import Link from "next/link";
import { HTMLAttributes } from "react";

interface LogoProps extends HTMLAttributes<HTMLAnchorElement> {}

export default function Logo({ className, ...rest }: LogoProps) {
  return (
    <Link
      href="/"
      className={buttonVariants({
        variant: "ghost",
        className: cn("text-xl font-bold xl:text-2xl", className),
      })}
      {...rest}
    >
      NEXTV
    </Link>
  );
}
