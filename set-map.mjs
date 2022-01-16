/* // Task 1
// 1 слово из 1 символа
// 3 слова из 2 символов
// 3 слова из 3 символов
// Task 2
// список слов наибольшей длины
const text = 'Lol ok an kek o, kek ok!'
let words = text.split(' ')
const frequencyMap = new Map()
let maxLength = 0
words = words.map(word => word.replace(/[\W]+/, ''))
words.forEach(word => {
  // console.log(word)
  const currentWordLength = word.length
  if (currentWordLength > maxLength) {
    maxLength = currentWordLength
  }
  // {length, count}
  frequencyMap.set(
    currentWordLength,
    frequencyMap.has(currentWordLength)
      ? frequencyMap.get(currentWordLength) + 1
      : 1)
})
const maxLengthWords = new Set()
words.forEach(word => {
  const currentWordLength = word.length
  if (currentWordLength === maxLength) {
    maxLengthWords.add(word)
  }
})
frequencyMap.forEach(
  (countValue, lengthKey) =>
    console.log(`We have ${countValue} string of length ${lengthKey}`)
)
console.log('The longest words are: ')
maxLengthWords.forEach(word => {
  console.log(word)
})
*/

const sum = 7
const numbers = [1, 5, -11, 4, 9, 12, 44, 2, 8, 7, -6, 3, 11, 15, 0, 10, 5]
/* // v1
const numberPairs = new Map()
// проход по всем элементам
for (let i = 0; i < numbers.length; i++) {
  // остановка на каждом элементе
  const currentNumber = numbers[i]
  let secondNumber
  // вложенный проход - снова по всем элементам ...
  for (let j = 0; j < numbers.length; j++) {
    if (i != j) {
      secondNumber = numbers[j]
      // для сравнения текущего числа с текущим из вложенного цикла
      if ((currentNumber + secondNumber === sum)) {
        // проверка: содержит ли уже словарь пару,
        // в которой то число, которое сейчас должно быть записано в value,
        // уже является key
        if (numberPairs.has(secondNumber)) {
          // находим под соответствующим key значение value
          // и проверяем, равно ли оно тому числу, которое должно быть записано в key
          if (numberPairs.get(secondNumber) === currentNumber) {
            // пропускаем текущий шаг цикла
            continue
          }
        }
        // добавление новой пары чисел, дающих в сумме число sum
        // в словарь результатов
        numberPairs.set(currentNumber, secondNumber)
      }
    }
  }
}
numberPairs.forEach((value, key) => console.log(`${value} - ${key}`)) */

// v2
const numberMap = new Map()
for (let i = 0; i < numbers.length; i++) {
  // в словарь элементов "число из массива - сколько раз встречается"
  // добавляем в качестве ключей все числа массива,
  // а в качестве значений:
  // 1. если пара с таким ключем отсутствует в словаре -- 1;
  // 2. если пара с таким ключем уже есть в словаре -- прошлое значение + 1;
  numberMap.set(numbers[i], numberMap.has(numbers[i]) ? numberMap.get(numbers[i]) + 1 : 1)
}
const numberPairs = new Map()
numberMap.forEach((value, number) => {
  // 1. numberMap.get(sum - number)
  // разность суммы и текущего числа должна встречаться в частотном словаре в качестве ключа
  // 2. &&
  // при этом не должно быть повторов, то есть:
  // 2.1 number < sum - number
  // текущее число меньше второго слагаемого (то есть разности суммы и текущего числа),
  // например, 5 не меньше 2, а 2 - меньше 5, и выбираем в результат только вторую комбинацию
  // ||
  // либо
  // 2.2 (number == sum - number) && (numberMap.get(number) > 1)
  // текущее число равно второму (разность суммы и текущего числа равна текущему числу),
  // &&
  // numberMap.get(number) > 1
  // при этом текущее число должно встречаться более 1 раза,
  // например, сумма = 8, и дважды или более встречается число 4,
  // так что 4 = 8 - 4
  if (numberMap.has(numberMap.get(sum - number)) && ((number < sum - number) || ((number === sum - number) && (numberMap.get(number) > 1)))) numberPairs.set(number, sum - number)
})

numberPairs.forEach((value, key) => console.log(`${value} - ${key}`))
