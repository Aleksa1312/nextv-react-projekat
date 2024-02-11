export function getKeywords(s: string) {
  const keywords = s.replaceAll(" ", ",");

  return keywords;
}
