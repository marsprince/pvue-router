import { Location } from "./@types/router";

export function getLocation(base?: string): Location {
  let path = decodeURI(window.location.pathname);
  if (base && path.indexOf(base) === 0) {
    path = path.slice(base.length);
  }
  return {
    path: (path || "/") + window.location.search + window.location.hash
  };
}
