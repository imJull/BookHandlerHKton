import { FaRegTrashAlt } from 'react-icons/fa';

const DetailBook = ( {book, onDelete}) => {
    return (
        <div>
            <div key={book.id}>
                <img src={book.image} alt="no" />
                <div>
                   <h4>{book.title} 
                    <FaRegTrashAlt onClick={() => onDelete(book.id)}/> </h4>
                    <h5>{book.author}</h5>
                    <p>{book.year}</p> 
                </div>
                
            </div>
        </div>
    )
}

export default DetailBook
