import { minOperations } from "@/3375-min-operations-array-values-k"

describe("3375. Minimum Operations to Make Array Values Equal to K", () => {
  it("should return the expected result for case 1", () => {
    const result = minOperations([5, 2, 5, 4, 5], 2)
    expect(result).toBe(2)
  })

  it("should return the expected result for case 2", () => {
    const result = minOperations([2, 1, 2], 2)
    expect(result).toBe(-1)
  })

  it("should return the expected result for case 3", () => {
    const result = minOperations([9, 7, 5, 3], 1)
    expect(result).toBe(4)
  })
})
