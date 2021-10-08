import { useState } from "react";
import { TextField, Box, Button as Buton, Container } from '@material-ui/core'
import * as React from 'react';


const AddBook = ( { addBook } ) => {
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [year, setYear] = useState("");
    const [genre, setGenre] = useState("");
    const [lenguaje, setLenguage] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");

    const submit = (e) => {
        e.preventDefault();
        
        if(!title || !author || !year || !description){
            alert("La descripción, Autor, Título y Año, son obiatorios")
            return
        }

        addBook({ title, author, year, genre, lenguaje, description, image})

        setTitle("")
        setAuthor("")
        setYear("")
        setGenre("")
        setLenguage("")
        setDescription("")
        setImage("")


    }
   

    return (
        <div className="addbook-container">
          <h3>Agregar Nuevo Libro</h3>
          <Box width="sm" className="addbook-box"
            component="form"
            sx={{
              '& .MuiTextField-root': { m: 3, width: '25ch' },
            }}
            noValidate
            autoComplete="off"          
            onSubmit={submit}>
            <div>
               <TextField
                    required
                    id="outlined-required"
                    label="Título"
                    type="text" 
                    value={title}
                    onChange={(e) => setTitle(e.target.value)} /> 
            </div>
            
            <div>                
                <TextField
                    required
                    id="outlined-required"
                    label="Autor"
                    type="text"  
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)} />
            </div>

            <div>
                <TextField
                    required
                    id="outlined-number"
                    label="Año"
                    type="number"
                    InputLabelProps={{
                    shrink: true,
          }} 
                    value={year}
                    onChange={(e) => setYear(e.target.value)} />
            </div>

            <div>
                <TextField                    
                    id="outlined-search"
                    label="Genero" 
                    type="text" 
                    placeholder="Género" 
                    value={genre}
                    onChange={(e) => setGenre(e.target.value)} />
            </div>

            <div>
                <TextField
                    id="outlined-search"
                    label="Lenguaje"                 
                    type="text"  
                    placeholder="Lenguaje" 
                    value={lenguaje}
                    onChange={(e) => setLenguage(e.target.value)} />
            </div>

            <div>
                <TextField
                    fullWidth
                    id="standart-helper-text"
                    label="Descripción"
                    type="text"  
                    placeholder="Descripción" 
                    value={description}
                    onChange={(e) => setDescription(e.target.value)} />
            </div>
            <div>
                <TextField
                    fullWidth
                    type="text"  
                    placeholder="Link Foto" 
                    value={image}
                    onChange={(e) => setImage(e.target.value)} />
                
            </div>
            <div>
                <Buton className="box-button" variant="contained"type="submit">Guardar Libro</Buton>
            </div>
          </Box>
        </div>
    )
}

export default AddBook
