/**
 * The Cat
 * 
 * Create a virtual cat
 * Write a class that represents a cat. It should have properties for 
 * tiredness, hunger, lonliness and happiness
 * 
 * Next, write methods that increase and decrease those properties. 
 * 
 * Call them something that actually represents what would increase or decrease these things,
 * like "feed", "sleep", or "pet".
 * 
 * Last, write a method that prints out the cat's status in each area. 
 * (Be creative e.g. Paws is really hungry, Paws is VERY happy.)
 * 
 * Bonus: Make the functions take arguments that increase or decrease arbitrary amounts
 * Bonus: Make the functions as arbitrary as cats are - 
 * sometimes make it so the cat doesn't want to be petted.
 */



/**
 * The Reading List
 * 
 * Crate an object-oriented book-list!
 * Write a class BookList
 * then create another class called Book
 * 
 * BookLists should have the following properties:
 * Number of books marked as read
 * Number of books marked not read yet
 * A reference to the next book to read (book object)
 * A reference to the current book being read (book object)
 * A reference to the last book read (book object)
 * An array of all the Books
 * 
 * Each Book should have several properties:
 * Title
 * Genre
 * Author
 * Read (true or false)
 * Read date, can be blank, otherwise needs to be a JS Date() object
 * 
 * Every Booklist should have a few methods:
 * .add(book) should add a book to the books list.
 * .finishCurrentBook() which should do the following:
 * should mark the book that is currently being read as "read"
 * Give it a read date of new Date(Date.now())
 * Change the last book read to be the book that just got finished
 * Change the current book to be the next book to be read
 * Change the next book to be read property to be the first unread book you find
 *  in the list of books
 * 
 * Booklists and Books might need more methods than that. 
 * Try to think of more that might be useful.
 */