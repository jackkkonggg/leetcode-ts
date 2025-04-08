import { minimumOperations } from "@/3396-num-operations-to-make-array-distinct"

describe("3396. Minimum Number of Operations to Make Elements in Array Distinct", () => {
  it("should return the expected result for case 1", () => {
    const result = minimumOperations([1, 2, 3, 4, 2, 3, 3, 5, 7])
    expect(result).toBe(2)
  })

  it("should return the expected result for case 2", () => {
    const result = minimumOperations([4, 5, 6, 4, 4])
    expect(result).toBe(2)
  })

  it("should return the expected result for case 3", () => {
    const result = minimumOperations([6, 7, 8, 9])
    expect(result).toBe(0)
  })
})
