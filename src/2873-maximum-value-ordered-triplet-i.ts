function calculateScore(nums: number[], i: number, j: number, k: number): number {
  return (nums[i] - nums[j]) * nums[k]
}

export function maximumTripletValue(nums: number[]): number {
  let maxScore = 0
  const n = nums.length
  for (let i = 0; i < n; ++i) {
    for (let j = i + 1; j < n; ++j) {
      for (let k = j + 1; k < n; ++k) {
        maxScore = Math.max(maxScore, calculateScore(nums, i, j, k))
      }
    }
  }

  return maxScore
}
