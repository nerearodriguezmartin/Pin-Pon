/* CREAMOS LA CLASE BOOk */
class Book {
    constructor(title, genre, author, codBook) {
        this.title = title;
        this.genre = genre;
        this.author = author;
        this.read = false;
        this.readDate = null;
        this.codBook = codBook;

    }
}

/* CREAMOS LA CLASE BOOK LIST A PARTIR DE BOOK */
class Booklist {
    constructor(booklist = [], lastBook = null) {
        this.booklist = booklist;
        this.lastBook = lastBook;
    }

    

    // obtener el libro actual
    get currentBook() {
        for (const book of this.booklist) {
            if (!book.read) {
                return book;
            }
        }
        return null;
    }


    // next book
    get nextBook() {
        for (const book of this.booklist) {
            if (!book.read && book != this.currentBook) {
                return book;
            }
        }
        return null;
    }

    // numero de libros leidos
    get readedBooks() {
        return this.booklist.filter(book => book.read).length;
    }

    // numero de libros sin leer
    get unreadedBooks() {
        return this.booklist.filter(book => !book.read).length;
    }

    // total de libros
    get totalBooks(){
        return this.booklist.length;
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

    removeBook(codBook){
        let borrar = this.booklist.findIndex(book => book.codBook == codBook);
        if (borrar == -1) {
            return false;
        } else {
            this.booklist.splice(borrar, 1);
            return true;
        }
    }

    editBook(titulo, autor, genero, codBook){
        for (const book of this.booklist) {
            if(book.codBook == codBook){
                book.title = titulo;
                book.author = autor;
                book.genre = genero;
            }
        }
        return null;
    }

    returnBook(codBook){
        for (const book of this.booklist) {
            if(book.codBook == codBook){
                return book;
            }
        }
        return null;
    }


}


export {Booklist, Book};