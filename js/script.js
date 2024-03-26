
const week = {
  monday: 5,
  tuesday: 3,
  wednesday: 4,
  thursday: 2,
  friday: 3,
  saturday: 6,
  sunday: 4,
  getMaxTemp () {
    const num = Object.values(this)
    for (let i = 0; i < num.length; i++) {
      if (num[i] > num[0]) {
        num[0] = num[i];
      }
    }
    return num[0]
  },
  getMinTemp () {
    const num = Object.values(this)
    for (let i = 0; i < num.length; i++) {
      if (num[i] < num[0]) {
        num[0] = num[i]
      }
    }
    return num[0]
  },
  [Symbol.toPrimitive](hint) {
        switch (hint) {
          case "string":
            let day = Object.keys(week)
            let str = []
            for (i=0; i < 7; i++) {
              str.push( day[i].slice(0, 3) )
            }
            wks = str.join("-")
            return '('+ wks + ')'
          break;
          case "number":
            let temp = Object.values(week)
            let num = []
            for (i = 0; i < 7; i++) {
              num.push(temp[i])
            }
            sum = num.reduce((a,b) => a+b) / num.length
            return sum.toFixed(2)
            break;
            return "anything"
        }
    },
}
// console.log(week.getMaxTemp())
// console.log(week.getMinTemp())
// console.log(String(week))
// console.log(Number(week))

// task 2


function Library() {

  this.books = [];
  this.users = [];

  this.addBook = function(book) {
    this.books.push(book)
  };
  this.addUser = function(user) {
    this.users.push(user)
  };
  this.searchByName = function(title) {
    let bk = this.books.filter((el) => el.title.match(title));
    return bk
  };

}

function Book(title, autor, year, status, id){
  this.title = title;
  this.autor = autor;
  this.year = year;
  this.status = status;
  this.id = getRandom(15);
}

function getRandom(num) {
  return num = Math.round(Math.random()* num);
}

function User(name) {
  this.name = name;
}

const library = new Library()
library.addBook(new Book('1984', 'George Orwell', '1949', 'доступно'))
library.addBook(new Book('На Западном фронте без перемен', 'Эрих Мария Ремарк', '1929', 'выдана'))
library.addBook(new Book('Мастер и Маргарита', 'Михаил Булгаков', '1940', 'доступно'))

library.addUser(new User('Alex'))
library.addUser(new User('Artem'))
library.addUser(new User('Sergey'))


console.log(library)
console.log(library.searchByName('1984'))

// предлагаю разобрать решение этой задачи на уроке


