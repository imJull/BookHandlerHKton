import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@material-ui/core'

const BookHighLight = ({book}) => {
    return (
        <Card sx={{ maxWidth: 900, width: 450, maxHeight:800 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="280"
                    image={book.image}
                    alt="imagen"
                />
            <CardContent> 
                <Typography gutterBottom variant="body1" component="div">
                    Titulo: {book.title}
                </Typography>
                <Typography gutterBottom variant="body1" component="div">
                    Autor: {book.author}
                </Typography>
                <Typography gutterBottom variant="body1" component="div">
                    Año: {book.year}
                </Typography>
                <Typography gutterBottom variant="body1" component="div">
                    Genero: {book.genre}
                </Typography>
                <Typography gutterBottom variant="body1" component="div">
                    Lenguage:{book.lenguage}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                    Descripcion: {book.description}
                </Typography>
            </CardContent>
            </CardActionArea>
        </Card>
    )
}

export default BookHighLight
