import Button from "./Button"
import { Typography } from '@material-ui/core'

const Header = ( {onHide} ) => {

    return (
        <section className="header">

           <div className="header-text">
                <Typography variant="h2">J2T Libro</Typography>
                <Typography variant="h5">Su aja</Typography>
           </div>
          
          <div>
              <Button onHide={onHide}/>
          </div>
        </section>
    )
}

export default Header
