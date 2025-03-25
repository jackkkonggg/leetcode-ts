// https://leetcode.com/problems/check-if-grid-can-be-cut-into-sections

function sortAndMerge(orientation: "horizontal" | "vertical", rectangles: number[][]) {
  let sortedEdges: Array<[number, number]> = []
  if (orientation === "horizontal") {
    sortedEdges = rectangles
      .map<[number, number]>(([startX, startY, endX, endY]) => [startY, endY])
      .sort((a, b) => a[0] - b[0])
  } else {
    sortedEdges = rectangles
      .map<[number, number]>(([startX, startY, endX, endY]) => [startX, endX])
      .sort((a, b) => a[0] - b[0])
  }

  // Merge overlapping edges
  return sortedEdges.reduce((acc, curr) => {
    const previous = acc[acc.length - 1]
    // Current Start < Previous End
    if (previous && curr[0] < previous[1]) {
      acc[acc.length - 1] = [previous[0], Math.max(previous[1], curr[1])]
    } else {
      acc.push(curr)
    }
    return acc
  }, [] as Array<[number, number]>)
}

export function checkValidCuts(n: number, rectangles: number[][]): boolean {
  const edgesHorizontal = sortAndMerge("horizontal", rectangles)
  const edgesVertical = sortAndMerge("vertical", rectangles)
  return edgesHorizontal.length > 2 || edgesVertical.length > 2
}
