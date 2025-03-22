import { countCompleteComponents } from "@/2685-count-complete-components"

describe("2685 - Count the Number of Complete Components", () => {
  it("should return the expected result for case 1", () => {
    const result = countCompleteComponents(6, [
      [0, 1],
      [0, 2],
      [1, 2],
      [3, 4],
    ])
    expect(result).toBe(3)
  })

  it("should return the expected result for case 2", () => {
    const result = countCompleteComponents(6, [
      [0, 1],
      [0, 2],
      [1, 2],
      [3, 4],
      [3, 5],
    ])
    expect(result).toBe(1)
  })
})
