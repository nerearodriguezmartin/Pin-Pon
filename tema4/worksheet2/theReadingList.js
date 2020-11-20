
import {Book, Booklist} from './clasesLibros.js'

window.onload = function(){
    var mybookList = new Booklist();
    var codigo = 0;

    document.getElementById("btnAdd").addEventListener("click", () =>{
        let titulo = document.getElementById("title").value;
        let autor = document.getElementById("author").value;
        let genero = document.getElementById("genre").value;
        let codLibro = codigo;
        codigo ++;
        mybookList.add(new Book(titulo, autor, genero, codLibro));

        //pasamos el libro a nuestra lista
        pintarListaLibros(mybookList, codLibro);

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

function pintarListaLibros(lista, codLibro)
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
            let bookEntry = document.createElement('li');
            bookEntry.idLibro = codLibro;
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


            document.getElementById("readingList").appendChild(bookEntry);
           
    })

    document.getElementById("booksRead").innerHTML = lista.numberBooksRead + " of "+ lista.totalBooks;

    // borrar un libro
    document.getElementById("papelera").addEventListener("click", (e) => {
        e.stopPropagation();
        e.target.parentNode.parentNode.remove();
        var cod = e.target.parentNode.parentNode.idLibro;
        lista.removeBook(cod);
        
    });

    //editar libro
    document.getElementById("editar").addEventListener("click", (e) => {
        e.stopPropagation();
        var li = e.target.parentNode.parentNode;
        var titulo = li.getElementsByTagName('b').value;
        document.getElementById('title').value = titulo;
        var autor = li.getElementsByTagName('small').value;
        document.getElementById('author').value = autor;

        

    });

}


