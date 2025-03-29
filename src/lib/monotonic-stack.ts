export class MonotonicStack<T> {
  private stack: T[]
  private comparator: (a: T, b: T) => boolean

  constructor(args: { comparator: (a: T, b: T) => boolean; initial?: T[] }) {
    this.comparator = args.comparator
    this.stack = args.initial ?? []
  }

  push(
    item: T,
    hooks?: {
      beforePush?: (stack: MonotonicStack<T>) => void
    }
  ): void {
    while (this.stack.length > 0 && this.comparator(this.stack[this.stack.length - 1], item)) {
      this.stack.pop()
    }
    hooks?.beforePush?.(this)
    this.stack.push(item)
  }

  pop(): T | undefined {
    return this.stack.pop()
  }

  top(): T | undefined {
    return this.stack[this.stack.length - 1]
  }

  isEmpty(): boolean {
    return this.stack.length === 0
  }

  getStack(): T[] {
    return this.stack
  }
}
