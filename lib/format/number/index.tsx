const compactFormatter = new Intl.NumberFormat("en", { notation: "compact" });

export function toCompact(n: number = 0): string {
  return compactFormatter.format(n);
}
