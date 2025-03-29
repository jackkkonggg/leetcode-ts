import util from "util"

export function logInspect(object: any) {
  console.log(util.inspect(object, { showHidden: false, depth: null, colors: true }))
}

export const MOD = 1e9 + 7

export function findMax(nums: number[]): number {
  let max = nums[0]
  for (const num of nums) {
    if (num > max) {
      max = num
    }
  }
  return max
}
