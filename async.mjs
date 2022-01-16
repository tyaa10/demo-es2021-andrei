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

new Promise((resolve, reject) => {
  try {
    resolve(fib(x))
  } catch (error) {
    reject(error)
  }
}).then((result) => console.log(`fib(${x}) = ${result}`))
  .catch(error => console.log(error))

new Promise((resolve, reject) => {
  try {
    resolve(fact(x))
  } catch (error) {
    reject(error)
  }
}).then((result) => console.log(`fact(${x}) = ${result}`))
.catch(error => console.log(error))