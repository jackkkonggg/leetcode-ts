import { partitionLabels } from "@/763-partition-labels"

describe("763. Partition Labels", () => {
  it("should return the expected result for case 1", () => {
    const result = partitionLabels("ababcbacadefegdehijhklij")
    expect(result).toStrictEqual([9, 7, 8])
  })

  it("should return the expected result for case 2", () => {
    const result = partitionLabels("eccbbbbdec")
    expect(result).toStrictEqual([10])
  })
})
