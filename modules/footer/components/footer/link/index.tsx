import { cn } from "@/lib/utils";
import { buttonVariants } from "@/modules/ui/button";
import Link from "next/link";
import { ReactNode } from "react";

type FooterLinkProps = {
  href: string;
  children?: ReactNode;
  className?: string;
};

export default function FooterLink({
  href,
  children,
  className,
}: FooterLinkProps) {
  return (
    <Link
      href={href}
      className={buttonVariants({
        variant: "link",
        className: cn("!mx-0 !h-fit w-fit !p-0 text-start", className),
      })}
    >
      {children}
    </Link>
  );
}
