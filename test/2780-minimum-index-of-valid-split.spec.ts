import { minimumIndex } from "@/2780-minimum-index-of-valid-split"

describe("2780. Minimum Index of Valid Split", () => {
  it("should return the expected result for case 1", () => {
    const result = minimumIndex([1, 2, 2, 2])
    expect(result).toBe(2)
  })

  it("should return the expected result for case 2", () => {
    const result = minimumIndex([2, 1, 3, 1, 1, 1, 7, 1, 2, 1])
    expect(result).toBe(4)
  })

  it("should return the expected result for case 3", () => {
    const result = minimumIndex([3, 3, 3, 3, 7, 2, 2])
    expect(result).toBe(-1)
  })
})
