function minOperations(nums: number[], k: number): number {
  const distinctNums = Array.from(new Set(nums)).sort((a, b) => a - b)
  for (let i = 0; i < nums.length; ++i) {
    if (distinctNums[i] < k) {
      return -1
    }
  }

  return distinctNums.length - 1 + Number(k < distinctNums[0])
}

export { minOperations }
