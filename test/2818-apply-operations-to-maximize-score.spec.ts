import { maximumScore } from "@/2818-apply-operations-to-maximize-score"

describe("2818. Apply Operations to Maximize Score", () => {
  it("should return the expected result for case 1", () => {
    const result = maximumScore([8, 3, 9, 3, 8], 2)
    expect(result).toBe(81)
  })

  it("should return the expected result for case 2", () => {
    const result = maximumScore([19, 12, 14, 6, 10, 18], 3)
    expect(result).toBe(4788)
  })

  it("should return the expected result for case 3", () => {
    const result = maximumScore([1, 1, 2, 18, 1, 9, 3, 1], 32)
    expect(result).toBe(346264255)
  })
})
