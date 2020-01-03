export default class Location {
  public path: string;
  public params: any

  constructor(config: {
    base?: string
  } = {}) {
    const { base } = config;
    let path = decodeURI(window.location.pathname);
    if (base && path.indexOf(base) === 0) {
      path = path.slice(base.length);
    }
    this.path = (path || '/') + window.location.search + window.location.hash;
  }
}