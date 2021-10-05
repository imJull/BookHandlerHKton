import {Button as Buton} from '@material-ui/core'

const Button = ({ color, onHide }) => {

    return (
        <div>
            <Buton
                variant="contained"
                color="primary"
                onClick={onHide} 
                style={{backgroundColor:color}}>Agregar Libro</Buton>
        </div>
    )
}

export default Button
