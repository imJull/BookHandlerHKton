import Button from "./Button"

const Header = ( {onHide} ) => {

    return (
        <div>
          <h1>J2T Libro</h1>
          <h4>Su desición</h4>
          <div>
              <Button color="green" onHide={onHide}/>
          </div>
        </div>
    )
}

export default Header
