import { checkValidCuts } from "@/3394-check-grid-cut-sections"

describe("3394. Check if Grid can be Cut into Sections", () => {
  it("should return the expected result for case 1", () => {
    const result = checkValidCuts(5, [
      [1, 0, 5, 2],
      [0, 2, 2, 4],
      [3, 2, 5, 3],
      [0, 4, 4, 5],
    ])
    expect(result).toBe(true)
  })

  it("should return the expected result for case 2", () => {
    const result = checkValidCuts(4, [
      [0, 0, 1, 1],
      [2, 0, 3, 4],
      [0, 2, 2, 3],
      [3, 0, 4, 3],
    ])
    expect(result).toBe(true)
  })

  it("should return the expected result for case 3", () => {
    const result = checkValidCuts(4, [
      [0, 2, 2, 4],
      [1, 0, 3, 2],
      [2, 2, 3, 4],
      [3, 0, 4, 2],
      [3, 2, 4, 4],
    ])
    expect(result).toBe(false)
  })
})
