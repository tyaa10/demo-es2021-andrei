const x = 45
function fib(n) {
  if (n <= 1) {
    return n
  }
  return fib(n - 1) + fib(n - 2)
}
function fact(n) {
  if (n === 1) {
    return 1
  }
  return fact(n - 1) * n
}
console.log(`fib(${x}) = ${fib(x)}`)
console.log(`fact(${x}) = ${fact(x)}`)
