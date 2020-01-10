export interface LocationConfig {
  base?: string
  path?: string
}

export default class Location {
  public base: string;
  public path: string;
  public params: any;

  constructor(config: LocationConfig = {}) {
    const { base, path } = config;
    this.base = base || '/';
    this.path = path || this.getLocation();
  }

  getLocation() {
    const { base } = this;
    let path = decodeURI(window.location.pathname);
    if (base && path.indexOf(base) === 0) {
      path = path.slice(base.length);
    }
    return (path || '/') + window.location.search + window.location.hash;
  }
}

export function normalizeLocation(rawLocation: LocationConfig | string, base?: string): Location {
  if(typeof rawLocation === 'string') {
    return new Location({
      path: rawLocation,
      base
    })
  } else {
    return new Location(rawLocation)
  }
}