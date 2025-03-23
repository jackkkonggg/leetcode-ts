import { countPaths } from "@/1976-ways-to-arrive-at-dst"

describe("1976 - Number of Ways to Arrive at Destination", () => {
  it("should return the expected result for case 1", () => {
    const result = countPaths(7, [
      [0, 6, 7],
      [0, 1, 2],
      [1, 2, 3],
      [1, 3, 3],
      [6, 3, 3],
      [3, 5, 1],
      [6, 5, 1],
      [2, 5, 1],
      [0, 4, 5],
      [4, 6, 2],
    ])
    expect(result).toBe(4)
  })

  it("should return the expected result for case 2", () => {
    const result = countPaths(2, [[1, 0, 10]])
    expect(result).toBe(1)
  })
})
