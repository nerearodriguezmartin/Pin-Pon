/* CREAMOS LA CLASE BOOL */
class Book {
    constructor(title, genre, author, read = false, readDate = null) {
        this.title = title;
        this.genre = genre;
        this.author = author;
        this.read = read;
        this.readDate = readDate;
    }
}

/* CREAMOS LA CLASE BOOK LIST A PARTIR DE BOOK */
class Booklist {
    constructor(booklist = [], lastBook = null) {
        this.booklist = booklist;
        this.lastBook = lastBook;
    }

    


    get currentBook() {
        for (const book of this.booklist) {
            if (!book.read) {
                return book;
            }
        }
        return null;
    }


    get nextBook() {
        for (const book of this.booklist) {
            if (!book.read && book != this.currentBook) {
                return book;
            }
        }
        return null;
    }


    get readedBooks() {
        return this.booklist.filter(book => book.read).length;
    }


    get unreadedBooks() {
        return this.booklist.filter(book => !book.read).length;
    }

    // MÉTODOS

    add(...book) {
        this.booklist.push(...book);
    }


    finishCurrentBook() {
        if (this.currentBook != null) {
            this.currentBook.readDate = new Date(Date.now());
            this.lastBook = this.currentBook;
            this.currentBook.read = true;
            return this.lastBook;
        }
        return null;
    }
}