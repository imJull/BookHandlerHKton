const Button = ({ color, onClick }) => {

    return (
        <div>
            <button
                onClick={onClick} 
                style={{backgroundColor:color}}>Agregar Libro</button>
        </div>
    )
}

export default Button
