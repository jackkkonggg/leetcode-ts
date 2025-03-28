import { Heap } from "@/lib/heap"
import { MOD } from "@/lib/utils"

export class WeightedGraph {
  private adjacencyMatrix: number[][] | undefined
  private constructor(private readonly numNodes: number, private readonly edges: Array<[number, number, number]>) {}
  static from(n: number, edges: Array<[number, number, number]>): WeightedGraph {
    return new WeightedGraph(n, edges)
  }

  private buildAdjacencyMatrix(): number[][] {
    const adjacencyMatrix: number[][] = []
    for (let i = 0; i < this.numNodes; i++) {
      adjacencyMatrix.push(new Array(this.numNodes).fill(0))
    }
    for (const edge of this.edges) {
      adjacencyMatrix[edge[0]][edge[1]] = edge[2]
      adjacencyMatrix[edge[1]][edge[0]] = edge[2]
    }
    return adjacencyMatrix
  }

  public getAdjacencyMatrix(): number[][] {
    if (!this.adjacencyMatrix) {
      this.adjacencyMatrix = this.buildAdjacencyMatrix()
    }

    return this.adjacencyMatrix
  }

  public dijkstra(source: number) {
    const adjacencyMatrix = this.getAdjacencyMatrix()
    return WeightedGraph.dijkstraFromMatrix(adjacencyMatrix, source)
  }

  static dijkstraFromMatrix(adjacencyMatrix: number[][], source: number) {
    const numNodes = adjacencyMatrix.length
    const distances: number[] = new Array(numNodes).fill(Infinity)
    const previous: (number | null)[] = new Array(numNodes).fill(null)
    const visited: boolean[] = new Array(numNodes).fill(false)
    const ways: number[] = new Array(numNodes).fill(0)
    const pq = new Heap<[number, number]>((a, b) => a[0] - b[0])

    distances[source] = 0
    ways[source] = 1
    pq.push([0, source])

    while (!pq.isEmpty()) {
      const [currentDistance, u] = pq.pop()!
      if (visited[u]) continue
      visited[u] = true

      // Explore each neighbor v of u
      for (let v = 0; v < numNodes; v++) {
        if (!visited[v] && adjacencyMatrix[u][v] !== 0) {
          // Valid edge
          const alt = currentDistance + adjacencyMatrix[u][v]
          if (alt < distances[v]) {
            distances[v] = alt
            previous[v] = u
            ways[v] = ways[u]
            pq.push([alt, v])
          } else if (alt === distances[v]) {
            ways[v] = (ways[v] + ways[u]) % MOD
          }
        }
      }
    }

    return { distances, previous, ways }
  }

  static buildOptimalPaths(distances: number[], previous: (number | null)[]): number[][] {
    const numNodes = distances.length
    const paths: number[][] = Array.from({ length: numNodes }, () => [])
    for (let i = 0; i < numNodes; i++) {
      if (distances[i] !== Infinity) {
        let path: number[] = []
        for (let at = i; at !== null; at = previous[at]!) {
          path.push(at)
        }
        path.reverse() // Reverse to get path from source to destination
        paths[i] = path
      }
    }
    return paths
  }
}
