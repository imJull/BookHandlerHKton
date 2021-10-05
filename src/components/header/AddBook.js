import { useState } from "react";

const AddBook = ( { addBook } ) => {
    const [btitle, setBtitle] = useState("");
    const [bautor, setBautor] = useState("");
    const [byear, setByear] = useState("");
    const [bgenre, setBgenre] = useState("");
    const [blenguaje, setLenguage] = useState("");
    const [bdescription, setBdescription] = useState("");
    const [bpicture, setBpicture] = useState("");

    const submit = (e) => {
        e.preventDefault();
        
        if(!btitle || !bautor || !byear || !bdescription){
            alert("La descripción, Autor, Título y Año, son obiatorios")
            return
        }

        addBook({ btitle, bautor, byear, bgenre, blenguaje, bdescription, bpicture})

        setBtitle("")
        setBautor("")
        setByear("")
        setBgenre("")
        setLenguage("")
        setBdescription("")
        setBpicture("")


    }
   

    return (
        <div>
          <h3>Agregar Nuevo Libro</h3>
          <form onSubmit={submit}>
            <div>
               <input
                    type="text" 
                    placeholder="Titlulo" 
                    value={btitle}
                    onChange={(e) => setBtitle(e.target.value)} /> 
            </div>
            
            <div>                
                <input
                    type="text"  
                    placeholder="Autor" 
                    value={bautor}
                    onChange={(e) => setBautor(e.target.value)} />
            </div>

            <div>
                <input
                    type="number"  
                    placeholder="Año" 
                    value={byear}
                    onChange={(e) => setByear(e.target.value)} />
            </div>

            <div>
                <input 
                    type="text" 
                    placeholder="Género" 
                    value={bgenre}
                    onChange={(e) => setBgenre(e.target.value)} />
            </div>

            <div>
                <input
                    type="text"  
                    placeholder="Lenguaje" 
                    value={blenguaje}
                    onChange={(e) => setLenguage(e.target.value)} />
            </div>

            <div>
                <input
                    type="text"  
                    placeholder="Descripción" 
                    value={bdescription}
                    onChange={(e) => setBdescription(e.target.value)} />
            </div>
            <div>
                <input
                    type="text"  
                    placeholder="Link Foto" 
                    value={bpicture}
                    onChange={(e) => setBpicture(e.target.value)} />
                
            </div>
            <input value="Guardar Libro" type="submit" />
          </form>
        </div>
    )
}

export default AddBook
