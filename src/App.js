import './App.css';
import Header from './components/header/Header';
import { useState, useEffect } from 'react';
import Books from './components/Books';
import AddBook from './components/header/AddBook';
import { Container } from '@material-ui/core'



function App() {
  const [hideAddBook, sethideAddBook] = useState(true);
  const [books, setBooks] = useState([])

  //Jalar los datos
  useEffect(() => {
    const getBooks = async () => {
      const booksServer = await fetchBooks()
      setBooks(booksServer);
    }
    getBooks();
}, [])

const fetchBooks = async () => {
  const res = await fetch('http://localhost:5000/books')
  const data = await res.json()
  console.log(data)
  return data
}


//Eliminar
const deleteBook = async (id) => {
  await fetch(`http://localhost:5000/books/${id}`, {
    method: 'DELETE'
  })
  setBooks(books.filter(book => book.id !== id))
}


//Añadir
  const addBook = async (book) => {
    const res = await fetch(`http://localhost:5000/books`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(book),
    })
    const data = await res.json()
    setBooks([...books, data])
    console.log(book)
}

  
  return (
    <div className="App-main">
      <Container>
      <Header onHide={() => sethideAddBook(!hideAddBook)}/>
      {!hideAddBook && <AddBook addBook={addBook}/>}
      {books.length > 0 ? <Books books={books} onDelete={deleteBook}/>
        : "No hay Libros por mostrar"}
      </Container>
    </div>
  );
}

export default App;
