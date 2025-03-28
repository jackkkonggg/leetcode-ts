import { Directions } from "@/lib/directions"
import { Heap } from "@/lib/heap"

export function maxPoints(grid: number[][], queries: number[]): number[] {
  const m = grid.length,
    n = grid[0].length
  const sortedQueries = queries.map((val, idx) => [val, idx]).sort((a, b) => a[0] - b[0])
  // query => result
  const results = Array(queries.length).fill(0)
  const visited = new Set<string>()
  const minHeap = new Heap<[number, number, number]>((a, b) => a[0] - b[0])

  minHeap.push([grid[0][0], 0, 0])
  visited.add(`0,0`)

  let points = 0
  for (const [queryVal, queryIdx] of sortedQueries) {
    while (!minHeap.isEmpty() && minHeap.peek()[0] < queryVal) {
      const [_, r, c] = minHeap.pop()
      points++

      for (let [dr, dc] of Directions.BASIC) {
        let nr = r + dr,
          nc = c + dc,
          key = `${nr},${nc}`

        if (nr >= 0 && nr < m && nc >= 0 && nc < n && !visited.has(key)) {
          visited.add(key)
          minHeap.push([grid[nr][nc], nr, nc])
        }
      }
    }
    results[queryIdx] = points
  }

  return results
}
