export class Modulo {
  private modulo: number
  private _phi: number

  constructor(modulo: number = 1e9 + 7) {
    this.modulo = modulo
    this._phi = modulo - 1
  }

  getPhi(): number {
    return this._phi
  }

  getInverse(a: number): number {
    return this.pow(a, this.getPhi() - 1)
  }

  add(...numbers: number[]): number {
    let result = 0
    for (let number of numbers) {
      result = (result + (number % this.modulo)) % this.modulo
    }
    if (result < 0) result += this.modulo
    return result
  }

  private _quickMul(a: number, b: number): number {
    a = ((a % this.modulo) + this.modulo) % this.modulo
    b = ((b % this.modulo) + this.modulo) % this.modulo
    if (a === 0 || b === 0) return 0
    let result = 0
    while (b) {
      while (b % 2 === 0) {
        a = (a * 2) % this.modulo
        b /= 2
      }
      if (b % 2 !== 0) {
        result = (result + a) % this.modulo
        b--
      }
    }
    return result
  }

  mul(...numbers: number[]): number {
    let result = 1
    for (let number of numbers) {
      if (number > 0 && number < 1) number = this.getInverse(Math.round(1 / number))
      result = this._quickMul(result, number)
      if (result === 0) return 0
    }
    if (result < 0) result += this.modulo
    return result
  }

  div(a: number, b: number): number {
    return this._quickMul(a, this.getInverse(b))
  }

  pow(a: number, b: number): number {
    a = ((a % this.modulo) + this.modulo) % this.modulo
    if (a === 0) return 0
    let result = 1
    while (b) {
      while (b % 2 === 0) {
        a = this._quickMul(a, a)
        b /= 2
      }
      if (b % 2 !== 0) {
        result = this._quickMul(result, a)
        b--
      }
    }
    return result
  }
}
