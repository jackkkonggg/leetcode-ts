import { putMarbles } from "@/2551-put-marbles-in-bags"

describe("2551. Put Marbles in Bags", () => {
  it("should return the expected result for case 1", () => {
    const result = putMarbles([1, 3, 5, 1], 2)
    expect(result).toBe(4)
  })

  it("should return the expected result for case 2", () => {
    const result = putMarbles([1, 3], 2)
    expect(result).toBe(0)
  })
})
