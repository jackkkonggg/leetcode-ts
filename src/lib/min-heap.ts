export class MinHeap<T> {
  private heap: [number, T][]

  constructor() {
    this.heap = []
  }

  push(val: [number, T]): void {
    this.heap.push(val)
    this._heapifyUp()
  }

  pop(): [number, T] | undefined {
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
      if (this.heap[parentIdx][0] <= this.heap[idx][0]) break
      ;[this.heap[parentIdx], this.heap[idx]] = [this.heap[idx], this.heap[parentIdx]]
      idx = parentIdx
    }
  }

  private _heapifyDown(): void {
    let idx = 0
    while (2 * idx + 1 < this.heap.length) {
      let leftIdx = 2 * idx + 1,
        rightIdx = 2 * idx + 2
      let smallest = leftIdx
      if (rightIdx < this.heap.length && this.heap[rightIdx][0] < this.heap[leftIdx][0]) {
        smallest = rightIdx
      }
      if (this.heap[idx][0] <= this.heap[smallest][0]) break
      ;[this.heap[idx], this.heap[smallest]] = [this.heap[smallest], this.heap[idx]]
      idx = smallest
    }
  }
}
