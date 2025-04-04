import { TreeNode } from "@/lib/tree"

function dfs(node: TreeNode | null, depth: number): [TreeNode | null, number] {
  if (node == null) {
    return [null, depth]
  }

  const [leftLca, leftDepth] = dfs(node.left, depth + 1)
  const [rightLca, rightDepth] = dfs(node.right, depth + 1)

  if (leftDepth > rightDepth) {
    return [leftLca, leftDepth]
  } else if (rightDepth > leftDepth) {
    return [rightLca, rightDepth]
  } else {
    return [node, leftDepth]
  }
}

function lcaDeepestLeaves(root: TreeNode | null): TreeNode | null {
  const [lca] = dfs(root, 0)
  return lca
}

export { lcaDeepestLeaves }
