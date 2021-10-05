import AddBook from "./AddBook"
import Button from "./Button"

const Header = () => {
    const onClick = (e) => {
        console.log(e,"Click")
    }

    return (
        <div>
          <h1>J2T Libro</h1>
          <h4>Su desición</h4>
          <div>
              <Button color="green" onClick={onClick}/>
          </div>
        </div>
    )
}

export default Header
