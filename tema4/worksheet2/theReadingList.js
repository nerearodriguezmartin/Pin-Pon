/* CREAMOS LA CLASE BOOk */
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

    get numberBooksRead()
    {
        return this.booklist.filter( (book)=> book.read).length;
    }

    get numberBooksNotReadYet()
    {
        return this.booklist.length - this.numberBooksRead;
    }

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

    borrarLibro(title){
        this.booklist.forEach((book) => {
            if(book.title == title){
                this.booklist.remove(book);
            }
        })
    }


}





window.onload = function(){
    var mybookList = new Booklist();

    document.getElementById("btnAdd").addEventListener("click", () =>{
        titulo = document.getElementById("title").value;
        autor = document.getElementById("author").value;
        genero = document.getElementById("genre").value;
        mybookList.add(new Book(titulo, autor, genero));

        //pasamos el libro a nuestra lista
        pintarListaLibros(mybookList);

        // cuando pulsamos el boton limpiamos los campos
        limpiarCampos();
});

document.querySelectorAll("ul")[0].addEventListener("click", () =>{     
    mybookList.finishCurrentBook();
    pintarListaLibros(mybookList);
}); 

}

function limpiarCampos(){
    document.getElementById("title").value = "";
    document.getElementById("author").value = "";
    document.getElementById("genre").value = "";

}

function pintarListaLibros(lista)
{
    document.getElementById("readingList").innerHTML = " ";
    lista.booklist.forEach( (libro) =>{
            let leido;

            if (!libro.read)
                leido="Not Read";
            else
            {
                const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
                leido="Read on " + libro.readDate.toLocaleDateString('en-EN', options);
            }

           //Añadir Libro en interfaz
            bookEntry = document.createElement('li');
            bookEntry.className = "list-group-item d-flex justify-content-between";
            bookEntry.id = libro.title;

            var div = document.createElement('div');
            var h = document.createElement('h6');
            var b = document.createElement('b');
            var libro = document.createTextNode(libro.title);
            b.appendChild(libro);
            h.className = "my-0";
            h.appendChild(b);
            div.appendChild(h);
            var small = document.createElement('small');
            small.className = "text-muted";
            small.contentEditable = "true";
            var autor = document.createTextNode(libro.author);
            small.appendChild(autor);
            div.appendChild(small);
            bookEntry.appendChild(div);
            var span = document.createElement('span');
            span.className = "text-muted";
            var read = document.createTextNode(leido);
            span.appendChild(read);
            bookEntry.appendChild(span);

            var cont = document.createElement('div');
            cont.style.alignSelf = "right";
            bookEntry.appendChild(cont);

            //añadir la papelera
            var papelera = document.createElement('img');
            papelera.src = "basura.png";
            papelera.id = "papelera";
            papelera.style.width = '20px';
            bookEntry.appendChild(papelera);
            cont.appendChild(papelera);


            //añadir icono editar
            var editar = document.createElement('img');
            editar.src = "editar.png";
            editar.id = "editar"
            editar.style.width = '20px';
            editar.style.alignSelf = "right";
            editar.style.marginLeft = "8px";
            cont.appendChild(editar);



            /*bookEntry = `<li class="list-group-item d-flex justify-content-between">
                            <div>
                                <h6 class="my-0">
                                    <b>${libro.title}</b>
                                </h6> 
                                <small class="text-muted" contenteditable="true">${libro.author}&nbsp;</small>
                            </div> 
                            <span class="text-muted">${leido}</span>
                        </li>`;
           


              document.getElementById("readingList").innerHTML = bookEntry;*/


            document.getElementById("readingList").appendChild(bookEntry);
           
    })

    document.getElementById("booksRead").innerHTML = lista.numberBooksRead + " of "+ lista.totalBooks;

    // borrar un libro
    document.getElementById("papelera").addEventListener("click", (e) => {
        var div = e.target.parentElement;
        var li = div.parentElement;
        li.remove();
        /*mybookList.borrarLibro(e.target);*/
    });

    //editar libro
    document.getElementById("editar").addEventListener("click", (e) => {
        var div = e.target.parentElement;
        var li = div.parentElement;
        
        

    });

}


