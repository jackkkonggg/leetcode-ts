// https://leetcode.com/problems/count-the-number-of-complete-components

import { Graph } from "@/lib/graph"

export function countCompleteComponents(n: number, edges: number[][]): number {
  const graph = Graph.from(n, edges)
  const adjacencyList = graph.getAdjacencyList()
  const connectedComponents = graph.findConnectedComponents()

  return connectedComponents.filter((component) => {
    const numNodes = component.length
    const numEdges = component.reduce((acc, node) => acc + adjacencyList[node].length, 0) / 2
    // A connected component is complete if and only if the number of edges in the component is equal to m * (m - 1) / 2
    // where m is the number of nodes in the component.
    return (numNodes * (numNodes - 1)) / 2 === numEdges
  }).length
}
