import React from 'react'
import { useState } from 'react';

const AddBook = ({ books, setBooks }) => {
    const [btitle, setBtitle] = useState('');
    const [bautor, setBautor] = useState('');
    const [byear, setByear] = useState();
    const [bgenre, setBgenre] = useState('');
    const [blenguaje, setLenguage] = useState('');
    const [bdescription, setBdescription] = useState('');
    const [bpicture, setBpicture] = useState('');

    const saveBtnHandler = (e) => {
        e.preventDefault();
        
        const newBook = () =>{
            setBooks([...books,{
                
            }])
        }
    }

    return (
        <div>
          <h3>Agregar Nuevo Libro</h3>
          <form>
            <div>
                <input 
                    placeholder="Titlulo" 
                    value={btitle}
                    onChange={(e) => setBtitle(e.target.value)} />
                <input 
                    placeholder="Autor" 
                    value={bautor}
                    onChange={(e) => setBautor(e.target.value)} />
                <input 
                    placeholder="Año" 
                    value={byear}
                    onChange={(e) => setByear(e.target.value)} />
                <input 
                    placeholder="Género" 
                    value={bgenre}
                    onChange={(e) => setBgenre(e.target.value)} />
                <input 
                    placeholder="Lenguaje" 
                    value={blenguaje}
                    onChange={(e) => setLenguage(e.target.value)} />
                <input 
                    placeholder="Descripción" 
                    value={bdescription}
                    onChange={(e) => setBdescription(e.target.value)} />
                <input 
                    placeholder="Link Foto" 
                    value={bpicture}
                    onChange={(e) => setBpicture(e.target.value)} />
                
            </div>
            <button type="submit" onClick={saveBtnHandler}>Guardar Libro</button>
          </form>
        </div>
    )
}

export default AddBook
