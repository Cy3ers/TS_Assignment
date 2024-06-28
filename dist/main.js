"use strict";
// Problem: Book Management System
//-----------------------------------------------------------------------
class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
    getDetails() {
        return `Title: ${this.title}, Author: ${this.author}, ISBN: ${this.isbn}`;
    }
}
class Library {
    constructor() {
        this.books = [];
    }
    addBook(book) {
        this.books.push(book);
    }
    findBookByISBN(isbn) {
        // Using find since ISBN's are usually unique, but can use filter if there are expected to be more than 1 result per search
        const book = this.books.find(book => book.isbn === isbn);
        return book || null;
    }
    listBooks() {
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
library.listBooks();
//-----------------------------------------------------------------------
const foundBook = library.findBookByISBN("1234567890");
if (foundBook) {
    console.log(`Book Found:\n${foundBook.getDetails()}`);
}
else {
    console.log("Book not found.");
}
//-----------------------------------------------------------------------
// Problem: Generic Stack Implementation
//-----------------------------------------------------------------------
class Stack {
    constructor() {
        this.items = [];
    }
    push(item) {
        this.items.push(item);
    }
    pop() {
        return this.items.pop();
    }
    peek() {
        return this.items[this.items.length - 1];
    }
    isEmpty() {
        return this.items.length === 0;
    }
    size() {
        return this.items.length;
    }
}
//-----------------------------------------------------------------------
const numberStack = new Stack();
numberStack.push(10);
numberStack.push(20);
numberStack.push(30);
console.log("Top item:", numberStack.peek());
console.log("Stack size:", numberStack.size());
console.log("Popped item:", numberStack.pop());
console.log("Stack size after pop:", numberStack.size());
console.log("Is stack empty?", numberStack.isEmpty());
//-----------------------------------------------------------------------
