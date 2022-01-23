const text = 'Острое слово режет, как острая бритва. Кто-то красное солнце замазал чёрной гуашью, и белый день замазал чёрной гуашью, а чёрная ночь и без того черна. Кто-то всё не чёрное чёрной гуашью мажет, но в чёрном окне кто-то белой косынкой машет, и эта косынка издалека видна.'
let res = []
let res1 = []
let worlds = text.replace(/[^A-Za-zА-Яа-яё]/g, ' ').split(' ')

for (let i = 0; i < worlds.length; i++) {

  if (worlds[i].length >= 4) {
    res.push(worlds[i].slice(0, 4))
    res1.push(worlds[i])
  }
}
var le = []
let rre = []
let num = 0
let rr = []
let rr1 = []
let l = new Map()
for (let i = 0; i < res.length; i++) {

  for (let j = 0; j < res.length; j++) {
    if (res[i].toUpperCase() === res[j].toUpperCase() && i != j) {

      num === 0 ? (rr.push(res1[i]), rr.push(res1[j]), num = num + 1)
        : (num++, rr.push(res1[j]))
    }

  }
  rr1 = rr
  rr = []
  rr1.sort()

  num != 0 ? (rr1.push(` - ${num + 1}`), l.set(rr1[0], rr1.join(' '))) : num = 0
  num = 0

}

console.log(le = l.values())

console.log(Array.from(le).join('   '))