
class LibraryCatalog {
    constructor() {
        this.books = [];
    }

    addBook(book) {
        this.books.push(book);
        console.log(`${book.title} by ${book.author} added to the catalog.`);
    }

    removeBook(ISBN) {
        this.books = this.books.filter(book => book.ISBN !== ISBN);
        console.log(`Book with ISBN ${ISBN} removed from the catalog.`);
    }

    searchBook(keyword) {
        return this.books.filter(book => book.title.includes(keyword) || book.author.includes(keyword) || book.genre.includes(keyword));
    }

    displayAllBooks() {
        return this.books.map(book => book.displayDetails()).join('\n');
    }
}
