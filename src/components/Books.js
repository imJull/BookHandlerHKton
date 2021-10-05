import React from 'react'
import Book from './Book'

const Books = ( { books, onDelete } ) => {
    return (
        <div className="books-container">
           {
               books.map((book) => <Book key={book.id} book={book} onDelete={onDelete}/>)
           }
        </div>
    )
}

export default Books
