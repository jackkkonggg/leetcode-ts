export class Heap<T> {
  private heap: T[]
  private comparator: (a: T, b: T) => number

  constructor(comparator: (a: T, b: T) => number) {
    this.heap = []
    this.comparator = comparator
  }

  // Inserts an element into the heap
  push(value: T): void {
    this.heap.push(value)
    this.bubbleUp()
  }

  // Removes and returns the top element of the heap
  pop(): T {
    if (this.heap.length === 0) throw new Error("Heap is empty")
    const top = this.heap[0]
    const bottom = this.heap.pop()
    if (this.heap.length > 0 && bottom !== undefined) {
      this.heap[0] = bottom
      this.bubbleDown()
    }
    return top
  }

  // Returns the top element without removing it
  peek(): T {
    if (this.heap.length === 0) throw new Error("Heap is empty")
    return this.heap[0]
  }

  // Returns the size of the heap
  size(): number {
    return this.heap.length
  }

  isEmpty(): boolean {
    return this.heap.length === 0
  }

  // Bubbles the last element up to its correct position
  private bubbleUp(): void {
    let index = this.heap.length - 1
    while (this.hasParent(index) && this.comparator(this.parent(index), this.heap[index]) > 0) {
      this.swap(this.parentIndex(index), index)
      index = this.parentIndex(index)
    }
  }

  // Bubbles the top element down to its correct position
  private bubbleDown(): void {
    let index = 0
    while (this.hasLeftChild(index)) {
      let smallerChildIndex = this.leftChildIndex(index)
      if (this.hasRightChild(index) && this.comparator(this.rightChild(index), this.leftChild(index)) < 0) {
        smallerChildIndex = this.rightChildIndex(index)
      }
      if (this.comparator(this.heap[index], this.heap[smallerChildIndex]) < 0) {
        break
      } else {
        this.swap(index, smallerChildIndex)
      }
      index = smallerChildIndex
    }
  }

  // Helper methods
  private leftChildIndex(index: number): number {
    return 2 * index + 1
  }

  private rightChildIndex(index: number): number {
    return 2 * index + 2
  }

  private parentIndex(index: number): number {
    return Math.floor((index - 1) / 2)
  }

  private hasLeftChild(index: number): boolean {
    return this.leftChildIndex(index) < this.heap.length
  }

  private hasRightChild(index: number): boolean {
    return this.rightChildIndex(index) < this.heap.length
  }

  private hasParent(index: number): boolean {
    return this.parentIndex(index) >= 0
  }

  private leftChild(index: number): T {
    return this.heap[this.leftChildIndex(index)]
  }

  private rightChild(index: number): T {
    return this.heap[this.rightChildIndex(index)]
  }

  private parent(index: number): T {
    return this.heap[this.parentIndex(index)]
  }

  private swap(indexOne: number, indexTwo: number): void {
    const temp = this.heap[indexOne]
    this.heap[indexOne] = this.heap[indexTwo]
    this.heap[indexTwo] = temp
  }
}
