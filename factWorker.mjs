import { workerData, parentPort } from 'worker_threads'
function fact(n) {
  if (n === 1) {
    return 1
  }
  return fact(n - 1) * n
}
// сначала получаем из workerData входное значение (не может быть функцией!),
// и после окончания выполнения метода fact
// при помощи метода postMessage вызываем событие 'message'
parentPort.postMessage(fact(workerData))