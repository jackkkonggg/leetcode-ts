export class Frequency {
  // An element x of an integer array arr of length m is dominant if more than half the elements of arr have a value of x.
  static findDominant(nums: number[]): number | null {
    let count = 0
    let dominant = null

    for (const num of nums) {
      if (count === 0) {
        dominant = num
      }
      count += num === dominant ? 1 : -1
    }

    return dominant
  }

  static get(nums: number[], x: number): number {
    let count = 0
    for (const num of nums) {
      if (num === x) {
        count++
      }
    }
    return count
  }
}
