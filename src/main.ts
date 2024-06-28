// Problem: Book Management System
//-----------------------------------------------------------------------
class Book {
  title: string;
  author: string;
  isbn: string;

  constructor(title: string, author: string, isbn: string) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }

  getDetails(): string {
    return `Title: ${this.title}, Author: ${this.author}, ISBN: ${this.isbn}`;
  }
}

class Library {
  books: Book[] = [];

  addBook(book: Book): void {
    this.books.push(book);
  }

  findBookByISBN(isbn: string): Book | null {
    // Using find since ISBN's are usually unique, but can use filter if there are expected to be more than 1 result per search
    const book = this.books.find(book => book.isbn === isbn);
    return book || null;
  }

  listBooks(): void {
    this.books.forEach(book => {
      console.log(book.getDetails());
    });
  }
}

//-----------------------------------------------------------------------

const library = new Library();

const book1 = new Book("1984", "George Orwell", "1234567890");
const book2 = new Book("To Kill a Mockingbird", "Harper Lee", "0987654321");
library.addBook(book1);
library.addBook(book2);

console.log(`All Books in Library:`);
library.listBooks()

//-----------------------------------------------------------------------

const foundBook = library.findBookByISBN("1234567890");
if (foundBook) {
  console.log(`Book Found:\n${foundBook.getDetails()}`);
} else {
  console.log("Book not found.");
}

//-----------------------------------------------------------------------

// Problem: Generic Stack Implementation
//-----------------------------------------------------------------------
class Stack<T> {
  private items: T[] = [];

  push(item: T): void {
    this.items.push(item);
  }

  pop(): T | undefined {
    return this.items.pop();
  }

  peek(): T | undefined {
    return this.items[this.items.length - 1];
  }

  isEmpty(): boolean {
    return this.items.length === 0;
  }

  size(): number {
    return this.items.length;
  }
}

//-----------------------------------------------------------------------

const numberStack = new Stack<number>();
numberStack.push(10);
numberStack.push(20);
numberStack.push(30);

console.log("Top item:", numberStack.peek());
console.log("Stack size:", numberStack.size());

console.log("Popped item:", numberStack.pop());
console.log("Stack size after pop:", numberStack.size());

console.log("Is stack empty?", numberStack.isEmpty());

//-----------------------------------------------------------------------
