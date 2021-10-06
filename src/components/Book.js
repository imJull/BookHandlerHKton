import { FaRegTrashAlt } from 'react-icons/fa';
import { Avatar, ListItem, Divider, ListItemAvatar, ListItemText } from '@material-ui/core'

const DetailBook = ( {book, onDelete}) => {
    return (
        <section>
            <div className="book-container">
                <ListItem className="book-item" key={book.id}>
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
            <div book-container-detail>


            </div>
        </section>
    )
}

export default DetailBook

