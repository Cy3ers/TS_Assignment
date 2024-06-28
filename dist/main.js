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
const stringStack = new Stack();
stringStack.push("Ten");
stringStack.push("Twenty");
stringStack.push("Thirty");
console.log("Top item:", numberStack.peek());
console.log("Top item:", stringStack.peek());
console.log("Stack size:", numberStack.size());
console.log("Stack size:", stringStack.size());
console.log("Popped item:", numberStack.pop());
console.log("Popped item:", stringStack.pop());
console.log("Stack size after pop:", numberStack.size());
console.log("Stack size after pop:", stringStack.size());
console.log("Is stack empty?", numberStack.isEmpty());
console.log("Is stack empty?", stringStack.isEmpty());
//-----------------------------------------------------------------------
const addStudent = (students, student) => [...students, student];
/*
const addGrade = (students: Students, studentId: number, grade: Grade): Students =>
  students.map(student =>
      student.id === studentId ? { ...student, grades: [...student.grades, grade] } : student
  );  // TODO: If student not found, then throw error (try catch)
*/
const addGrade = (students, studentId, grade) => {
    try {
        const updatedStudents = students.map(student => student.id === studentId ? Object.assign(Object.assign({}, student), { grades: [...student.grades, grade] }) : student);
        const foundStudent = updatedStudents.find(student => student.id === studentId);
        if (!foundStudent) {
            throw new Error(`Student with ID ${studentId} not found`);
        }
        return updatedStudents;
    }
    catch (error) {
        throw error;
    }
};
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
const newTask1 = createTask(2, 'asdasd', 'Fasdwdqes', new Date('2024-06-30'));
console.log(newTask);
console.log(newTask1);
const updated = updateTask(newTask, { description: 'Finish all exercises' });
const updated1 = updateTask(newTask1, { description: 'Finish all exercises' });
console.log(updated);
console.log(updated1);
const completed = markAsComplete(updated);
const completed1 = markAsComplete(updated1);
console.log(completed);
console.log(completed1);
const summary = getTaskSummary(completed);
const summary1 = getTaskSummary(completed1);
console.log(summary);
console.log(summary1);
