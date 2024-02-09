"use client";

import { cn } from "@/lib/utils";
import useScreenWidth from "@/modules/common/hooks/useScreenWidth";
import { buttonVariants } from "@/modules/ui/button";
import Link from "next/link";
import { HTMLAttributes } from "react";

interface LogoProps extends HTMLAttributes<HTMLAnchorElement> {}

export default function Logo({ className, ...rest }: LogoProps) {
  const { isBreakpoint } = useScreenWidth();

  const logoText = !isBreakpoint("md") ? "NEXTV" : "N";

  return (
    <Link
      href="/"
      className={buttonVariants({
        variant: "ghost",
        className: cn("text-xl font-bold md:flex xl:text-2xl", className),
      })}
      {...rest}
    >
      {logoText}
    </Link>
  );
}
