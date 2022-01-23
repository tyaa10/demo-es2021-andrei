setTimeout(() => console.log('async 1'), 5000)
console.log('sync 1')
setTimeout(() => console.log('async 2'), 0)
console.log('sync 2')