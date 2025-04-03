import { ArrayUtils } from "@/lib/array"

function maximumTripletValue(nums: number[]): number {
  const prefixMaxArr = ArrayUtils.prefixMax(nums)
  const suffixMaxArr = ArrayUtils.suffixMax(nums)

  let score = 0
  for (let i = 1; i < nums.length - 1; ++i) {
    score = Math.max(score, (prefixMaxArr[i - 1] - nums[i]) * suffixMaxArr[i + 1])
  }

  return score
}

export { maximumTripletValue }
