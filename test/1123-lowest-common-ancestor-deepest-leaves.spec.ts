import { lcaDeepestLeaves } from "@/1123-lowest-common-ancestor-deepest-leaves"
import { TreeNode } from "@/lib/tree"

describe("1123. Lowest Common Ancestor of Deepest Leaves", () => {
  it("should return the expected result for case 1", () => {
    const node = TreeNode.fromLevelOrder([3, 5, 1, 6, 2, 0, 8, null, null, 7, 4])!
    expect(lcaDeepestLeaves(node)).toStrictEqual(TreeNode.fromLevelOrder([2, 7, 4]))
  })

  it("should return the expected result for case 2", () => {
    const node = TreeNode.fromLevelOrder([1])!
    expect(lcaDeepestLeaves(node)).toStrictEqual(TreeNode.fromLevelOrder([1]))
  })

  it("should return the expected result for case 3", () => {
    const node = TreeNode.fromLevelOrder([0, 1, 3, null, 2])!
    expect(lcaDeepestLeaves(node)).toStrictEqual(TreeNode.fromLevelOrder([2]))
  })
})
