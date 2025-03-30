export class Stack<T, throwError extends boolean = true> {
  private stack: T[] = []
  private throwError: boolean

  constructor(config?: { throwError?: throwError }) {
    this.throwError = config?.throwError ?? true
  }

  push(item: T): void {
    this.stack.push(item)
  }

  pop(): throwError extends true ? T : T | undefined {
    if (this.stack.length === 0 && this.throwError) {
      throw new Error("Stack is empty")
    }

    return this.stack.pop() as throwError extends true ? T : T | undefined
  }

  top(): throwError extends true ? T : T | undefined {
    if (this.stack.length === 0 && this.throwError) {
      throw new Error("Stack is empty")
    }

    return this.stack[this.stack.length - 1] as throwError extends true ? T : T | undefined
  }

  isEmpty(): boolean {
    return this.stack.length === 0
  }

  isNotEmpty(): boolean {
    return this.stack.length !== 0
  }

  getArr(): T[] {
    return this.stack
  }
}
