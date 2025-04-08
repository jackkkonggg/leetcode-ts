function minimumOperations(nums: number[]): number {
  const n = nums.length
  // Find first index where a duplicate is found
  const set = new Set<number>()
  for (let i = n - 1; i >= 0; --i) {
    const num = nums[i]
    if (set.has(num)) {
      return Math.ceil((i + 1) / 3)
    }

    set.add(num)
  }

  return 0
}

export { minimumOperations }
