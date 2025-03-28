import { maxPoints } from "@/2503-maximum-points-from-grid-queries"

describe("2503. Maximum Points From Grid Queries", () => {
  it("should return the expected result for case 1", () => {
    const result = maxPoints(
      [
        [1, 2, 3],
        [2, 5, 7],
        [3, 5, 1],
      ],
      [5, 6, 2]
    )
    expect(result).toStrictEqual([5, 8, 1])
  })

  it("should return the expected result for case 2", () => {
    const result = maxPoints(
      [
        [5, 2, 1],
        [1, 1, 2],
      ],
      [3]
    )
    expect(result).toStrictEqual([0])
  })
})
