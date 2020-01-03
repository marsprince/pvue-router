import History from './base';
import VueRouter from '../index';
import { START } from '../route';
import Location from '../util/location';

export class HTML5History extends History {
  initLocation: Location;

  constructor(router: VueRouter) {
    super(router);
    // 初始的Location
    this.initLocation = new Location();
    // h5 listen
    window.addEventListener('popstate', e => {
      const current = this.current;

      // Avoiding first `popstate` event dispatched in some browsers but first
      // history route not updated since async guard at the same time.
      const location = new Location();
      if (this.current === START && location === this.initLocation) {
        return;
      }
      this.transitionTo(location);
    });
  }
}
