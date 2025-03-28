export class PriorityQueue<T> {
  private heap: T[]
  private comparator: (a: T, b: T) => number

  constructor(comparator: (a: T, b: T) => number) {
    this.heap = []
    this.comparator = comparator
  }

  push(val: T): void {
    this.heap.push(val)
    this._heapifyUp()
  }

  pop(): T | undefined {
    if (this.heap.length === 0) return undefined
    if (this.heap.length === 1) return this.heap.pop()
    const top = this.heap[0]
    this.heap[0] = this.heap.pop()!
    this._heapifyDown()
    return top
  }

  isEmpty(): boolean {
    return this.heap.length === 0
  }

  private _heapifyUp(): void {
    let idx = this.heap.length - 1
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2)
      if (this.comparator(this.heap[parentIdx], this.heap[idx]) <= 0) break
      ;[this.heap[parentIdx], this.heap[idx]] = [this.heap[idx], this.heap[parentIdx]]
      idx = parentIdx
    }
  }

  private _heapifyDown(): void {
    let idx = 0
    while (2 * idx + 1 < this.heap.length) {
      let leftIdx = 2 * idx + 1,
        rightIdx = 2 * idx + 2
      let largest = leftIdx
      if (rightIdx < this.heap.length && this.comparator(this.heap[rightIdx], this.heap[leftIdx]) > 0) {
        largest = rightIdx
      }
      if (this.comparator(this.heap[idx], this.heap[largest]) < 0) break
      ;[this.heap[idx], this.heap[largest]] = [this.heap[largest], this.heap[idx]]
      idx = largest
    }
  }
}
