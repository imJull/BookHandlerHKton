import BookHighLight from './BookHighLight';
import { FaRegTrashAlt } from 'react-icons/fa';
import { Avatar, ListItem, Divider, ListItemAvatar, ListItemText } from '@material-ui/core'
import { useState } from 'react';

const Book = ( {book, onDelete}) => {
    const [showDetail, setshowDetail] = useState(false)

    const clickDetail = (id) =>{
        if (id === book.id){setshowDetail(!showDetail)}   
    }

    return (
        <section className="book-section">
            <div className="book-container" onClick={() => clickDetail(book.id)}>
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
            {showDetail && <BookHighLight book={book} />}

            </div>
        </section>
    )
}

export default Book

