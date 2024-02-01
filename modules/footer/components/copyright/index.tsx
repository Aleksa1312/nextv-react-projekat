import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

interface CopyrightProps extends HTMLAttributes<HTMLParagraphElement> {}

export default function Copyright({ className, ...rest }: CopyrightProps) {
  return (
    <p
      className={cn("z-10 text-xs text-muted-foreground", className)}
      {...rest}
    >
      NEXTV© - All Rights Reserved {String(new Date().getFullYear())}
    </p>
  );
}
