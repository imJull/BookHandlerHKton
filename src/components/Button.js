import { useState } from "react"
import AddBook from "./AddBook"

const Button = () => {
    const [openBtn, setOpenBtn] = useState(false)
    return (
        <div>
           <button 
                value={openBtn} 
                onClick={() => setOpenBtn(!openBtn)}>Agregar Libro</button>
            {openBtn && <AddBook />}
        </div>
    )
}

export default Button
