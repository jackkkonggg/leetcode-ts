import { chunk } from "@/lib/utils"

class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val
    this.left = left === undefined ? null : left
    this.right = right === undefined ? null : right
  }

  static fromLevelOrder(arr: Array<number | null>): TreeNode | null {
    if (arr.length === 0) {
      return null
    }

    const root = new TreeNode(arr[0]!)
    const queue: TreeNode[] = [root]
    const batches = chunk(arr.slice(1), 2)
    for (const batch of batches) {
      const node = queue.shift()!
      const [left, right] = batch
      if (left !== null) {
        node.left = new TreeNode(left)
        queue.push(node.left)
      }
      if (right !== null) {
        node.right = new TreeNode(right)
        queue.push(node.right)
      }
    }

    return root
  }
}

export { TreeNode }
