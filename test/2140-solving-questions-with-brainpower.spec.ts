import { mostPoints } from "@/2140-solving-questions-with-brainpower"

describe("2140. Solving Questions With Brainpower", () => {
  it("should return the expected result for case 1", () => {
    const result = mostPoints([
      [3, 2],
      [4, 3],
      [4, 4],
      [2, 5],
    ])
    expect(result).toBe(5)
  })

  it("should return the expected result for case 2", () => {
    const result = mostPoints([
      [1, 1],
      [2, 2],
      [3, 3],
      [4, 4],
      [5, 5],
    ])
    expect(result).toBe(7)
  })
})
