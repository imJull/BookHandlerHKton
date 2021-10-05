import { FaRegTrashAlt } from 'react-icons/fa';
import { Avatar } from '@material-ui/core'

const DetailBook = ( {book, onDelete}) => {
    return (
        <section>
            <div className="book-container">
                <div className="book-minicard" key={book.id}>
                    <Avatar src={book.image} sx={{ width:50, height:50}} alt="noImage"/>
                    <div className="book-text">
                        <h4>{book.title}</h4>
                        <h5>{book.author} - {book.year}</h5>
                        
                    </div>
                    <div className="book-trash">
                        <FaRegTrashAlt onClick={() => onDelete(book.id)}/>
                    </div>
                    
                </div>
            </div>
            <div book-container-detail>
                

            </div>
        </section>
    )
}

export default DetailBook
