import { Frequency } from "@/lib/frequency"

export function minimumIndex(nums: number[]): number {
  const dominant = Frequency.findDominant(nums)
  if (dominant === null) return -1

  const domCnt = Frequency.get(nums, dominant)

  let domCntL = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === dominant) {
      domCntL++
    }

    const domCntR = domCnt - domCntL
    if (domCntL * 2 > i + 1 && domCntR * 2 > nums.length - i - 1) {
      return i
    }
  }

  return -1
}
