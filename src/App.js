import './App.css';
import Header from './components/header/Header';
import { useState } from 'react';
import Books from './components/Books';
import AddBook from './components/header/AddBook';



function App() {
  const [books, setBooks] = useState([
    {
        id: 1,
        title: "OmanGatDamn!",
        author: "Dexter",
        year: 2015,
        genero: "Rapping",
        lenguage: "Ingles",
        descripcion: "Lorem impsuin dapsdad asdaskdadasda ñasdadñlasdad",
        image: "o",
        extended: false
    },
    {
        id: 2,
        title: "OmanGatDamn2!",
        author: "Dexter",
        year: 2016,
        genero: "Rapping",
        lenguage: "Ingles",
        descripcion: "Lorem impsuin dapsdad asdaskdadasda ñasdadñlasdad",
        image: "O",
        extended: false
    },
    {
        id: 3,
        title: "OmanGatDamn3!",
        author: "Dexter",
        year: 2017,
        genero: "Rapping",
        lenguage: "Ingles",
        descripcion: "Lorem impsuin dapsdad asdaskdadasda ñasdadñlasdad",
        image: "O",
        extended: false
    },
    {
        id: 4,
        title: "OmanGatDam3!",
        author: "Dexter",
        year: 2018,
        genero: "Rapping",
        lenguage: "Ingles",
        descripcion: "Lorem impsuin dapsdad asdaskdadasda ñasdadñlasdad",
        image: "O",
        extended: false
    },
])

//Eliminar
const deleteBook = (id) => {
  setBooks(books.filter(book => book.id !== id))
}

//Añadir
const addBook = (book) => {
  const id = Math.floor(Math.random() * 250000) + 1
  console.log(id)
  const newBook = {id, ...book }
  setBooks([...books, newBook])
  console.log("El libro", book)
  

}

  
  return (
    <div className="App">
     <Header />
     <AddBook addBook={addBook}/>
     {books.length > 0 ? <Books books={books} onDelete={deleteBook}/>
      : "No hay Libros por mostrar"}
    </div>
  );
}

export default App;
