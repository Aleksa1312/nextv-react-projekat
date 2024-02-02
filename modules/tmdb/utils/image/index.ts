import { BackdropSize, LogoSize, ProfileSize, StillSize } from "./sizes";

const baseUrl = "https://image.tmdb.org/t/p/";

export function getOriginalImage(posterId: string) {
  return `${baseUrl}/original/${posterId}`;
}

export function getBackdropImage(
  backdropId: string,
  backdropSize: BackdropSize = "original",
) {
  return `${baseUrl}/${backdropSize}/${backdropId}`;
}

export function getLogoImage(logoId: string, logoSize: LogoSize = "original") {
  return `${baseUrl}/${logoSize}/${logoId}`;
}

export function getProfileImage(profileId: string, profileSize: ProfileSize) {
  return `${baseUrl}/${profileSize}/${profileId}`;
}

export function getStillImage(stillId: string, stillSize: StillSize) {
  return `${baseUrl}/${stillId}/${stillSize}`;
}
