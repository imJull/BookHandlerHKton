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

    return (
        <div>
            <Buton
                variant="contained"
                color={btn ? "primary" : "secondary"}
                onClick={clickHandler} 
                style={{backgroundColor:color}}>{btn ? "Agregar Libro" : "Volver"}</Buton>
        </div>
    )
}

export default Button
