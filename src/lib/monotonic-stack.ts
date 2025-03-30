import { Stack } from "@/lib/stack"

export class MonotonicStack<T, throwError extends boolean = true> extends Stack<T, throwError> {
  private defaultComparator: (top: T, item: T) => boolean

  constructor(config: { comparator: (top: T, item: T) => boolean }) {
    super()
    this.defaultComparator = config.comparator
  }

  push(
    item: T,
    config?: {
      shouldPop?: (top: T, item: T) => boolean
      onPop?: (poppedValue: T) => void
      beforePush?: (stack: MonotonicStack<T, throwError>) => void
      afterPush?: (item: T) => void
    }
  ): void {
    while (this.isNotEmpty() && (config?.shouldPop ?? this.defaultComparator)(super.top()!, item)) {
      const top = super.pop()!
      config?.onPop?.(top)
    }

    config?.beforePush?.(this)
    super.push(item)
    config?.afterPush?.(item)
  }
}
