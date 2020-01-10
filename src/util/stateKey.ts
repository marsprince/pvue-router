export function genStateKey (): string {
  return Date.now().toFixed(3)
}

let _key: string = genStateKey()

export function getStateKey () {
  return _key
}

export function setStateKey (key: string) {
  return (_key = key)
}
