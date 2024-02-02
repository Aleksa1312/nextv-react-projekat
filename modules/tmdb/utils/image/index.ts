import { BackdropSize, LogoSize, ProfileSize, StillSize } from "./sizes";

const baseUrl = "https://image.tmdb.org/t/p/";

export function getOriginalImage(image: string | undefined) {
  if (!image) return;
  return `${baseUrl}/original/${image}`;
}

export function getBackdropImage(
  image: string | undefined,
  backdropSize: BackdropSize = "original",
) {
  if (!image) return;
  return `${baseUrl}/${backdropSize}/${image}`;
}

export function getLogoImage(
  image: string | undefined,
  logoSize: LogoSize = "original",
) {
  if (!image) return;
  return `${baseUrl}/${logoSize}/${image}`;
}

export function getProfileImage(
  image: string | undefined,
  profileSize: ProfileSize,
) {
  if (!image) return;
  return `${baseUrl}/${profileSize}/${image}`;
}

export function getStillImage(image: string | undefined, stillSize: StillSize) {
  if (!image) return;
  return `${baseUrl}/${image}/${stillSize}`;
}
