function sortAndMerge(meetings: Array<[number, number]>): Array<[number, number]> {
  return meetings
    .sort((a, b) => {
      if (a[0] === b[0]) {
        return b[1] - a[1]
      }
      return a[0] - b[0]
    })
    .reduce((acc, curr) => {
      const previous = acc[acc.length - 1]
      if (previous && curr[0] <= previous[1]) {
        acc[acc.length - 1] = [previous[0], Math.max(previous[1], curr[1])]
      } else {
        acc.push(curr)
      }
      return acc
    }, [] as Array<[number, number]>)
}

function countMissingDays(days: number, meetings: number[][]): number {
  let result = meetings[0][0] - 1 + days - meetings[meetings.length - 1][1]
  for (let i = 1; i < meetings.length; i++) {
    const gap = meetings[i][0] - meetings[i - 1][1] - 1
    if (gap > 0) {
      result += gap
    }
  }

  return result
}

export function countDays(days: number, meetings: number[][]): number {
  const sortedMeetings = sortAndMerge(meetings as Array<[number, number]>)
  const result = countMissingDays(days, sortedMeetings)
  return result
}
