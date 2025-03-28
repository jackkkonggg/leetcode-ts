export class Directions {
  static BASIC = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ] as const

  static ALL = [
    [0, 1], // top
    [1, 1], // top-right
    [1, 0], // right
    [1, -1], // bottom-right
    [0, -1], // bottom
    [-1, -1], // bottom-left
    [-1, 0], // left
    [-1, 1], // top-left
  ] as const
}
