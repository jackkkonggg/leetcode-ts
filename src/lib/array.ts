export class ArrayUtils {
  // Generates a prefix max array, prefix_max[i] is the maximum of nums[0], nums[1], ..., nums[i].
  static prefixMax(nums: number[]): number[] {
    let max = Number.MIN_SAFE_INTEGER
    const arr = Array(nums.length).fill(0)
    for (let i = 0; i < nums.length; ++i) {
      max = Math.max(max, nums[i])
      arr[i] = max
    }
    return arr
  }

  // Generates a prefix min array, prefix_min[i] is the minimum of nums[0], nums[1], ..., nums[i].
  static prefixMin(nums: number[]): number[] {
    let min = Number.MAX_SAFE_INTEGER
    const arr = Array(nums.length).fill(0)
    for (let i = 0; i < nums.length; ++i) {
      min = Math.min(min, nums[i])
      arr[i] = min
    }
    return arr
  }

  // Generates a suffix max array, suffix_max[i] is the maximum of nums[i], nums[i + 1], ..., nums[n - 1].
  static suffixMax(nums: number[]): number[] {
    let max = Number.MIN_SAFE_INTEGER
    const arr = Array(nums.length).fill(0)
    for (let i = nums.length - 1; i >= 0; --i) {
      max = Math.max(max, nums[i])
      arr[i] = max
    }
    return arr
  }

  // Generates a suffix min array, suffix_min[i] is the minimum of nums[i], nums[i + 1], ..., nums[n - 1].
  static suffixMin(nums: number[]): number[] {
    let min = Number.MAX_SAFE_INTEGER
    const arr = Array(nums.length).fill(0)
    for (let i = nums.length - 1; i >= 0; --i) {
      min = Math.min(min, nums[i])
      arr[i] = min
    }
    return arr
  }
}
