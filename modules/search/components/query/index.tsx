import { Input, InputProps } from "@/modules/ui/input";
import { useAtom } from "jotai";
import { queryAtom } from "../../atom";
import { ChangeEvent } from "react";
import { Label } from "@/modules/ui/label";
import { cn } from "@/lib/utils";

interface QueryInputProps extends InputProps {}

export default function QueryInput({ className, ...rest }: QueryInputProps) {
  const [query, setQuery] = useAtom(queryAtom);

  function onQueryChange(e: ChangeEvent<HTMLInputElement>) {
    setQuery(e.target.value);
  }

  return (
    <div className={cn("flex w-full max-w-sm flex-col gap-2", className)}>
      <Label>Search</Label>
      <Input
        className={cn("w-full", className)}
        value={query}
        onChange={(e) => onQueryChange(e)}
        placeholder="Search"
        {...rest}
      />
    </div>
  );
}
