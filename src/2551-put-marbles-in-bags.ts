export function putMarbles(weights: number[], k: number): number {
  if (k === 1) {
    return 0
  }

  const n = weights.length
  const cp = weights
    .slice(0, n - 1)
    .map((w, i) => weights[i] + weights[i + 1])
    .sort((a, b) => a - b)

  // prettier-ignore
  let minScore = 0, maxScore = 0
  for (let i = 0; i < k - 1; ++i) {
    minScore += cp[i]
    maxScore += cp[cp.length - 1 - i]
  }

  return maxScore - minScore
}
