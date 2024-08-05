document.addEventListener('DOMContentLoaded', () => {
    const libraryCatalog = new LibraryCatalog();
    const storedBooks = JSON.parse(localStorage.getItem('libraryCatalog'));
    console.log(storedBooks);
    if (storedBooks) {
        storedBooks.forEach(bookData => {
            const book = new Book(bookData._title, bookData._author, bookData._ISBN, bookData._genre, bookData._availability);
            libraryCatalog.addBook(book);
        });
        displayAllBooks();
    }
    document.getElementById('addBookForm').addEventListener('submit', (event) => {
        event.preventDefault();
        const title = event.target.title.value;
        const author = event.target.author.value;
        const ISBN = event.target.ISBN.value;
        const genre = event.target.genre.value;

        const book = new Book(title, author, ISBN, genre);
        libraryCatalog.addBook(book);
        saveToLocalStorage();
        displayAllBooks();
        event.target.reset();
    });
    document.getElementById('searchBookForm').addEventListener('submit', (event) => {
        event.preventDefault();
        const keyword = event.target.keyword.value;
        const results = libraryCatalog.searchBook(keyword);
        console.log(results);
        displaySearchResults(results);
    });
    function displayAllBooks() {
        const allBooksDiv = document.getElementById('allBooks');
        allBooksDiv.innerHTML = libraryCatalog.books.map(book => 
            `<div class="book-item">
                ${book.displayDetails()}
                <button onclick="checkOutBook('${book.ISBN}')">Check Out</button>
                <button onclick="returnBook('${book.ISBN}')">Return</button>
                <button onclick="removeBook('${book.ISBN}')">Remove</button>
            </div>`
        ).join('');
    }

    function displaySearchResults(results) {
        const searchResultsDiv = document.getElementById('searchResults');
        searchResultsDiv.innerHTML = results.map(book => 
            `<div class="book-item">
                ${book.displayDetails()}
                <button onclick="checkOutBook('${book.ISBN}')">Check Out</button>
                <button onclick="returnBook('${book.ISBN}')">Return</button>
                <button onclick="removeBook('${book.ISBN}')">Remove</button>
            </div>`
        ).join('');
    }

    function saveToLocalStorage() {
        localStorage.setItem('libraryCatalog', JSON.stringify(libraryCatalog.books));
    }

    window.checkOutBook = function(ISBN) {
        const book = libraryCatalog.books.find(book => book.ISBN === ISBN);
        if (book) {
            book.checkOut();
            saveToLocalStorage();
            displayAllBooks();
        }
    };

    window.returnBook = function(ISBN) {
        const book = libraryCatalog.books.find(book => book.ISBN === ISBN);
        if (book) {
            book.returnBook();
            saveToLocalStorage();
            displayAllBooks();
        }
    };

    window.removeBook = function(ISBN) {
        libraryCatalog.removeBook(ISBN);
        saveToLocalStorage();
        displayAllBooks();
    };
});
