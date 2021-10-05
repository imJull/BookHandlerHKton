const Button = ({ color, onHide }) => {

    return (
        <div>
            <button
                onClick={onHide} 
                style={{backgroundColor:color}}>Agregar Libro</button>
        </div>
    )
}

export default Button
