import { maximumTripletValue } from "@/2874-maximum-value-ordered-triplet-ii"

describe("2874. Maximum Value of an Ordered Triplet II", () => {
  it("should return the expected result for case 1", () => {
    expect(maximumTripletValue([12, 6, 1, 2, 7])).toBe(77)
  })

  it("should return the expected result for case 2", () => {
    expect(maximumTripletValue([1, 10, 3, 4, 19])).toBe(133)
  })

  it("should return the expected result for case 3", () => {
    expect(maximumTripletValue([1, 2, 3])).toBe(0)
  })
})
