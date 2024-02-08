import { BackdropSize, LogoSize, ProfileSize, StillSize } from "./sizes";

const baseUrl = "https://image.tmdb.org/t/p/";

export function getOriginalImage(image: string | undefined | null): string {
  if (!image) return "";
  return `${baseUrl}/original/${image}`;
}

export function getBackdropImage(
  image: string | undefined | null,
  backdropSize: BackdropSize = "original",
): string {
  if (!image) return "";
  return `${baseUrl}/${backdropSize}/${image}`;
}

export function getLogoImage(
  image: string | undefined | null,
  logoSize: LogoSize = "original",
): string {
  if (!image) return "";
  return `${baseUrl}/${logoSize}/${image}`;
}

export function getProfileImage(
  image: string | undefined | null,
  profileSize: ProfileSize,
): string {
  if (!image) return "";
  return `${baseUrl}/${profileSize}/${image}`;
}

export function getStillImage(
  image: string | undefined | null,
  stillSize: StillSize,
): string {
  if (!image) return "";
  return `${baseUrl}/${image}/${stillSize}`;
}
