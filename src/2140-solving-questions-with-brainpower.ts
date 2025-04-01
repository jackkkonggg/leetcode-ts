export function mostPoints(questions: number[][]): number {
  const n = questions.length
  const dp = Array(n).fill(0)
  dp[n - 1] = questions[n - 1][0]

  for (let i = n - 2; i >= 0; i--) {
    const [points, brainPower] = questions[i]
    dp[i] = Math.max(dp[i + 1], i + 1 + brainPower < n ? points + dp[i + 1 + brainPower] : points)
  }

  return dp[0]
}
