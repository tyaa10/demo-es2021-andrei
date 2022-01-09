// const names = ['Noname', 'Bill', 'John', 'Boris', 'Mary']
const people = [
  {
    name: 'John',
    age: 31
  },
  {
    name: 'Bill',
    age: 66
  },
  {
    name: 'Mary',
    age: 20
  }
]

function printPeopleAges(people) {
  people.forEach(p => {
    console.log(p.age)
  })
}

export default people