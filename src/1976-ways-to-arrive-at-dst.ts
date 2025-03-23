import { WeightedGraph } from "@/lib/weighted-graph"

export function countPaths(n: number, roads: number[][]): number {
  const weightedGraph = WeightedGraph.from(n, roads as Array<[number, number, number]>)
  const { ways } = weightedGraph.dijkstra(0)
  return ways[n - 1]
}
