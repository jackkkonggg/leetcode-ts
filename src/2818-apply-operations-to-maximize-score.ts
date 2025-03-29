import { Modulo } from "@/lib/modulo"
import { MonotonicStack } from "@/lib/monotonic-stack"
import { Prime } from "@/lib/prime"

const mod = new Modulo()
const scores = Prime.sievePrimeScores(100_000)

export function maximumScore(nums: number[], k: number): number {
  const n = nums.length
  const left = Array(n).fill(-1)
  const right = Array(n).fill(n)

  const sL = new MonotonicStack<number>({
    comparator: (a, b) => scores[nums[a]] < scores[nums[b]],
  })

  for (let i = 0; i < n; i++) {
    sL.push(i, {
      beforePush: (stk) => {
        if (!stk.isEmpty()) {
          left[i] = stk.top()
        }
      },
    })
  }

  const sR = new MonotonicStack<number>({
    comparator: (a, b) => scores[nums[b]] >= scores[nums[a]],
  })

  for (let i = n - 1; i >= 0; i--) {
    sR.push(i, {
      beforePush: (stk) => {
        if (!stk.isEmpty()) {
          right[i] = stk.top()
        }
      },
    })
  }

  const indices = Array.from(Array(n), (_, i) => i)
  indices.sort((a, b) => nums[b] - nums[a])

  let result = 1
  for (let i = 0; i < n && k > 0; i++) {
    const ind = indices[i]
    const pow = Math.min((ind - left[ind]) * (right[ind] - ind), k)
    result = mod.mul(result, mod.pow(nums[ind], pow))
    k -= pow
  }

  return result
}
