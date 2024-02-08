const dateFormatter = Intl.DateTimeFormat("en");

export function formatStringDate(date: string) {
  return dateFormatter.format(new Date(date));
}
