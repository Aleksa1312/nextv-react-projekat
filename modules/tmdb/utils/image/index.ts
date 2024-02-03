import { BackdropSize, LogoSize, ProfileSize, StillSize } from "./sizes";

const baseUrl = "https://image.tmdb.org/t/p/";

export function getOriginalImage(image: string | undefined): string {
  if (!image) return "";
  return `${baseUrl}/original/${image}`;
}

export function getBackdropImage(
  image: string | undefined,
  backdropSize: BackdropSize = "original",
): string {
  if (!image) return "";
  return `${baseUrl}/${backdropSize}/${image}`;
}

export function getLogoImage(
  image: string | undefined,
  logoSize: LogoSize = "original",
): string {
  if (!image) return "";
  return `${baseUrl}/${logoSize}/${image}`;
}

export function getProfileImage(
  image: string | undefined,
  profileSize: ProfileSize,
): string {
  if (!image) return "";
  return `${baseUrl}/${profileSize}/${image}`;
}

export function getStillImage(
  image: string | undefined,
  stillSize: StillSize,
): string {
  if (!image) return "";
  return `${baseUrl}/${image}/${stillSize}`;
}
