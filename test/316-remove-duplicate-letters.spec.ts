import { removeDuplicateLetters } from "@/316-remove-duplicate-letters"

describe("316. Remove Duplicate Letters", () => {
  it("should return the expected result for case 1", () => {
    const result = removeDuplicateLetters("bcabc")
    expect(result).toBe("abc")
  })

  it("should return the expected result for case 2", () => {
    const result = removeDuplicateLetters("cbacdcbc")
    expect(result).toBe("acdb")
  })
})
