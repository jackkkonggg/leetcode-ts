export class Prime {
  static sievePrimeScores(n: number): number[] {
    const eratosthenesSieve = Array(n + 1).fill(0)
    for (let i = 2; i <= n; i++) {
      if (!eratosthenesSieve[i]) {
        for (let j = i; j <= n; j += i) {
          eratosthenesSieve[j]++
        }
      }
    }
    return eratosthenesSieve
  }

  static sieveSmallestPrimeFactors(max: number): number[] {
    // smallest prime factors
    const spf = Array.from({ length: max + 1 }, (_, i) => i)
    for (let i = 2; i * i <= max; i++) {
      if (spf[i] === i) {
        for (let j = i * i; j <= max; j += i) {
          if (spf[j] === j) {
            spf[j] = i
          }
        }
      }
    }

    return spf
  }

  static isPrime(n: number): boolean {
    if (n <= 1) return false
    if (n === 2) return true
    if (n % 2 === 0) return false

    let i = 3
    while (i * i <= n) {
      if (n % i === 0) return false
      i += 2
    }
    return true
  }
}
