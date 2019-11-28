import History from './base';
import VueRouter from '../index';
import { Location } from '../@types/router';
import { START } from '../route';
import { getLocation } from '../location';

export class HTML5History extends History {
  initLocation: Location;

  constructor(router: VueRouter) {
    super(router);
    // 初始的Location
    this.initLocation = getLocation();
    // h5 listen
    window.addEventListener('popstate', e => {
      const current = this.current;

      // Avoiding first `popstate` event dispatched in some browsers but first
      // history route not updated since async guard at the same time.
      const location = getLocation();
      if (this.current === START && location === this.initLocation) {
        return;
      }
      this.transitionTo(location);
    });
  }

  getCurrentLocation() {
    let path = decodeURI(window.location.pathname);
    return (path || '/') + window.location.search + window.location.hash;
  }
}
