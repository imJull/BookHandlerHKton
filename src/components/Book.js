import BookHighLight from './BookHighLight';
import { FaRegTrashAlt } from 'react-icons/fa';
import { Avatar, ListItem, Divider, ListItemAvatar, ListItemText } from '@material-ui/core'

const Book = ( {book, onDelete}) => {

    const clickDetail = (id) =>{
        
    }

    return (
        <section className="book-section">
            <div className="book-container">
                <ListItem onClick={(e) => console.log(e)}className="book-item" key={book.id}>
                    <ListItemAvatar>
                        <Avatar src={book.image} sx={{ width:50, height:50}} alt="noImage"/>
                    </ListItemAvatar>
                    
                    <div>
                        
                        <ListItemText primary={book.title} secondary={`${book.author} - ${book.year}`}/> 
                        
                    </div>
                    
            
                </ListItem>
                <div className="book-trash">
                    <FaRegTrashAlt className="fa-trash" onClick={() => onDelete(book.id)}/>
                </div>
                <Divider variant="inset"/>
                
            </div>
            <div className= "book-container-detail">
            <BookHighLight book={book} />

            </div>
        </section>
    )
}

export default Book

