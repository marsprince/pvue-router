import { RouteConfig } from '../@types/router';
import { RouteRecord } from './routeRecord';
import {genStateKey, setStateKey} from './stateKey';

export function createRouteMap(routes: Array<RouteConfig>,
                               pathList: Array<string> = [],
                               pathMap = Object.create(null),
                               nameMap = Object.create(null)): {
  pathList: Array<string>,
  pathMap: any,
  nameMap: any
} {
  // add foreach
  routes.forEach(route => {
    addRouteRecord(pathList, pathMap, nameMap, route);
  });
  return {
    pathList,
    pathMap,
    nameMap,
  };
}

// true entry
export function addRouteRecord(pathList, pathMap: Object, nameMap, route: RouteConfig) {
  // new record
  const record = new RouteRecord(route);
  if (!pathMap[record.path]) {
    pathList.push(record.path);
    pathMap[record.path] = record;
  }
  if (name) {
    if (!nameMap[name]) {
      nameMap[name] = record
    }
  }
}

// push and replace state
export function pushState(url?: string, replace?: boolean) {
  if(replace) {

  } else {
    window.history.pushState({ key: setStateKey(genStateKey()) }, '', url)
  }
}