export class Graph {
  private adjacencyList: number[][] | undefined
  private constructor(private numNodes: number, private edges: number[][]) {}

  static from(numNodes: number, edges: number[][]): Graph {
    return new Graph(numNodes, edges)
  }

  private buildAdjacencyList(): number[][] {
    const adjacencyList: number[][] = []
    for (let i = 0; i < this.numNodes; i++) {
      adjacencyList.push([])
    }
    for (const edge of this.edges) {
      adjacencyList[edge[0]].push(edge[1])
      adjacencyList[edge[1]].push(edge[0])
    }
    return adjacencyList
  }

  public getAdjacencyList(): number[][] {
    if (!this.adjacencyList) {
      this.adjacencyList = this.buildAdjacencyList()
    }

    return this.adjacencyList
  }

  findConnectedComponents(): number[][] {
    function dfs(node: number, visited: boolean[], adjacencyList: number[][]): number[] {
      visited[node] = true
      const component: number[] = []
      for (const neighbor of adjacencyList[node]) {
        if (!visited[neighbor]) {
          component.push(...dfs(neighbor, visited, adjacencyList))
        }
      }
      component.push(node)
      return component
    }

    const adjacencyList = this.getAdjacencyList()
    const visited = new Array(this.numNodes).fill(false)
    const connectedComponents: number[][] = []
    for (let i = 0; i < this.numNodes; i++) {
      if (!visited[i]) {
        const component = dfs(i, visited, adjacencyList)
        connectedComponents.push(component)
      }
    }
    return connectedComponents
  }
}
