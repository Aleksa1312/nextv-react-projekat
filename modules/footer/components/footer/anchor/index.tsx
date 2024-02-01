import { cn } from "@/lib/utils";
import { buttonVariants } from "@/modules/ui/button";
import { ReactNode } from "react";

type FooterAnchorProps = {
  href: string;
  children?: ReactNode;
  className?: string;
};

export default function FooterAnchor({
  href,
  children,
  className,
}: FooterAnchorProps) {
  return (
    <a
      target="_blank"
      rel="noopener"
      href={href}
      className={buttonVariants({
        variant: "link",
        className: cn("!mx-0 !h-fit w-fit !p-0 text-start", className),
      })}
    >
      {children}
    </a>
  );
}
