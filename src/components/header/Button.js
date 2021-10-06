import {Button as Buton} from '@material-ui/core'
import { useState } from 'react'

const Button = ({ color, onHide }) => {
    const [btn, setBtn] = useState(true);

    const toggleBTN = () =>{
        setBtn(!btn)
    }

    const clickHandler = () => {
        toggleBTN()
        onHide()
    }
    const mensaje =  {
        agr: "Agregar Libro",
        quit: "Volver"}

    return (
        <div>
            <Buton
                variant="contained"
                color={btn ? "primary" : "secondary"}
                onClick={clickHandler} 
                style={{backgroundColor:color}}>{btn ? mensaje.agr : mensaje.quit }</Buton>
        </div>
    )
}

export default Button
