import { Fragment } from "react"
import classes from './footer.module.css'
import './footer.css'


const Footer=()=>{
    return(
        <Fragment>
            <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2023 76 SNAKE. All rights reserved.</p>
        <div className="footer-links">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
        </div>
      </div>
    </footer>

        </Fragment>
    )
}
export default Footer