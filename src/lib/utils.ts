import util from "util"

export function logInspect(object: any) {
  console.log(util.inspect(object, { showHidden: false, depth: null, colors: true }))
}

export const MOD = 1e9 + 7
