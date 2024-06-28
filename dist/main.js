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
const book3 = new Book("Pride and Prejudice", "Jane Austen", "1234543210");
const book4 = new Book("Harry Potter", "1991", "666666666");
library.addBook(book1);
library.addBook(book2);
library.addBook(book3);
library.addBook(book4);
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
const addStudent = (students, student) => [...students, student];
const addGrade = (students, studentId, grade) => students.map(student => student.id === studentId ? Object.assign(Object.assign({}, student), { grades: [...student.grades, grade] }) : student);
const getStudentById = (students, studentId) => students.find(student => student.id === studentId) || null;
const calculateAverageGrade = (student) => student.grades.length === 0
    ? 0
    : student.grades.reduce((acc, grade) => acc + grade.score, 0) / student.grades.length;
//-----------------------------------------------------------------------
let students = [];
students = addStudent(students, { id: 1, name: 'Alice', grades: [] });
students = addStudent(students, { id: 2, name: 'Bob', grades: [] });
students = addGrade(students, 1, { subject: 'Math', score: 90 });
students = addGrade(students, 1, { subject: 'Science', score: 85 });
students = addGrade(students, 2, { subject: 'Math', score: 95 });
//-----------------------------------------------------------------------
const alice = getStudentById(students, 1);
if (alice) {
    const averageGrade = calculateAverageGrade(alice);
    console.log(`Alice's average grade is: ${averageGrade}`);
}
else {
    console.log("Student not found.");
}
//-----------------------------------------------------------------------
const createTask = (id, title, description, dueDate) => ({
    id,
    title,
    description,
    completed: false,
    dueDate,
});
const updateTask = (task, updates) => (Object.assign(Object.assign({}, task), updates));
const markAsComplete = (task) => (Object.assign(Object.assign({}, task), { completed: true }));
const getTaskSummary = (task) => ({
    id: task.id,
    title: task.title,
    completed: task.completed,
});
//-----------------------------------------------------------------------
const newTask = createTask(1, 'Complete homework', 'Finish math exercises', new Date('2024-06-30'));
console.log(newTask);
const updated = updateTask(newTask, { description: 'Finish all exercises' });
console.log(updated);
const completed = markAsComplete(updated);
console.log(completed);
const summary = getTaskSummary(completed);
console.log(summary);
