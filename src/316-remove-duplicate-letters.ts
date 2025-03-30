import { MonotonicStack } from "@/lib/monotonic-stack"

export function removeDuplicateLetters(s: string): string {
  const lastSeen = new Map<string, number>()

  for (let i = 0; i < s.length; i++) {
    lastSeen.set(s[i], i)
  }

  const inStack = new Set<string>()
  const stack = new MonotonicStack<string>({
    comparator: (a, b) => a > b,
  })

  for (let i = 0; i < s.length; i++) {
    const letter = s[i]
    if (inStack.has(letter)) continue

    stack.push(letter, {
      shouldPop: (top, item) => top > item && lastSeen.get(top)! > i,
      onPop: inStack.delete.bind(inStack),
      afterPush: inStack.add.bind(inStack),
    })
  }

  return stack.getArr().join("")
}
