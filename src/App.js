import './App.css';
import Header from './components/header/Header';
import { useState } from 'react';
import Books from './components/Books';
import AddBook from './components/header/AddBook';



function App() {
  const [hideAddBook, sethideAddBook] = useState(true);
  const [books, setBooks] = useState([
)

//Eliminar
const deleteBook = (id) => {
  setBooks(books.filter(book => book.id !== id))
}

//Añadir
const addBook = (book) => {

  /* const id = Math.floor(Math.random() * 1000) +1
  console.log(id)

  const newBook = {id, ...book}
  setBooks([...books, newBook]) */

  

}

  
  return (
    <div className="App">
     <Header onHide={() => sethideAddBook(!hideAddBook)}/>
     {!hideAddBook && <AddBook addBook={addBook}/>}
     {books.length > 0 ? <Books books={books} onDelete={deleteBook}/>
      : "No hay Libros por mostrar"}
    </div>
  );
}

export default App;
