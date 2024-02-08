"use client";

import { HTMLAttributes, useState } from "react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "./collapsible";
import { cn } from "@/lib/utils";

interface ExpandableTextProps extends HTMLAttributes<HTMLParagraphElement> {}

export default function ExpandableText({
  className,
  children,
  ...rest
}: ExpandableTextProps) {
  const [open, setOpen] = useState<boolean>(false);

  function toggleOpen() {
    setOpen((prev) => !prev);
  }

  return (
    <Collapsible open={open} onOpenChange={toggleOpen}>
      {!open && (
        <p
          className={cn("line-clamp-2 text-muted-foreground", className)}
          {...rest}
        >
          {children}
        </p>
      )}

      <CollapsibleContent
        className={cn("text-muted-foreground", className, "line-clamp-none")}
        {...rest}
      >
        {children}
      </CollapsibleContent>
      <CollapsibleTrigger className="font-semibold text-muted-foreground">
        {open ? "Show Less" : "Read More"}
      </CollapsibleTrigger>
    </Collapsible>
  );
}
