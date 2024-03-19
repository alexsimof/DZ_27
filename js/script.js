
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
 

const library = {
  book: {
    title: 'George Orwell',
    autor: '1984',
    year: '1949',
  },
  user: {
    name: 'Victor',
  },

  addBook (title, autor, year){

    return this.book = new Book(title, autor, year)
    
  },

  removeBook(book) {

  },


}
// 

library.addBook ('Hary Poter', 'Joanne Rowling', '1997')
console.log(library)


// library.addBook();

// const user = new User("name");

// library.removeBook(book);
// user.borrowBook("title", library);
// user.returnBook("title", library);
// book.addRating("user", 5);

//  = {title: 'Hary Poter', autor: 'Joanne Rowling', year: '1997'}
