import { cn } from "@/lib/utils";
import { buttonVariants } from "@/modules/ui/button";
import Link from "next/link";
import { HTMLAttributes } from "react";

interface HeaderLinkProps extends HTMLAttributes<HTMLAnchorElement> {
  href: string;
}

export default function HeaderLink({
  href,
  className,
  children,
  ...rest
}: HeaderLinkProps) {
  return (
    <Link
      href={href}
      className={buttonVariants({
        variant: "link",
        className: cn("", className),
      })}
      {...rest}
    >
      {children}
    </Link>
  );
}
