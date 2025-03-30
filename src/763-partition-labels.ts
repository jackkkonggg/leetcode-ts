export function partitionLabels(s: string): number[] {
  const lastSeen = new Map<string, number>()
  for (let i = 0; i < s.length; i++) {
    lastSeen.set(s[i], i)
  }

  const result: number[] = []
  // prettier-ignore
  let start = 0, end = 0
  for (let i = 0; i < s.length; i++) {
    end = Math.max(end, lastSeen.get(s[i])!)
    if (i === end) {
      result.push(end - start + 1)
      start = end + 1
    }
  }

  return result
}
