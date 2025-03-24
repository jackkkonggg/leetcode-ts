import { countDays } from "@/3169-count-days-without-meetings"

describe("3169 - Count Days Without Meetings", () => {
  it("should return the expected result for case 1", () => {
    const result = countDays(10, [
      [5, 7],
      [1, 3],
      [9, 10],
    ])
    expect(result).toBe(2)
  })

  it("should return the expected result for case 2", () => {
    const result = countDays(5, [
      [2, 4],
      [1, 3],
    ])
    expect(result).toBe(1)
  })

  it("should return the expected result for case 3", () => {
    const result = countDays(6, [[1, 6]])
    expect(result).toBe(0)
  })
})
