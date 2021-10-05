import { useState } from "react";

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
        <div>
          <h3>Agregar Nuevo Libro</h3>
          <form onSubmit={submit}>
            <div>
               <input
                    type="text" 
                    placeholder="Titlulo" 
                    value={title}
                    onChange={(e) => setTitle(e.target.value)} /> 
            </div>
            
            <div>                
                <input
                    type="text"  
                    placeholder="Autor" 
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)} />
            </div>

            <div>
                <input
                    type="number"  
                    placeholder="Año" 
                    value={year}
                    onChange={(e) => setYear(e.target.value)} />
            </div>

            <div>
                <input 
                    type="text" 
                    placeholder="Género" 
                    value={genre}
                    onChange={(e) => setGenre(e.target.value)} />
            </div>

            <div>
                <input
                    type="text"  
                    placeholder="Lenguaje" 
                    value={lenguaje}
                    onChange={(e) => setLenguage(e.target.value)} />
            </div>

            <div>
                <input
                    type="text"  
                    placeholder="Descripción" 
                    value={description}
                    onChange={(e) => setDescription(e.target.value)} />
            </div>
            <div>
                <input
                    type="text"  
                    placeholder="Link Foto" 
                    value={image}
                    onChange={(e) => setImage(e.target.value)} />
                
            </div>
            <input value="Guardar Libro" type="submit" />
          </form>
        </div>
    )
}

export default AddBook
