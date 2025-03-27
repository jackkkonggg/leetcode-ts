import { minOperations } from "@/2033-min-operations-uni-value-grid"

describe("2033. Minimum Operations to Make a Uni-Value Grid", () => {
  it("should return the expected result for case 1", () => {
    const result = minOperations(
      [
        [2, 4],
        [6, 8],
      ],
      2
    )
    expect(result).toBe(4)
  })

  it("should return the expected result for case 2", () => {
    const result = minOperations(
      [
        [1, 5],
        [2, 3],
      ],
      1
    )
    expect(result).toBe(5)
  })

  it("should return the expected result for case 3", () => {
    const result = minOperations(
      [
        [1, 2],
        [3, 4],
      ],
      2
    )
    expect(result).toBe(-1)
  })
})
