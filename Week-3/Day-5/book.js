class Book {
    constructor(title, author, ISBN, genre, availability = true) {
        this._title = title;
        this._author = author;
        this._ISBN = ISBN;
        this._genre = genre;
        this._availability = availability;
    }

    // Getter and Setter methods for encapsulation
    get title() { 
        return this._title; 
    }
    get author() { 
        return this._author; 
    }
    get ISBN() {
         return this._ISBN; 
        }
    get genre() { 
        return this._genre; 
    }
    get availability() {
        return this._availability; 
    }

    set title(newTitle) {
        this._title = newTitle; 
    }
    set author(newAuthor) { 
        this._author = newAuthor; 
    }
    set ISBN(newISBN) { 
        this._ISBN = newISBN; 
    }
    set genre(newGenre) { 
        this._genre = newGenre; 
    }
    set availability(newAvailability) { 
        this._availability = newAvailability; 
    }

    checkOut() {
        if (this._availability) {
            this._availability = false;
            console.log(`${this._title} has been checked out.`);
        } else {
            console.log(`${this._title} is currently unavailable.`);
        }
    }

    returnBook() {
        this._availability = true;
        console.log(`${this._title} has been returned.`);
    }

    displayDetails() {
        return `Title: ${this._title}, Author: ${this._author}, ISBN: ${this._ISBN}, Genre: ${this._genre}, Available: ${this._availability}`;
    }
}
class ReferenceBook extends Book {
    constructor(title, author, ISBN, genre, availability = true, referenceOnly = true) {
        super(title, author, ISBN, genre, availability);
        this._referenceOnly = referenceOnly;
    }

    get referenceOnly() { 
        return this._referenceOnly; 
    }

    displayDetails() {
        return `${super.displayDetails()}, Reference Only: ${this._referenceOnly}`;
    }
}


