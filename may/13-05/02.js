class ReadingList {
    constructor() {
        this.names = []
    }

    addBook(book) {
        this.names.push(book)
    }
}

const myList = new ReadingList()

myList.addBook('Harry Potter')


const readingList = []

function addBook(book) {
    readingList.push(book)
}

addBook('Harry Potter 2')