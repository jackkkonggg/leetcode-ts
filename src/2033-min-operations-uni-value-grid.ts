// https://leetcode.com/problems/minimum-operations-to-make-a-uni-value-grid
export function minOperations(grid: number[][], x: number): number {
  const values = grid.flatMap((row) => row).sort()

  for (let i = 1; i < values.length; i++) {
    const diff = values[i] - values[i - 1]
    if (diff % x !== 0) {
      return -1
    }
  }

  const median = values[Math.floor(values.length / 2)]
  let operations = 0
  for (const value of values) {
    operations += Math.abs(value - median) / x
  }

  return operations
}
